import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import img1 from "../../assets/sign/1.jpg"
import img2 from "../../assets/sign/2.jpg"
import img3 from "../../assets/sign/3.jpg"
import img4 from "../../assets/sign/4.jpg"
import img5 from "../../assets/sign/5.jpg"
import img6 from "../../assets/sign/6.jpg"
import img7 from "../../assets/sign/7.jpg"
import img8 from "../../assets/sign/8.jpg"
import img9 from "../../assets/sign/9.jpg"

const allFlavors = [
  {
    name: 'Belgian Chocolate Bliss',
    description: 'Rich dark chocolate ganache layered with Belgian cocoa and a hint of espresso.',
    image: img1,
    tag: 'Bestseller',
  },
  {
    name: 'Strawberry Velvet',
    description: 'Fresh summer strawberries blended into velvety cream with a rosewater kiss.',
    image: img2,
    tag: 'Seasonal',
  },
  {
    name: 'Vanilla Gold',
    description: 'Madagascar bourbon vanilla infused into silky smooth custard with edible gold.',
    image: img3,
    tag: 'Signature',
  },
  {
    name: 'Caramel Swirl Dream',
    description: 'Salted butter caramel ribboned through creamy custard with crushed praline.',
    image: img4,
    tag: 'New',
  },
  {
    name: 'Pistachio Rose',
    description: 'Stone-ground Sicilian pistachios with a delicate rose water essence.',
    image: img5,
    tag: 'Limited',
  },
  {
    name: 'Espresso Affogato',
    description: 'Double-shot espresso frozen into velvety gelato with amaretti crumble.',
    image: img6,
    tag: 'Signature',
  },
  {
    name: 'Mango Tango',
    description: 'Alphonso mango purée with a touch of cardamom and coconut cream.',
    image: img7,
    tag: 'Seasonal',
  },
  {
    name: 'Dark Cherry Noir',
    description: 'Bing cherries steeped in kirsch with Belgian chocolate shards.',
    image: img8,
    tag: 'Limited',
  },
  {
    name: 'Lavender Honey',
    description: 'Provence lavender infused into wildflower honey with lemon zest.',
    image: img9,
    tag: 'New',
  },
]

const INITIAL_FLAVORS = 3

const FlavorCard = ({ flavor, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: (index % 3) * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -8 }}
      className="group relative"
    >
      {/* Glow behind card */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#D9A441]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

      {/* Card */}
      <div className="relative bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
        {/* Image container */}
        <div className="relative h-64 overflow-hidden">
          <motion.img
            src={flavor.image}
            alt={flavor.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Tag */}
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-[#D9A441]/90 text-black text-xs font-inter font-semibold tracking-wider uppercase rounded-full">
              {flavor.tag}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-inter text-xl md:text-2xl font-semibold text-white/95 tracking-tight mb-3">
            {flavor.name}
          </h3>

          <p className="font-inter text-sm md:text-base text-white/50 tracking-wide leading-relaxed">
            {flavor.description}
          </p>

          {/* Decorative line */}
          <div className="mt-6 w-12 h-0.5 bg-gradient-to-r from-[#D9A441] to-transparent group-hover:w-20 transition-all duration-500" />
        </div>

        {/* Hover border glow */}
        <div className="absolute inset-0 rounded-2xl border border-[#D9A441]/0 group-hover:border-[#D9A441]/30 transition-all duration-500 pointer-events-none" />
      </div>
    </motion.div>
  )
}

const SignatureFlavors = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const displayedFlavors = isExpanded ? allFlavors : allFlavors.slice(0, INITIAL_FLAVORS)

  return (
    <section id="flavors" className="relative py-24 md:py-32 bg-[#020505] overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D9A441]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#D9A441]/5 rounded-full blur-[100px] pointer-events-none" />

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
            Our Finest Selection
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-inter text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white/95 mb-6"
          >
            Signature Flavors
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-inter text-base md:text-lg text-white/50 tracking-wide max-w-xl mx-auto"
          >
            A curated collection of handcrafted indulgence.
          </motion.p>

          {/* Decorative element */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 w-24 h-px bg-gradient-to-r from-transparent via-[#D9A441]/50 to-transparent mx-auto"
          />
        </motion.div>

        {/* Flavor cards grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {displayedFlavors.map((flavor, index) => (
              <FlavorCard key={flavor.name} flavor={flavor} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 md:mt-20 text-center"
        >
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="shimmer-btn relative px-10 py-4 bg-gradient-to-r from-[#8B6914] via-[#D9A441] to-[#E8B84A] font-inter text-sm font-semibold tracking-[0.2em] text-black uppercase overflow-hidden rounded-sm transition-all duration-300 hover:shadow-[0_0_50px_rgba(217,164,65,0.5)]"
          >
            <span className="relative z-10">
              {isExpanded ? 'Show Less' : 'Explore All Flavors'}
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default SignatureFlavors
