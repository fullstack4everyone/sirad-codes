import { processSteps } from '../data/process'
import SectionHeader from '../components/SectionHeader'
import './Process.css'

function Process() {
  return (
    <section
      id="process"
      className="section section--surface"
      aria-labelledby="process-title"
    >
      <div className="container">
        <SectionHeader
          eyebrow="Process"
          title="How I Work"
          description="A clear four-step process from first conversation to launch."
          titleId="process-title"
        />

        <ol className="process__list">
          {processSteps.map((step) => (
            <li key={step.number} className="process-step">
              <span className="process-step__number" aria-hidden="true">
                {step.number}
              </span>
              <div className="process-step__content">
                <h3 className="process-step__title">
                  <span className="sr-only">Step {step.number}: </span>
                  {step.title}
                </h3>
                <p className="process-step__text">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Process