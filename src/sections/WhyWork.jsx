import { Check } from 'lucide-react'
import { values } from '../data/values'
import SectionHeader from '../components/SectionHeader'
import './WhyWork.css'

function WhyWork() {
  return (
    <section
      id="why"
      className="section section--surface"
      aria-labelledby="why-title"
    >
      <div className="container">
        <SectionHeader
          eyebrow="Why SIRAD CODES"
          title="Why Work With SIRAD CODES"
          description="What you can expect when we build something together."
          titleId="why-title"
        />

        <ul className="why__grid">
          {values.map((value) => (
            <li key={value.title} className="why-item">
              <span className="why-item__icon" aria-hidden="true">
                <Check size={18} strokeWidth={2.25} />
              </span>
              <div>
                <h3 className="why-item__title">{value.title}</h3>
                <p className="why-item__text">{value.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default WhyWork