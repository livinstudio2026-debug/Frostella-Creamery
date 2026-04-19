import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import img1 from "../../assets/story/1.jpg"

const OurStory = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="story" className="relative py-24 md:py-32 bg-[#020505] overflow-hidden">
      {/* Ambient glow behind image */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#D9A441]/5 rounded-full blur-[150px] pointer-events-none" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#D9A441]/20 to-transparent blur-3xl transform -translate-x-4 -translate-y-4 pointer-events-none" />

            {/* Image container */}
            <div className="relative group overflow-hidden rounded-2xl">
              <motion.img
                src={img1}
                alt="Artisan ice cream preparation"
                className="w-full h-[400px] md:h-[500px] lg:h-[550px] object-cover"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              {/* Decorative corner */}
              <div className="absolute bottom-6 left-6 w-16 h-16 border-l-2 border-b-2 border-[#D9A441]/40 rounded-bl-xl" />
              <div className="absolute top-6 right-6 w-16 h-16 border-r-2 border-t-2 border-[#D9A441]/40 rounded-tr-xl" />
            </div>

            {/* Floating accent */}
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              animate={isInView ? { scale: 1, rotate: -10 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#D9A441]/20 to-transparent rounded-2xl blur-xl pointer-events-none"
            />
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <span className="block font-inter text-xs tracking-[0.35em] text-[#D9A441]/80 uppercase mb-4">
              Our Story
            </span>

            <h2 className="font-inter text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white/95 leading-[1.1] mb-8">
              Crafted With Passion
            </h2>

            {/* Decorative line */}
            <div className="w-20 h-0.5 bg-gradient-to-r from-[#D9A441] to-transparent mb-8" />

            <p className="font-inter text-base md:text-lg text-white/55 tracking-wide leading-relaxed mb-6">
              At Frostella Creamery, every scoop begins with a dedication to quality.
              We blend fresh ingredients, refined techniques, and artistic presentation
              to create desserts that feel unforgettable.
            </p>

            <p className="font-inter text-base md:text-lg text-white/55 tracking-wide leading-relaxed mb-10">
              From the first swirl to the final garnish,
              each creation is designed to turn a simple treat
              into a luxurious experience.
            </p>

            {/* Signature element */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#8B6914] via-[#D9A441] to-[#E8B84A] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div>
                <p className="font-inter text-sm text-white/80 font-medium">Est. 2019</p>
                <p className="font-inter text-xs text-white/40">Frostella Creamery</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default OurStory
