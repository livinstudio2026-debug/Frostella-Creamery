import { useState, useEffect, useRef, useMemo } from 'react'
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion'

const TOTAL_FRAMES = 171
const FRAME_PATH = '/hero/ezgif-frame-'

const LoadingScreen = ({ progress }) => (
  <motion.div
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.8, ease: 'easeInOut' }}
    className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <h2 className="font-inter text-2xl font-light tracking-[0.3em] text-white/90 mb-12 uppercase">
        Frostella
      </h2>

      <div className="w-64 h-0.5 bg-white/10 rounded-full overflow-hidden mx-auto mb-6">
        <motion.div
          className="h-full bg-gradient-to-r from-[#8B6914] via-[#D9A441] to-[#E8B84A]"
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      </div>

      <p className="font-inter text-sm text-white tracking-wide">
        Preparing your dessert experience...
      </p>

      <p className="font-inter text-xs text-[#D9A441]/60 mt-4 tracking-widest">
        {Math.round(progress)}%
      </p>
    </motion.div>

    <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        className="w-8 h-8 border border-[#D9A441]/30 border-t-[#D9A441] rounded-full"
      />
    </div>
  </motion.div>
)

const ScrollIndicator = ({ visible }) => (
  <AnimatePresence>
    {visible && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="font-inter text-xs text-center tracking-[0.25em] text-white/40 uppercase">
          Scroll to Explore
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="20" height="12" viewBox="0 0 20 12" fill="none" className="opacity-40">
            <path
              d="M1 1L10 10L19 1"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
)

const FloatingParticles = () => {
  const particles = useMemo(() =>
    Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 10,
      duration: 12 + Math.random() * 18,
      size: 2 + Math.random() * 3,
    })), []
  )

  return (
    <div id='hero' className="fixed inset-0 pointer-events-none overflow-hidden z-5">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="particle"
          style={{ left: p.left, bottom: '-10px', width: p.size, height: p.size }}
          animate={{
            y: ['0vh', '-110vh'],
            x: [0, 15 + Math.random() * 40],
            opacity: [0, 0.5, 0.5, 0],
            scale: [0.3, 0.8, 0.4],
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
  )
}

const TextBlock = ({ children, className = '', style = {} }) => (
  <motion.div
    className={`absolute inset-0 flex items-center justify-center ${className}`}
    style={style}
  >
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D9A441]/5 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="">
        {children}
      </div>
    </div>
  </motion.div>
)

const CTAButton = ({ children, className = '' }) => (
  <button className={`shimmer-btn relative px-10 py-4 bg-gradient-to-r from-[#8B6914] via-[#D9A441] to-[#E8B84A] font-inter text-sm font-semibold tracking-[0.2em] text-black uppercase overflow-hidden rounded-sm transition-all duration-300 hover:shadow-[0_0_50px_rgba(217,164,65,0.5)] hover:scale-105 ${className}`}>
    <span className="relative z-10">{children}</span>
  </button>
)

const HeroSequence = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [loadProgress, setLoadProgress] = useState(0)
  const [currentFrame, setCurrentFrame] = useState(0)
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)

  const containerRef = useRef(null)
  const canvasRef = useRef(null)
  const imagesRef = useRef([])
  const animationRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.2,
  })

  useEffect(() => {
    const unsubscribe = smoothProgress.on('change', (value) => {
      const frameIndex = Math.min(Math.floor(value * 170), 170)
      setCurrentFrame(frameIndex)
    })
    return () => unsubscribe()
  }, [smoothProgress])

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false)
      }
    }
    window.addEventListener('scroll', scrollHandler, { passive: true })
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [])

  const [imagesLoaded, setImagesLoaded] = useState(false)

  useEffect(() => {
    const loadImages = async () => {
      const loadPromises = []
      const tempImages = []

      for (let i = 1; i <= TOTAL_FRAMES; i++) {
        const promise = new Promise((resolve) => {
          const img = new Image()
          const frameNumber = String(i).padStart(3, '0')
          img.src = `${FRAME_PATH}${frameNumber}.jpg`

          img.onload = () => {
            setLoadProgress((prev) => Math.min(prev + (100 / TOTAL_FRAMES), 99))
            resolve(img)
          }

          img.onerror = () => {
            console.warn(`Failed to load frame ${i}`)
            resolve(null)
          }
        })
        loadPromises.push(promise)
      }

      const results = await Promise.all(loadPromises)
      tempImages.push(...results.filter(Boolean))
      imagesRef.current = tempImages
      setLoadProgress(100)
      setImagesLoaded(true)

      setTimeout(() => setIsLoading(false), 600)
    }

    loadImages()
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.scale(dpr, dpr)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    return () => window.removeEventListener('resize', resizeCanvas)
  }, [])
