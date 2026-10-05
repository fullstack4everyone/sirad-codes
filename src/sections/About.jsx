import { skillGroups } from '../data/skills'
import SectionHeader from '../components/SectionHeader'
import './About.css'

const facts = [
  { label: 'Role', value: 'Full-stack developer' },
  { label: 'Education', value: 'BSc Information Technology, in progress' },
  { label: 'Focus', value: 'Websites, web applications and management systems' },
]

function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeader
          eyebrow="About"
          title="About SIRAD CODES"
          titleId="about-title"
        />

        <div className="about__grid">
          <div className="about__story">
            <div className="about__profile">
              <img
                src="/images/about/sirad.webp"
                alt="Mohamed Sirad Farah, founder of SIRAD CODES"
                className="about__photo"
                width="480"
                height="480"
                loading="lazy"
                decoding="async"
              />
              <div>
                <p className="about__name">Mohamed Sirad Farah</p>
                <p className="about__role">Founder &amp; full-stack developer</p>
              </div>
            </div>

            <p className="about__lead">
              SIRAD CODES is a developer-led software brand focused on turning
              ideas and real-world problems into practical digital products.
            </p>
            <p className="about__text">
              I am an Information Technology student and full-stack developer
              with a strong interest in building practical software, modern web
              applications, and systems that solve real problems.
            </p>
            <p className="about__text">
              When you work with SIRAD CODES, you talk directly to the person who
              plans, designs and builds your product.
            </p>

            <dl className="about__facts">
              {facts.map((fact) => (
                <div key={fact.label} className="about__fact">
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="about__skills">
            <h3 className="about__skills-title">Technologies I use</h3>
            <div className="skills__grid">
              {skillGroups.map((group) => (
                <div key={group.category} className="skill-group">
                  <h4 className="skill-group__title">{group.category}</h4>
                  <ul className="skill-group__list">
                    {group.items.map((item) => (
                      <li key={item} className="tag">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About