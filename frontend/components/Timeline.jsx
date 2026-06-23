'use client';

import { motion } from 'framer-motion';
import { TIMELINE_EVENTS } from '@/utils/constants';
import { fadeInUp, staggerContainer } from '@/animations/variants';
import SectionWrapper from '@/components/SectionWrapper';

export default function Timeline() {
  return (
    <SectionWrapper
      id="timeline"
      badge="💫 Our Story"
      title="Our Beautiful Memories"
      subtitle="Every chapter of our friendship"
      variant="alt"
    >
      <motion.div
        className="timeline-list"
        variants={staggerContainer}
        initial="visible"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {TIMELINE_EVENTS.map((event) => (
          <motion.article key={event.id} className="timeline-card" variants={fadeInUp}>
            <div className="timeline-card__number">{event.id}</div>
            <div className="timeline-card__body">
              <span className="timeline-card__emoji" role="img" aria-label={event.title}>
                {event.emoji}
              </span>
              <h3 className="font-display text-lg font-semibold">{event.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-[var(--text-secondary)]">
                {event.description}
              </p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