useEffect(() => {
  const canvas = canvasRef.current
  if (!canvas) return
  const ctx = canvas.getContext('2d')

  if (!imagesRef.current.length) return

  const drawFrame = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const img = imagesRef.current[currentFrame]
    if (img) {
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight

      const imgAspect = img.width / img.height
      const windowAspect = windowWidth / windowHeight

      let drawWidth, drawHeight, offsetX, offsetY

      if (imgAspect > windowAspect) {
        drawHeight = windowHeight
        drawWidth = windowHeight * imgAspect
      } else {
        drawWidth = windowWidth
        drawHeight = windowWidth / imgAspect
      }

      // Reduce cone size by 20% on mobile
      const isMobile = windowWidth < 768
      const scale = isMobile ? 0.85 : 1

      drawWidth *= 1
      drawHeight *= 1

      offsetX = (windowWidth - drawWidth) / 2
      offsetY = (windowHeight - drawHeight) / 2

      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight)
    }

    animationRef.current = requestAnimationFrame(drawFrame)
  }

  drawFrame()

  return () => {
    if (animationRef.current) cancelAnimationFrame(animationRef.current)
  }
}, [currentFrame, imagesRef.current.length])

  useEffect(() => {
    if (imagesLoaded && canvasRef.current && imagesRef.current[0]) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      const img = imagesRef.current[0]
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight
      const imgAspect = img.width / img.height
      const windowAspect = windowWidth / windowHeight

      let drawWidth, drawHeight, offsetX, offsetY

      if (imgAspect > windowAspect) {
        drawHeight = windowHeight
        drawWidth = windowHeight * imgAspect
      } else {
        drawWidth = windowWidth
        drawHeight = windowWidth / imgAspect
      }

      const isMobile = windowWidth < 768
      const scale = isMobile ? 0.85 : 1

      drawWidth *= scale
      drawHeight *= 1

      offsetX = (windowWidth - drawWidth) / 2
      offsetY = (windowHeight - drawHeight) / 2

      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight)
    }
  }, [imagesLoaded])

  // Text Block 1 (0% - 30%) - Center, fade up from bottom
  const block1Opacity = useTransform(smoothProgress, [0, 0.05, 0.2, 0.3], [0, 1, 1, 0])
  const block1Y = useTransform(smoothProgress, [0, 0.05, 0.2, 0.3], [80, 0, 0, -30])

  // Text Block 2 (25% - 55%) - Left side, slide from left
  const block2Opacity = useTransform(smoothProgress, [0.2, 0.3, 0.45, 0.55], [0, 1, 1, 0])
  const block2X = useTransform(smoothProgress, [0.2, 0.3, 0.45, 0.55], [-100, 0, 0, -40])
  const block2BlurRaw = useTransform(smoothProgress, [0.2, 0.28, 0.3, 0.45], [15, 0, 0, 0])
  const block2Filter = useTransform(block2BlurRaw, (v) => `blur(${v}px)`)

  // Text Block 3 (50% - 80%) - Right side, slide from right
  const block3Opacity = useTransform(smoothProgress, [0.45, 0.55, 0.7, 0.8], [0, 1, 1, 0])
  const block3X = useTransform(smoothProgress, [0.45, 0.55, 0.7, 0.8], [100, 0, 0, 40])
  const block3BlurRaw = useTransform(smoothProgress, [0.45, 0.53, 0.55, 0.7], [15, 0, 0, 0])
  const block3Filter = useTransform(block3BlurRaw, (v) => `blur(${v}px)`)

  // Text Block 5 (75% - 100%) - Center, gentle scale + fade
  const block5Opacity = useTransform(smoothProgress, [0.7, 0.82, 1], [0, 1, 1])
  const block5Scale = useTransform(smoothProgress, [0.7, 0.85], [0.85, 1])

  return (
    <>
      <AnimatePresence>{isLoading && <LoadingScreen progress={loadProgress} />}</AnimatePresence>

      <div ref={containerRef} className="relative" style={{ height: '400vh' }}>
        <div className="sticky top-0 h-screen w-screen overflow-hidden bg-[#020505]">
          {/* Soft glow behind dessert */}
          <div className="glow-behind absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-125" />

          {/* Canvas for image sequence */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ mixBlendMode: 'lighter' }}
          />

          {/* Text Block 1 - Center (0% - 20%) */}
          <TextBlock>
            <motion.div
              style={{ opacity: block1Opacity, y: block1Y }}
              className="text-center max-w-4xl px-6 pointer-events-auto"
            >
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="block font-inter text-xs sm:text-sm tracking-[0.4em] text-white uppercase mb-6"
              >
                Artisan Ice Cream
              </motion.span>

              <h1 className="font-inter text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-6 sm:mb-8">
                <span className="block text-white">Luxury In</span>
                <span className="block text-white">Every Scoop</span>
              </h1>

              <p className="font-inter text-sm sm:text-base md:text-lg lg:text-xl text-white tracking-wide max-w-xl mx-auto mb-10 font-light">
                Crafted to turn simple moments into unforgettable indulgence.
              </p>

              <CTAButton>Discover the Flavor</CTAButton>
            </motion.div>
          </TextBlock>

          {/* Text Block 2 - Left (20% - 40%) */}
          <TextBlock className="justify-start items-center pl-8 sm:pl-12 md:pl-20 lg:pl-32">
            <motion.div
              style={{ opacity: block2Opacity, x: block2X, filter: block2Filter }}
              className="max-w-md lg:max-w-lg pointer-events-auto"
            >
              <span className="block font-inter text-xs tracking-[0.35em] text-white font-bold uppercase mb-4">
                Pure Ingredients
              </span>

              <h2 className="font-inter text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white/95 leading-[1.1] mb-4">
                Made From Real Ingredients
              </h2>

              <p className="font-inter text-sm sm:text-base md:text-lg text-white tracking-wide font-light leading-relaxed">
                Fresh cream, natural fruits, and handcrafted flavors in every swirl.
              </p>

              <div className="mt-8 w-16 h-0.5 bg-gradient-to-r from-[#D9A441] to-transparent" />

              <div className="mt-8 ml-auto w-16 h-0.5 bg-gradient-to-l from-[#D9A441] to-transparent" />
            </motion.div>
          </TextBlock>

          {/* Text Block 3 - Right (40% - 60%) */}
          <TextBlock className="justify-end items-center pr-8 sm:pr-12 md:pr-20 lg:pr-32">
            <motion.div
              style={{ opacity: block3Opacity, x: block3X, filter: block3Filter }}
              className="max-w-md lg:max-w-lg text-right pointer-events-auto"
            >
              <span className="block font-inter text-xs tracking-[0.35em] text-white font-bold uppercase mb-4">
                Artistry
              </span>

              <h2 className="font-inter text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white/95 leading-[1.1] mb-4">
                Designed To Delight
              </h2>

              <p className="font-inter text-sm sm:text-base md:text-lg text-white tracking-wide font-light leading-relaxed">
                Every layer is carefully created for a luxurious dessert experience.
              </p>

              <div className="mt-8 ml-auto w-16 h-0.5 bg-gradient-to-l from-[#D9A441] to-transparent" />
            </motion.div>
          </TextBlock>

          {/* Text Block 5 - Center (75% - 100%) */}
          <TextBlock>
            <motion.div
              style={{ opacity: block5Opacity, scale: block5Scale }}
              className="text-center max-w-3xl px-6 pointer-events-auto"
            >
              <h2 className="font-inter text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white/95 leading-[1.1] mb-6">
                Experience Frostella
              </h2>

              <p className="font-inter text-base sm:text-lg md:text-xl text-white tracking-wide font-light mb-10">
                Luxury you can taste.
              </p>

              <a href="#contact" className="shimmer-btn relative px-10 py-4 bg-gradient-to-r from-[#8B6914] via-[#D9A441] to-[#E8B84A] font-inter text-sm font-semibold tracking-[0.2em] text-black uppercase overflow-hidden rounded-sm transition-all duration-300 hover:shadow-[0_0_50px_rgba(217,164,65,0.5)] hover:scale-105 inline-block">
                <span className="relative z-10">Order Now</span>
              </a>
            </motion.div>
          </TextBlock>

          {/* Scroll Indicator */}
          <ScrollIndicator visible={showScrollIndicator && !isLoading} />

          {/* Floating Particles */}
          <FloatingParticles />

          {/* Subtle vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />

          {/* Top gradient for header area */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
        </div>
      </div>
    </>
  )
}

export default HeroSequence
