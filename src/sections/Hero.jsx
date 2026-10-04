import { useEffect, useState } from 'react'
import { ArrowRight, ArrowDown } from 'lucide-react'
import { brand } from '../data/site'
import HeroVisual from '../components/HeroVisual'
import './Hero.css'

const focusAreas = [
  'Business websites',
  'Web applications',
  'Management systems',
  'Dashboards',
]

// Words that rotate in the "Built for ..." line.
const audiences = [
  'small businesses',
  'schools',
  'clinics',
  'shops',
  'organizations',
]

const ROTATE_EVERY_MS = 2600

function Hero() {
  const [audienceIndex, setAudienceIndex] = useState(0)

  // Rotate the audience word. Skipped when the visitor prefers reduced motion.
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (prefersReducedMotion) return undefined

    const timer = window.setInterval(() => {
      setAudienceIndex((index) => (index + 1) % audiences.length)
    }, ROTATE_EVERY_MS)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="eyebrow">{brand.tagline}</span>

          <h1 id="hero-title" className="hero__title">
            <span className="hero__line">Building Digital</span>
            <span className="hero__line">Products That Solve</span>
            <span className="hero__line">
              <span className="hero__highlight">Real Problems.</span>
            </span>
          </h1>

          <p className="hero__text">
            I design and build modern websites, web applications, and custom
            software that help businesses work smarter and grow.
          </p>

          <div className="hero__actions">
            <a href="#work" className="btn btn--primary">
              View My Work
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a href="#contact" className="btn btn--secondary">
              Let's Work Together
            </a>
          </div>

          <p className="hero__audience">
            <span className="sr-only">
              Built for small businesses, schools, clinics, shops and organizations.
            </span>
            <span aria-hidden="true">
              Built for{' '}
              <span key={audienceIndex} className="hero__audience-word">
                {audiences[audienceIndex]}
              </span>
            </span>
          </p>

          <ul className="hero__focus" aria-label="What I build">
            {focusAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>

        <div className="hero__visual">
          <HeroVisual />
        </div>
      </div>

      <a href="#services" className="hero__scroll" aria-label="Scroll to services">
        <span>Scroll</span>
        <ArrowDown size={16} aria-hidden="true" />
      </a>
    </section>
  )
}

export default Hero