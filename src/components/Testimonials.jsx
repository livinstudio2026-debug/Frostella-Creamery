import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import img1 from "../../assets/testimonials/1.jpg"
import img2 from "../../assets/testimonials/2.jpg"
import img3 from "../../assets/testimonials/3.jpg"

const testimonials = [
  {
    name: 'Sophia Carter',
    review: 'The most luxurious ice cream experience I have ever had. Every detail feels beautifully crafted.',
    image: img1,
    rating: 5,
  },
  {
    name: 'James Bennett',
    review: 'From presentation to flavor, Frostella turns dessert into an unforgettable memory.',
    image: img2,
    rating: 5,
  },
  {
    name: 'Emily Watson',
    review: 'Elegant, rich, and absolutely delicious. A place I would return to again and again.',
    image: img3,
    rating: 5,
  },
]

const StarRating = ({ rating }) => (
  <div className="flex items-center gap-1">
    {[...Array(rating)].map((_, i) => (
      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#D9A441" stroke="#D9A441" strokeWidth="1">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))}
  </div>
)

const TestimonialCard = ({ testimonial, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -6 }}
      className="group relative"
    >
      {/* Glow behind card */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#D9A441]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

      {/* Card */}
      <div className="relative h-full bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
        {/* Quote icon */}
        <div className="mb-6">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#D9A441]/40">
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21c0 1 0 1 1 1z" fill="currentColor"/>
            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" fill="currentColor"/>
          </svg>
        </div>

        {/* Review text */}
        <p className="font-inter text-base md:text-lg text-white/70 tracking-wide leading-relaxed mb-8 italic">
          "{testimonial.review}"
        </p>

        {/* Rating */}
        <div className="mb-6">
          <StarRating rating={testimonial.rating} />
        </div>

        {/* Customer info */}
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div className="relative">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-14 h-14 rounded-full object-cover border-2 border-[#D9A441]/30"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#D9A441]/20 to-transparent" />
          </div>

          <div>
            <h4 className="font-inter text-base font-semibold text-white/90 tracking-tight">
              {testimonial.name}
            </h4>
            <p className="font-inter text-xs text-white/40 tracking-wide uppercase">
              Guest
            </p>
          </div>
        </div>

        {/* Gold accent line */}
        <div className="mt-6 w-12 h-0.5 bg-gradient-to-r from-[#D9A441] to-transparent group-hover:w-20 transition-all duration-500" />

        {/* Hover border glow */}
        <div className="absolute inset-0 rounded-2xl border border-[#D9A441]/0 group-hover:border-[#D9A441]/30 transition-all duration-500 pointer-events-none" />
      </div>
    </motion.div>
  )
}

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="reviews" className="relative py-24 md:py-32 bg-[#020505] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#D9A441]/3 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D9A441]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#D9A441]/5 rounded-full blur-[100px] pointer-events-none" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="block font-inter text-xs tracking-[0.35em] text-[#D9A441]/80 uppercase mb-4"
          >
            Guest Experiences
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-inter text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white/95 mb-6"
          >
            Loved By Every Guest
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-inter text-base md:text-lg text-white/50 tracking-wide max-w-xl mx-auto"
          >
            Our guests remember more than flavor — they remember the experience.
          </motion.p>

          {/* Decorative element */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 w-24 h-px bg-gradient-to-r from-transparent via-[#D9A441]/50 to-transparent mx-auto"
          />
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 flex justify-center"
        >
          <div className="flex items-center gap-3">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#D9A441]/50" />
            <div className="w-2 h-2 rounded-full bg-[#D9A441]/60" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#D9A441]/50" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
