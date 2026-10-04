import { brand, navLinks, contactLinks } from '../data/site'
import Logo from './Logo'
import SocialIcon from './SocialIcon'
import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()
  const visibleLinks = contactLinks.filter(
    (link) => !link.href.includes('REPLACE_'),
  )

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo variant="light" />
            <p className="footer__motto">{brand.motto}</p>
          </div>

          <nav className="footer__nav" aria-label="Footer">
            <ul className="footer__links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="footer__link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {visibleLinks.length > 0 && (
            <ul className="footer__social" aria-label="Social links">
              {visibleLinks.map((link) => {
                const isExternal = !link.href.startsWith('mailto:')
                return (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      className="footer__social-link"
                      aria-label={
                        isExternal
                          ? `${link.label} (opens in a new tab)`
                          : link.label
                      }
                      {...(isExternal && {
                        target: '_blank',
                        rel: 'noopener noreferrer',
                      })}
                    >
                      <SocialIcon id={link.id} size={18} />
                    </a>
                  </li>
                )
              })}
            </ul>
          )}
        </div>

        <div className="footer__bottom">
          <p>
            © {year} {brand.name}. All rights reserved.
          </p>
          <p>{brand.tagline}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer