import { ArrowRight } from 'lucide-react'
import './CallToAction.css'

function CallToAction() {
  return (
    <section className="section cta" aria-labelledby="cta-title">
      <div className="container">
        <div className="cta__panel">
          <span className="eyebrow cta__eyebrow">Start a project</span>

          <h2 id="cta-title" className="cta__title">
            Have an idea or a business problem to solve?
          </h2>

          <p className="cta__text">
            Let's turn your idea into a practical digital solution.
          </p>

          <div className="cta__actions">
            <a href="#contact" className="btn btn--primary">
              Start a Project
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a href="#work" className="btn btn--on-dark">
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction