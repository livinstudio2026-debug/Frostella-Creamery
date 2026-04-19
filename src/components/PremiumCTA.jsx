import { useRef, useMemo } from 'react'
import { motion, useInView } from 'framer-motion'

const PremiumCTA = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const particles = useMemo(() =>
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 8,
      duration: 15 + Math.random() * 20,
      size: 1 + Math.random() * 3,
    })), []
  )

  return (
    <section className="relative py-32 md:py-48 bg-[#020505] overflow-hidden">
      {/* Multi-layer background glows */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D9A441]/10 rounded-full blur-[200px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-[#D9A441]/8 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] bg-[#D9A441]/6 rounded-full blur-[120px] pointer-events-none" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-[#D9A441]"
            style={{
              left: p.left,
              bottom: '-10px',
              width: p.size,
              height: p.size,
              filter: 'blur(1px)',
            }}
            animate={{
              y: ['0vh', '-100vh'],
              x: [0, 20 + Math.random() * 30],
              opacity: [0, 0.6, 0.6, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Decorative lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-[#D9A441]/20 to-transparent" />
        <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-[#D9A441]/20 to-transparent" />
      </div>

      <div ref={ref} className="relative max-w-4xl mx-auto px-6 sm:px-8 text-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Decorative top element */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#D9A441]/50" />
              <div className="w-2 h-2 rotate-45 bg-[#D9A441]/60" />
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#D9A441]/50" />
            </div>
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="block font-inter text-xs tracking-[0.4em] text-[#D9A441]/80 uppercase mb-6"
          >
            A Final Indulgence
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-inter text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white/95 leading-[0.95] mb-8"
          >
            Taste The
          </motion.h2>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-inter text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-12"
          >
            <span className="bg-gradient-to-r from-[#D9A441] via-[#E8B84A] to-[#D9A441] bg-clip-text text-transparent">
              Extraordinary
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-inter text-lg md:text-xl text-white/50 tracking-wide max-w-xl mx-auto mb-12"
          >
            Every scoop is crafted to turn dessert into a lasting memory.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.7, type: 'spring' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-[#8B6914] via-[#D9A441] to-[#E8B84A] rounded-full font-inter text-base font-semibold tracking-[0.15em] text-black uppercase overflow-hidden transition-all duration-500 hover:shadow-[0_0_60px_rgba(217,164,65,0.5)]"
          >
            {/* Shine animation */}
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </span>

            <a href="#contact" className="relative z-10 flex items-center gap-3">
              Order Your Scoop
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </motion.button>

          {/* Decorative bottom element */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center mt-16"
          >
            <div className="flex items-center gap-3">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#D9A441]/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#D9A441]/40" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#D9A441]/30" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default PremiumCTA
