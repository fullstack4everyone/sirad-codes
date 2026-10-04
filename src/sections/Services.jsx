import { services } from '../data/services'
import SectionHeader from '../components/SectionHeader'
import './Services.css'

function Services() {
  return (
    <section
      id="services"
      className="section section--surface"
      aria-labelledby="services-title"
    >
      <div className="container">
        <SectionHeader
          eyebrow="Services"
          title="What I Build"
          description="Practical digital solutions designed around real business needs."
          titleId="services-title"
        />

        <ul className="services__grid">
          {services.map(({ id, icon: Icon, title, description }) => (
            <li key={id} className="service-card">
              <span className="service-card__icon">
                <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h3 className="service-card__title">{title}</h3>
              <p className="service-card__text">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Services