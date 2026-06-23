import { BIRTHDAY_DATE } from './constants';

export function getNextBirthday(dateStr = BIRTHDAY_DATE) {
  const [, month, day] = dateStr.split('-').map(Number);
  const now = new Date();

  if (now.getMonth() === month - 1 && now.getDate() === day) {
    return new Date(now.getFullYear(), month - 1, day, 23, 59, 59);
  }

  let target = new Date(now.getFullYear(), month - 1, day, 0, 0, 0);
  if (target < now) {
    target = new Date(now.getFullYear() + 1, month - 1, day, 0, 0, 0);
  }
  return target;
}

export function getBirthdayCountdown(targetDate) {
  const now = new Date();
  const [_, month, day] = BIRTHDAY_DATE.split('-').map(Number);

  if (now.getMonth() === month - 1 && now.getDate() === day) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isBirthday: true };
  }

  const diff = targetDate.getTime() - now.getTime();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isBirthday: true };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    isBirthday: false,
  };
}

export function padTime(value) {
  return String(value).padStart(2, '0');
}

export async function shareContent(title, text, url) {
  if (navigator.share) {
    await navigator.share({ title, text, url });
    return true;
  }
  await navigator.clipboard.writeText(url);
  return false;
}
