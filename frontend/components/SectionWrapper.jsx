'use client';

import { motion } from 'framer-motion';
import { sectionVariants } from '@/animations/variants';

export default function SectionWrapper({
  id,
  title,
  subtitle,
  badge,
  children,
  className = '',
  variant = 'default',
}) {
  const variantClass = variant === 'alt' ? 'section-alt' : '';

  return (
    <motion.section
      id={id}
      className={`section-padding relative z-[1] ${variantClass} ${className}`}
      variants={sectionVariants}
      initial="visible"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
    >
      <div className="mx-auto max-w-5xl">
        {title && (
          <header className="mb-10 text-center md:mb-12">
            {badge && <span className="section-badge">{badge}</span>}
            <h2 className="mt-3 font-display text-2xl font-bold gradient-text sm:text-3xl md:text-4xl">
              {title}
            </h2>
            <div className="section-divider" aria-hidden="true" />
            {subtitle && (
              <p className="mx-auto mt-4 max-w-xl text-base text-[var(--text-secondary)]">
                {subtitle}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </motion.section>
  );
}
