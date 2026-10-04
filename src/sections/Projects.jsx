import { projects } from '../data/projects'
import SectionHeader from '../components/SectionHeader'
import ProjectCard from '../components/ProjectCard'
import './Projects.css'

function Projects() {
  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <div className="container">
        <SectionHeader
          eyebrow="Portfolio"
          title="Selected Work"
          description="Real systems and digital products I've designed and developed."
          titleId="work-title"
        />

        <ul className="projects__grid">
          {projects.map((project) => (
            <li key={project.id}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Projects