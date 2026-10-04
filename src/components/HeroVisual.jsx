import { Check } from 'lucide-react'
import './HeroVisual.css'

// Decorative dashboard mockup. Hidden from screen readers.
const chartBars = [40, 62, 48, 78, 58, 92, 70]

function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="hero-visual__window">
        <div className="hero-visual__topbar">
          <span className="hero-visual__dot" />
          <span className="hero-visual__dot" />
          <span className="hero-visual__dot" />
          <span className="hero-visual__address" />
        </div>

        <div className="hero-visual__body">
          <div className="hero-visual__sidebar">
            <span className="hero-visual__brand" />
            {Array.from({ length: 5 }, (_, index) => (
              <span
                key={index}
                className={`hero-visual__nav ${index === 0 ? 'is-active' : ''}`}
              />
            ))}
          </div>

          <div className="hero-visual__main">
            <div className="hero-visual__header">
              <span className="sk sk--title" />
              <span className="sk sk--button" />
            </div>

            <div className="hero-visual__cards">
              {Array.from({ length: 3 }, (_, index) => (
                <div key={index} className="hero-visual__card">
                  <span className="sk sk--label" />
                  <span className="sk sk--value" />
                </div>
              ))}
            </div>

            <div className="hero-visual__chart">
              <span className="sk sk--label" />
              <div className="hero-visual__bars">
                {chartBars.map((height, index) => (
                  <span key={index} style={{ height: `${height}%` }} />
                ))}
              </div>
            </div>

            <div className="hero-visual__rows">
              {Array.from({ length: 3 }, (_, index) => (
                <div key={index} className="hero-visual__row">
                  <span className="hero-visual__avatar" />
                  <span className="sk sk--line" />
                  <span className="hero-visual__pill" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="hero-visual__float">
        <span className="hero-visual__float-icon">
          <Check size={16} />
        </span>
        <div className="hero-visual__float-text">
          <strong>Responsive</strong>
          <span>Phone, tablet and desktop</span>
        </div>
      </div>
    </div>
  )
}

export default HeroVisual