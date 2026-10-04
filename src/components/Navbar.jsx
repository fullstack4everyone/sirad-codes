import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/site'
import Logo from './Logo'
import './Navbar.css'

const SCROLL_THRESHOLD = 12
const DESKTOP_QUERY = '(min-width: 900px)'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(
    () => window.scrollY > SCROLL_THRESHOLD,
  )
  const [isOpen, setIsOpen] = useState(false)

  // Make the navbar compact after the user scrolls.
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock page scroll and allow Escape to close while the mobile menu is open.
  useEffect(() => {
    if (!isOpen) return undefined

    document.body.style.overflow = 'hidden'
    const handleKey = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', handleKey)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [isOpen])

  // Close the mobile menu if the screen grows to desktop size.
  useEffect(() => {
    const media = window.matchMedia(DESKTOP_QUERY)
    const handleChange = (event) => {
      if (event.matches) setIsOpen(false)
    }
    media.addEventListener('change', handleChange)
    return () => media.removeEventListener('change', handleChange)
  }, [])

  const closeMenu = () => setIsOpen(false)
  const toggleMenu = () => setIsOpen((open) => !open)

  const navbarClass = [
    'navbar',
    isScrolled ? 'navbar--scrolled' : '',
    isOpen ? 'navbar--open' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <header className={navbarClass}>
      <div className="container navbar__inner">
        <Logo onClick={closeMenu} />

        <nav className="navbar__nav" aria-label="Main">
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="navbar__link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="btn btn--primary btn--sm navbar__cta">
          Let's Work Together
        </a>

        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          onClick={toggleMenu}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div id="mobile-menu" className="mobile-menu" hidden={!isOpen}>
        <nav aria-label="Mobile">
          <ul className="mobile-menu__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="btn btn--primary mobile-menu__cta"
            onClick={closeMenu}
          >
            Let's Work Together
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar