import { ExternalLink, Code, Plus } from 'lucide-react'
import './ProjectCard.css'

// Shown when a project has no screenshot yet.
function PreviewFrame() {
  return (
    <div className="project-preview" aria-hidden="true">
      <div className="project-preview__window">
        <div className="project-preview__bar">
          <span />
          <span />
          <span />
        </div>
        <div className="project-preview__body">
          <span className="project-preview__side" />
          <div className="project-preview__main">
            <span className="project-preview__line project-preview__line--title" />
            <span className="project-preview__line" />
            <span className="project-preview__line project-preview__line--short" />
            <div className="project-preview__blocks">
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>
      <span className="project-preview__label">Screenshot coming soon</span>
    </div>
  )
}

function ProjectCard({ project }) {
  const {
    title,
    description,
    tech,
    image,
    imageAlt,
    liveUrl,
    codeUrl,
    isPlaceholder,
  } = project

  if (isPlaceholder) {
    return (
      <article className="project-card project-card--placeholder">
        <div className="project-card__media project-card__media--placeholder">
          <span className="project-card__plus" aria-hidden="true">
            <Plus size={24} />
          </span>
        </div>
        <div className="project-card__body">
          <h3 className="project-card__title">{title}</h3>
          <p className="project-card__text">{description}</p>
        </div>
      </article>
    )
  }

  const hasLinks = Boolean(liveUrl || codeUrl)

  return (
    <article className="project-card">
      <div className="project-card__media">
        {image ? (
          <img
            src={image}
            alt={imageAlt}
            width="1600"
            height="1000"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <PreviewFrame />
        )}
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__text">{description}</p>

        {tech.length > 0 && (
          <ul className="project-card__tags" aria-label="Technologies used">
            {tech.map((item) => (
              <li key={item} className="tag">
                {item}
              </li>
            ))}
          </ul>
        )}

        <div className="project-card__actions">
          {liveUrl && (
            <a
              href={liveUrl}
              className="btn btn--primary btn--sm"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} live (opens in a new tab)`}
            >
              View Project
              <ExternalLink size={16} aria-hidden="true" />
            </a>
          )}
          {codeUrl && (
            <a
              href={codeUrl}
              className="btn btn--secondary btn--sm"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} source code (opens in a new tab)`}
            >
              <Code size={16} aria-hidden="true" />
              View Code
            </a>
          )}
          {!hasLinks && (
            <span className="project-card__note">Links coming soon</span>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard