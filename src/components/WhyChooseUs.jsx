import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import img1 from "../../assets/why/1.jpg"
import img2 from "../../assets/why/2.jpg"
import img3 from "../../assets/why/3.jpg"

const features = [
  {
    title: 'Premium Ingredients',
    text: 'Only the finest ingredients are chosen for unmatched flavor.',
    image: img1,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#D9A441]">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
  },
  {
    title: 'Handcrafted Daily',
    text: 'Freshly prepared every day for perfect texture and taste.',
    image: img2,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#D9A441]">
        <path d="M12 21a9 9 0 0 0 9-9c0-3.03-1.52-5.73-3.85-7.37A9 9 0 0 0 3 12a9 9 0 0 0 9 9z"/>
        <path d="M12 3v9l3 3"/>
      </svg>
    ),
  },
  {
    title: 'Memorable Moments',
    text: 'Designed to make every visit feel extraordinary.',
    image: img3,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#D9A441]">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
  },
]

const FeatureCard = ({ feature, index }) => {
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
      <div className="relative h-full bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={feature.image}
            alt={feature.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Icon */}
          <div className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center mb-6">
            {feature.icon}
          </div>

          <h3 className="font-inter text-xl md:text-2xl font-semibold text-white/95 tracking-tight mb-3">
            {feature.title}
          </h3>

          <p className="font-inter text-sm md:text-base text-white/50 tracking-wide leading-relaxed">
            {feature.text}
          </p>

          {/* Gold accent line */}
          <div className="mt-6 w-12 h-0.5 bg-gradient-to-r from-[#D9A441] to-transparent group-hover:w-20 transition-all duration-500" />
        </div>

        {/* Hover border glow */}
        <div className="absolute inset-0 rounded-2xl border border-[#D9A441]/0 group-hover:border-[#D9A441]/30 transition-all duration-500 pointer-events-none" />
      </div>
    </motion.div>
  )
}

const WhyChooseUs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section className="relative py-24 md:py-32 bg-[#020505] overflow-hidden">
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
            Why Frostella
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-inter text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white/95 mb-6"
          >
            An Experience Beyond Taste
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-inter text-base md:text-lg text-white/50 tracking-wide max-w-xl mx-auto"
          >
            Every detail is designed to elevate your dessert moment.
          </motion.p>

          {/* Decorative element */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 w-24 h-px bg-gradient-to-r from-transparent via-[#D9A441]/50 to-transparent mx-auto"
          />
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
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

export default WhyChooseUs
