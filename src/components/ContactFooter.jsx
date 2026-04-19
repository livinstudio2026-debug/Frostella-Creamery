import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import logo from '../../assets/logo/logo.png'

const ContactFooter = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    phone: '',
    favoriteFlavor: '',
    quantity: '',
    servingStyle: '',
    pickupDate: '',
    specialNotes: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Order submitted:', formState)
  }

  const flavors = [
    'Belgian Chocolate Bliss',
    'Strawberry Velvet',
    'Vanilla Gold',
    'Mango Royale',
    'Caramel Crown',
    'Pistachio Silk',
  ]

  const servingStyles = ['Cup', 'Cone', 'Family Box']

  return (
    <section id="contact" className="relative bg-[#020505] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-[#D9A441]/5 to-transparent pointer-events-none" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-24 md:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left side - Brand info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Logo */}
            <motion.img
              src={logo}
              alt="Frostella"
              className="h-20 w-auto object-contain mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            />

            {/* Premium brand text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-inter text-base md:text-lg text-white/50 tracking-wide leading-relaxed mb-10 max-w-md"
            >
              Where luxury meets indulgence. Every scoop is a masterpiece,
              crafted with passion and served with elegance.
            </motion.p>

            {/* Contact details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-5 mb-10"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#D9A441]/10 flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D9A441" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <p className="font-inter text-base text-white/70">+1 (555) 123-4567</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#D9A441]/10 flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D9A441" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <p className="font-inter text-base text-white/70">hello@frostella.com</p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#D9A441]/10 flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D9A441" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <p className="font-inter text-base text-white/70">214 Maple Avenue<br/>Downtown District, New York</p>
              </div>

              {/* Instagram */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#D9A441]/10 flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D9A441" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </div>
                <p className="font-inter text-base text-white/70">@frostellacreamery</p>
              </div>
            </motion.div>

            {/* Instagram link */}
            <motion.a
              href="https://instagram.com/frostellacreamery"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.05, x: 5 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#D9A441]/20 via-[#D9A441]/10 to-transparent border border-[#D9A441]/30 rounded-full text-[#D9A441] font-inter text-sm font-medium tracking-wide hover:bg-[#D9A441]/30 transition-all duration-300"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              Follow Us
            </motion.a>
          </motion.div>

          {/* Right side - Order form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10">
              <div className="mb-8">
                <h3 className="font-inter text-2xl md:text-3xl font-semibold text-white/95 tracking-tight mb-3">
                  Place Your Order
                </h3>
                <p className="font-inter text-sm text-white/40">
                  Fill in the details below and we will prepare your indulgence.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block font-inter text-xs text-white/40 uppercase tracking-wider mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formState.fullName}
                    onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                    className="w-full px-4 py-3.5 bg-white/[0.05] border border-white/10 rounded-xl font-inter text-sm text-white/90 placeholder-white/25 outline-none focus:border-[#D9A441]/50 focus:bg-white/[0.08] transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block font-inter text-xs text-white/40 uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3.5 bg-white/[0.05] border border-white/10 rounded-xl font-inter text-sm text-white/90 placeholder-white/25 outline-none focus:border-[#D9A441]/50 focus:bg-white/[0.08] transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block font-inter text-xs text-white/40 uppercase tracking-wider mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className="w-full px-4 py-3.5 bg-white/[0.05] border border-white/10 rounded-xl font-inter text-sm text-white/90 placeholder-white/25 outline-none focus:border-[#D9A441]/50 focus:bg-white/[0.08] transition-all duration-300"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                {/* Favorite Flavor & Quantity row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-inter text-xs text-white/40 uppercase tracking-wider mb-2">
                      Favorite Flavor
                    </label>
                    <select
                      value={formState.favoriteFlavor}
                      onChange={(e) => setFormState({ ...formState, favoriteFlavor: e.target.value })}
                      className="w-full px-4 py-3.5 bg-white/[0.05] border border-white/10 rounded-xl font-inter text-sm text-white/90 outline-none focus:border-[#D9A441]/50 focus:bg-white/[0.08] transition-all duration-300 cursor-pointer appearance-none"
                    >
                      <option value="" className="bg-black">Select flavor</option>
                      {flavors.map((flavor) => (
                        <option key={flavor} value={flavor} className="bg-black">{flavor}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-inter text-xs text-white/40 uppercase tracking-wider mb-2">
                      Quantity
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={formState.quantity}
                      onChange={(e) => setFormState({ ...formState, quantity: e.target.value })}
                      className="w-full px-4 py-3.5 bg-white/[0.05] border border-white/10 rounded-xl font-inter text-sm text-white/90 placeholder-white/25 outline-none focus:border-[#D9A441]/50 focus:bg-white/[0.08] transition-all duration-300"
                      placeholder="e.g., 2"
                    />
                  </div>
                </div>

                {/* Serving Style & Pickup Date row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-inter text-xs text-white/40 uppercase tracking-wider mb-2">
                      Serving Style
                    </label>
                    <select
                      value={formState.servingStyle}
                      onChange={(e) => setFormState({ ...formState, servingStyle: e.target.value })}
                      className="w-full px-4 py-3.5 bg-white/[0.05] border border-white/10 rounded-xl font-inter text-sm text-white/90 outline-none focus:border-[#D9A441]/50 focus:bg-white/[0.08] transition-all duration-300 cursor-pointer appearance-none"
                    >
                      <option value="" className="bg-black">Select style</option>
                      {servingStyles.map((style) => (
                        <option key={style} value={style} className="bg-black">{style}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-inter text-xs text-white/40 uppercase tracking-wider mb-2">
                      Preferred Pickup Date
                    </label>
                    <input
                      type="date"
                      value={formState.pickupDate}
                      onChange={(e) => setFormState({ ...formState, pickupDate: e.target.value })}
                      className="w-full px-4 py-3.5 bg-white/[0.05] border border-white/10 rounded-xl font-inter text-sm text-white/90 outline-none focus:border-[#D9A441]/50 focus:bg-white/[0.08] transition-all duration-300 cursor-pointer"
                    />
                  </div>
                </div>

                {/* Special Notes */}
                <div>
                  <label className="block font-inter text-xs text-white/40 uppercase tracking-wider mb-2">
                    Special Notes
                  </label>
                  <textarea
                    value={formState.specialNotes}
                    onChange={(e) => setFormState({ ...formState, specialNotes: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3.5 bg-white/[0.05] border border-white/10 rounded-xl font-inter text-sm text-white/90 placeholder-white/25 outline-none focus:border-[#D9A441]/50 focus:bg-white/[0.08] transition-all duration-300 resize-none"
                    placeholder="Any special requests or customization details..."
                  />
                </div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-4 py-4 bg-gradient-to-r from-[#8B6914] via-[#D9A441] to-[#E8B84A] rounded-xl font-inter text-sm font-semibold tracking-[0.12em] text-black uppercase transition-all duration-300 hover:shadow-[0_0_50px_rgba(217,164,65,0.45)]"
                >
                  Place Your Order
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 md:mt-32 pt-8 border-t border-white/5"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8">
            <p className="font-inter text-sm text-white/30 tracking-wide">
              © 2026 Frostella Creamery. All rights reserved.
            </p>

            <div className="flex items-center gap-8">
              {['Privacy', 'Terms'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="font-inter text-sm text-white/30 hover:text-[#c49a3f]/80 transition-colors duration-300 tracking-wide"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Developer credit */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="py-6 border-t border-white/5 text-center"
          >
            <p className="font-inter text-xs text-white/25 tracking-wide">
              Designed & Developed by Livinkumar •{' '}
              <a
                href="mailto:livinstudio2026@gmail.com"
                className="text-[#c49a3f]/60 hover:text-[#c49a3f] transition-colors duration-300"
              >
                livinstudio2026@gmail.com
              </a>
            </p>
          </motion.div>
        </motion.footer>
      </div>
    </section>
  )
}

export default ContactFooter
