import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { api } from '../services/api';
import SectionWrapper from './SectionWrapper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const PLACEHOLDER_PHOTOS = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  title: `Memory ${i + 1}`,
  caption: `A beautiful moment #${i + 1}`,
  url: `https://picsum.photos/seed/gallery${i + 1}/800/600`,
  thumbnail: `https://picsum.photos/seed/gallery${i + 1}/400/300`,
}));

export default function MemoryGallery() {
  const [photos, setPhotos] = useState(PLACEHOLDER_PHOTOS);
  const [loading, setLoading] = useState(true);
  const [fullscreen, setFullscreen] = useState(null);

  useEffect(() => {
    api
      .getPhotos()
      .then(setPhotos)
      .catch(() => setPhotos(PLACEHOLDER_PHOTOS))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setFullscreen(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <SectionWrapper id="gallery" title="Memory Gallery" subtitle="Precious moments captured forever">
      {loading ? (
        <div className="flex justify-center py-12">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-pink-primary border-t-transparent" />
        </div>
      ) : (
        <div className="relative px-4 sm:px-12">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation={{
              prevEl: '.gallery-prev',
              nextEl: '.gallery-next',
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            className="pb-12"
          >
            {photos.map((photo) => (
              <SwiperSlide key={photo.id}>
                <motion.div
                  className="group cursor-pointer overflow-hidden rounded-2xl shadow-lg"
                  whileHover={{ y: -8, scale: 1.02 }}
                  onClick={() => setFullscreen(photo)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setFullscreen(photo)}
                  aria-label={`View ${photo.title}`}
                >
                  <img
                    src={photo.thumbnail || photo.url}
                    alt={photo.title}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="glass-card p-4">
                    <h3 className="font-semibold">{photo.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)]">{photo.caption}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            type="button"
            className="gallery-prev absolute left-0 top-1/3 z-10 flex h-10 w-10 items-center justify-center rounded-full glass-card transition hover:scale-110 focus-visible:outline-2 focus-visible:outline-gold"
            aria-label="Previous photo"
          >
            <HiChevronLeft size={24} />
          </button>
          <button
            type="button"
            className="gallery-next absolute right-0 top-1/3 z-10 flex h-10 w-10 items-center justify-center rounded-full glass-card transition hover:scale-110 focus-visible:outline-2 focus-visible:outline-gold"
            aria-label="Next photo"
          >
            <HiChevronRight size={24} />
          </button>
        </div>
      )}

      <AnimatePresence>
        {fullscreen && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setFullscreen(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Fullscreen photo preview"
          >
            <button
              type="button"
              className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 focus-visible:outline-2 focus-visible:outline-gold"
              onClick={() => setFullscreen(null)}
              aria-label="Close fullscreen"
            >
              <HiX size={24} />
            </button>
            <motion.img
              src={fullscreen.url}
              alt={fullscreen.title}
              className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
