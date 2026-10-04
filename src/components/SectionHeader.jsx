import './SectionHeader.css'

// Reusable heading block for every section.
// titleId connects the heading to its section for screen readers.
function SectionHeader({ eyebrow, title, description, titleId, align = 'left' }) {
  return (
    <div className={`section-header section-header--${align}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 id={titleId} className="section-header__title">
        {title}
      </h2>
      {description && (
        <p className="section-header__text text-muted">{description}</p>
      )}
    </div>
  )
}

export default SectionHeader