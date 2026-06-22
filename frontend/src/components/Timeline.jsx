import { motion } from 'framer-motion';
import { TIMELINE_EVENTS } from '../utils/constants';
import { fadeInUp, staggerContainer } from '../animations/variants';
import SectionWrapper from './SectionWrapper';

export default function Timeline() {
  return (
    <SectionWrapper id="timeline" title="Our Beautiful Memories" subtitle="Every chapter of our friendship">
      <motion.div
        className="relative"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-primary via-purple-primary to-gold md:left-1/2 md:-translate-x-px" />

        {TIMELINE_EVENTS.map((event, index) => (
          <motion.div
            key={event.id}
            className={`relative mb-10 flex items-center gap-6 md:mb-12 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
            variants={fadeInUp}
          >
            <div className={`flex-1 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
              <motion.div
                className="glass-card inline-block rounded-2xl p-6 text-left"
                whileHover={{ scale: 1.03, y: -4 }}
              >
                <span className="text-3xl" role="img" aria-label={event.title}>
                  {event.emoji}
                </span>
                <h3 className="mt-2 font-display text-xl font-semibold">{event.title}</h3>
                <p className="mt-2 text-sm text-[var(--text-secondary)]">{event.description}</p>
              </motion.div>
            </div>

            <div className="absolute left-4 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-pink-primary to-purple-primary text-sm text-white shadow-lg md:left-1/2">
              {event.id}
            </div>

            <div className="hidden flex-1 md:block" />
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
