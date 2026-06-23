import { execSync, spawn } from 'child_process';
import fs from 'fs';
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');

const CACHE_DIRS = [
  path.join(projectRoot, 'node_modules', '.cache', 'birthday-surprise-next'),
  path.join(projectRoot, '.next'),
  path.join(
    process.env.LOCALAPPDATA || path.join(os.homedir(), 'AppData', 'Local'),
    'birthday-surprise-next'
  ),
];

function sleep(ms) {
  try {
    execSync(`timeout /t ${Math.ceil(ms / 1000)} /nobreak >nul`, {
      stdio: 'ignore',
      shell: true,
    });
  } catch {
    /* ignore */
  }
}

function killPort(port) {
  if (process.platform !== 'win32') return;
  try {
    const out = execSync(`netstat -ano | findstr :${port}`, { encoding: 'utf8' });
    const pids = [
      ...new Set(
        out
          .split('\n')
          .map((line) => line.trim().split(/\s+/).pop())
          .filter((pid) => pid && /^\d+$/.test(pid) && pid !== '0')
      ),
    ];
    for (const pid of pids) {
      try {
        execSync(`taskkill /F /PID ${pid}`, { stdio: 'ignore' });
        console.log(`✓ Stopped process ${pid} (port ${port})`);
      } catch {
        /* gone */
      }
    }
  } catch {
    /* port free */
  }
}

function removeDir(dir) {
  if (!fs.existsSync(dir)) return true;

  if (process.platform === 'win32') {
    try {
      // Handles normal folders and junctions
      execSync(`cmd /c rmdir /s /q "${dir}"`, { stdio: 'ignore' });
      if (!fs.existsSync(dir)) return true;
    } catch {
      /* fall through */
    }
  }

  for (let i = 0; i < 3; i++) {
    try {
      fs.rmSync(dir, { recursive: true, force: true });
      if (!fs.existsSync(dir)) return true;
    } catch {
      sleep(800);
    }
  }
  return !fs.existsSync(dir);
}

function cleanCaches() {
  let allOk = true;
  for (const dir of CACHE_DIRS) {
    if (fs.existsSync(dir)) {
      const ok = removeDir(dir);
      if (ok) console.log(`✓ Cleared ${path.basename(dir)} cache`);
      else {
        allOk = false;
        console.warn(`⚠ Could not clear: ${dir}`);
      }
    }
  }
  return allOk;
}

console.log('\n🎂 Birthday Surprise — starting dev server...\n');

killPort(3000);
killPort(3001);
sleep(500);

const cacheOk = cleanCaches();
if (!cacheOk) {
  console.warn(
    '\n⚠ OneDrive may be locking files. Fix: pause OneDrive sync, then run npm run dev again.'
  );
  console.warn('   Or move the project to C:\\Projects\\automoile\n');
}

console.log('→ http://localhost:3000\n');

const env = {
  ...process.env,
  NEXT_TELEMETRY_DISABLED: '1',
};

const child = spawn('npx', ['next', 'dev', '-p', '3000'], {
  cwd: projectRoot,
  env,
  stdio: 'inherit',
  shell: true,
});

child.on('exit', (code) => process.exit(code ?? 0));
