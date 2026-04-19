import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import img1 from "../../assets/gallery/1.jpg"
import img2 from "../../assets/gallery/2.jpg"
import img3 from "../../assets/gallery/3.jpg"
import img4 from "../../assets/gallery/4.jpg"
import img5 from "../../assets/gallery/5.jpg"
import img6 from "../../assets/gallery/6.jpg"
import img7 from "../../assets/gallery/7.jpg"
import img8 from "../../assets/gallery/8.jpg"
import img9 from "../../assets/gallery/9.jpg"

const galleryImages = [
  {
    src: img1,
    caption: 'Belgian Indulgence',
    size: 'large',
  },
  {
    src: img2,
    caption: 'Velvet Strawberry',
    size: 'small',
  },
  {
    src: img3,
    caption: 'Golden Vanilla',
    size: 'medium',
  },
  {
    src: img4,
    caption: 'Caramel Swirl',
    size: 'medium',
  },
  {
    src: img5,
    caption: 'Pistachio Dream',
    size: 'small',
  },
  {
    src: img6,
    caption: 'Espresso Affogato',
    size: 'large',
  },
  {
    src: img7,
    caption: 'Mango Tango',
    size: 'medium',
  },
  {
    src: img8,
    caption: 'Dark Cherry Noir',
    size: 'small',
  },
  {
    src: img9,
    caption: 'Lavender Honey',
    size: 'mdsmall',
  },
]

const GalleryImage = ({ image, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const sizeClasses = {
    large: 'md:col-span-2 md:row-span-2',
    medium: 'md:col-span-1 md:row-span-1',
    small: 'md:col-span-1 md:row-span-1',
    mdsmall: 'md:col-span-2 md:row-span-1',
  }

  const heightClasses = {
    large: 'h-80 md:h-[400px]',
    medium: 'h-64 md:h-80',
    mdsmall: 'h-64 md:h-80',
    small: 'h-48 md:h-64',
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.8,
        delay: (index % 4) * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={`group relative overflow-hidden rounded-2xl cursor-pointer ${sizeClasses[image.size]}`}
    >
      {/* Glow behind image */}
      <div className="absolute -inset-4 bg-gradient-to-b from-[#D9A441]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl"/>

      {/* Image container */}
      <div className="relative w-full h-full overflow-hidden rounded-2xl">
        <motion.img
          src={image.src}
          alt={image.caption}
          className={`w-full ${heightClasses[image.size]} object-cover transition-transform duration-700`}
          whileHover={{ scale: 1.08 }}
        />

        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Secondary overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Caption container */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
            <p className="font-inter text-lg md:text-xl text-white/95 tracking-wide mb-1">
              {image.caption}
            </p>
            <div className="w-12 h-0.5 bg-gradient-to-r from-[#D9A441] to-transparent" />
          </div>
        </div>

        {/* Animated corner accents */}
        <div className="absolute top-4 left-4 w-10 h-10 border-l-2 border-t-2 border-[#D9A441]/0 group-hover:border-[#D9A441]/80 transition-all duration-500 delay-100 rounded-tl-lg" />
        <div className="absolute top-4 right-4 w-10 h-10 border-r-2 border-t-2 border-[#D9A441]/0 group-hover:border-[#D9A441]/80 transition-all duration-500 delay-100 rounded-tr-lg" />
        <div className="absolute bottom-4 left-4 w-10 h-10 border-b-2 border-l-2 border-[#D9A441]/0 group-hover:border-[#D9A441]/80 transition-all duration-500 delay-100 rounded-bl-lg" />
        <div className="absolute bottom-4 right-4 w-10 h-10 border-b-2 border-r-2 border-[#D9A441]/0 group-hover:border-[#D9A441]/80 transition-all duration-500 delay-100 rounded-br-lg" />

        {/* Inner glow line */}
        <div className="absolute inset-4 border border-white/0 group-hover:border-white/10 rounded-xl transition-all duration-500" />
      </div>

      {/* Hover border glow */}
      <div className="absolute inset-0 rounded-2xl border-2 border-[#D9A441]/0 group-hover:border-[#D9A441]/50 transition-all duration-500 pointer-events-none" />
    </motion.div>
  )
}

const Gallery = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="gallery" className="relative py-24 md:py-32 bg-[#020505] overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#D9A441]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#D9A441]/4 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#D9A441]/3 rounded-full blur-[120px] pointer-events-none" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="block font-inter text-xs tracking-[0.35em] text-[#D9A441]/80 uppercase mb-4"
          >
            Sweet Moments
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-inter text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white/95 mb-6"
          >
            A Visual Taste of Luxury
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-inter text-base md:text-lg text-white/50 tracking-wide max-w-xl mx-auto"
          >
            Every dessert is crafted to be as beautiful as it is unforgettable.
          </motion.p>

          {/* Decorative element */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 w-24 h-px bg-gradient-to-r from-transparent via-[#D9A441]/50 to-transparent mx-auto"
          />
        </motion.div>

        {/* Advanced asymmetric masonry grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[180px]">
          {galleryImages.map((image, index) => (
            <GalleryImage key={image.caption} image={image} index={index} />
          ))}
        </div>

        {/* Bottom decorative divider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 md:mt-24 flex justify-center"
        >
          <div className="flex items-center gap-4">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#D9A441]/40 to-transparent" />
            <div className="w-3 h-3 rounded-full bg-[#D9A441]/50 rotate-45" />
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#D9A441]/40 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Gallery
