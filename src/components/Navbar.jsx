import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../../assets/logo/logo.png'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Flavors', href: '#flavors' },
    { name: 'Story', href: '#story' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const heroHeight = window.innerHeight * 3.8

    const handleScroll = () => {
      setIsScrolled(window.scrollY > heroHeight)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-black/90 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.6)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                setIsMobileMenuOpen(false)
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }, 100)
              }}
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={logo}
                alt="Frostella"
                className="h-[80px] w-auto object-contain"
              />
              <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D9A441]/0 to-transparent group-hover:via-[#D9A441]/60 transition-all duration-500" />
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="relative font-inter text-sm tracking-wide text-white hover:text-[#c49a3f] transition-colors duration-300 group py-2"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-[#D9A441] transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="ml-4 px-6 py-2.5 bg-gradient-to-r from-[#8B6914] via-[#D9A441] to-[#E8B84A] font-inter text-xs font-semibold tracking-[0.15em] text-black uppercase rounded-sm hover:shadow-[0_0_30px_rgba(217,164,65,0.4)] transition-shadow duration-300"
              >
                Order Now
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative w-8 h-8 flex items-center justify-center group"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-5">
                <motion.span
                  animate={
                    isMobileMenuOpen
                      ? { rotate: 45, y: 9, width: 24 }
                      : { rotate: 0, y: 0, width: 24 }
                  }
                  className="absolute top-0 left-0 h-0.5 bg-[#c49a3f] rounded-full"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="absolute top-[45%] left-0 w-6 h-0.5 bg-[#c49a3f] rounded-full"
                />
                <motion.span
                  animate={
                    isMobileMenuOpen
                      ? { rotate: -45, y: -9, width: 24 }
                      : { rotate: 0, y: 0, width: 24 }
                  }
                  className="absolute bottom-0 left-0 h-0.5 bg-[#c49a3f] rounded-full"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed top-20 left-0 right-0 z-30 bg-black/95 backdrop-blur-xl border-b border-white/10 lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="px-6 py-8 flex flex-col gap-6"
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={(e) => {
                    setIsMobileMenuOpen(false)
                    setTimeout(() => {
                      if (link.href === '#') {
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                      } else {
                        const target = document.querySelector(link.href)
                        if (target) target.scrollIntoView({ behavior: 'smooth' })
                      }
                    }, 100)
                  }}
                  className="font-inter text-lg text-[#c49a3f]/80 hover:text-[#c49a3f] transition-colors duration-300 py-2"
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                whileTap={{ scale: 0.98 }}
                onClick={(e) => {
                  e.preventDefault()
                  setIsMobileMenuOpen(false)
                  setTimeout(() => {
                    const target = document.querySelector('#contact')
                    if (target) target.scrollIntoView({ behavior: 'smooth' })
                  }, 100)
                }}
                className="mt-4 w-full px-6 py-4 bg-gradient-to-r from-[#8B6914] via-[#D9A441] to-[#E8B84A] font-inter text-sm font-semibold tracking-[0.15em] text-black uppercase rounded-sm text-center"
              >
                Order Now
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
