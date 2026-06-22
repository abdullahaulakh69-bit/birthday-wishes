import { motion } from 'framer-motion';
import { sectionVariants } from '../animations/variants';

export default function SectionWrapper({ id, title, subtitle, children, className = '' }) {
  return (
    <motion.section
      id={id}
      className={`section-padding relative z-10 ${className}`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      <div className="mx-auto max-w-6xl">
        {title && (
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold gradient-text sm:text-4xl md:text-5xl">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-4 text-lg text-[var(--text-secondary)]">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </motion.section>
  );
}
