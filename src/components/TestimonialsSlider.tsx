import React, { useState, useEffect, useRef } from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const TestimonialsSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<number>(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoSlideTimerRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials = TESTIMONIALS;
  const currentTestimonial = testimonials[currentIndex];

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleSelect = (idx: number) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  // Autoplay functionality with pause on hover
  useEffect(() => {
    if (isPaused) return;

    autoSlideTimerRef.current = setTimeout(() => {
      handleNext();
    }, 6500);

    return () => {
      if (autoSlideTimerRef.current) {
        clearTimeout(autoSlideTimerRef.current);
      }
    };
  }, [currentIndex, isPaused]);

  // Slide animation variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.35 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.25 },
      },
    }),
  };

  return (
    <section
      id="testimonials-slider-section"
      className="max-w-7xl mx-auto px-6 sm:px-8 space-y-10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-gray-100">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono text-[#108A00] font-semibold shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#108A00]" />
            <span>Verified Client Endorsements</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight">
            Words From Brands I've Helped Grow.
          </h2>

          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed max-w-xl">
            Real feedback from founders, executives, and directors on design excellence, search visibility surges, and direct commercial results.
          </p>
        </div>

        {/* Slider Controls */}
        <div className="flex items-center gap-3 self-start md:self-auto">
          <span className="font-mono text-xs text-zinc-400 font-semibold mr-2">
            <span className="text-zinc-900 text-sm">0{currentIndex + 1}</span> / 0{testimonials.length}
          </span>

          <button
            id="testimonial-prev-btn"
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="w-11 h-11 rounded-full bg-white border border-gray-300 text-zinc-700 hover:border-[#108A00] hover:text-[#108A00] hover:bg-emerald-50/50 flex items-center justify-center transition-all shadow-xs active:scale-95 focus:outline-none"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            id="testimonial-next-btn"
            onClick={handleNext}
            aria-label="Next testimonial"
            className="w-11 h-11 rounded-full bg-white border border-gray-300 text-zinc-700 hover:border-[#108A00] hover:text-[#108A00] hover:bg-emerald-50/50 flex items-center justify-center transition-all shadow-xs active:scale-95 focus:outline-none"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Testimonial Stage Card */}
      <div className="relative overflow-hidden min-h-[380px] sm:min-h-[340px] rounded-3xl bg-white border border-gray-200 shadow-md p-7 sm:p-12">
        {/* Subtle Decorative Background Elements */}
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-emerald-50 rounded-full blur-2xl pointer-events-none opacity-60" />
        <Quote className="absolute right-8 bottom-8 w-28 h-28 text-gray-100 pointer-events-none select-none" />

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentTestimonial.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="relative z-10 flex flex-col justify-between h-full space-y-8"
          >
            {/* Top Bar: Stars + Highlight Metric */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              {/* Star Rating */}
              <div className="flex items-center gap-1">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
                <span className="ml-2 text-xs font-mono font-semibold text-zinc-500">
                  5.0 / 5.0 Rating
                </span>
              </div>

              {/* Metric Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-[#108A00]">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>{currentTestimonial.highlightMetric}</span>
              </div>
            </div>

            {/* Testimonial Quote */}
            <blockquote className="text-lg sm:text-xl md:text-2xl text-zinc-800 font-normal leading-relaxed">
              "{currentTestimonial.quote}"
            </blockquote>

            {/* Client Profile and Project Details */}
            <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                {/* Client Monogram Avatar */}
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200 text-[#108A00] flex items-center justify-center font-display font-bold text-base shadow-xs shrink-0">
                  {currentTestimonial.clientName
                    .split(' ')
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join('')}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display font-bold text-base text-zinc-900 tracking-tight">
                      {currentTestimonial.clientName}
                    </h3>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#108A00]" />
                  </div>
                  <p className="text-xs text-zinc-600 font-medium">
                    {currentTestimonial.clientRole} · <span className="text-zinc-900 font-semibold">{currentTestimonial.company}</span>
                  </p>
                </div>
              </div>

              {/* Location & Project Type */}
              <div className="flex flex-wrap items-center gap-2">
                {currentTestimonial.location && (
                  <span className="text-xs font-mono text-zinc-400 bg-gray-50 px-3 py-1 rounded-lg border border-gray-200">
                    {currentTestimonial.location}
                  </span>
                )}
                <span className="text-xs font-mono text-emerald-800 bg-emerald-50/80 px-3 py-1 rounded-lg border border-emerald-100 font-medium">
                  {currentTestimonial.projectType}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Interactive Client Selector Tabs & Dot Indicators */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
        {/* Pagination Dots */}
        <div className="flex items-center gap-2">
          {testimonials.map((t, idx) => (
            <button
              key={t.id}
              id={`testimonial-dot-${idx}`}
              onClick={() => handleSelect(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                idx === currentIndex
                  ? 'w-8 bg-[#108A00]'
                  : 'w-2.5 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Quick-Select Brand Chips */}
        <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2">
          {testimonials.map((t, idx) => (
            <button
              key={t.id}
              id={`testimonial-chip-${idx}`}
              onClick={() => handleSelect(idx)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all focus:outline-none ${
                idx === currentIndex
                  ? 'bg-zinc-900 text-white shadow-xs font-semibold'
                  : 'bg-gray-100 text-zinc-600 hover:bg-gray-200/80 hover:text-zinc-900'
              }`}
            >
              {t.company.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
