import './Logo.css'

// variant="dark" for light backgrounds, variant="light" for dark backgrounds.
function Logo({ variant = 'dark', onClick }) {
  return (
    <a href="#home" className={`logo logo--${variant}`} onClick={onClick}>
      <svg className="logo__mark" viewBox="0 0 64 64" aria-hidden="true">
        <rect className="logo__mark-bg" width="64" height="64" rx="14" />
        <polyline
          points="24,20 12,32 24,44"
          fill="none"
          stroke="#ffffff"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline
          points="40,20 52,32 40,44"
          fill="none"
          stroke="#ffffff"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          className="logo__mark-slash"
          x1="35"
          y1="16"
          x2="29"
          y2="48"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
      <span className="logo__text">
        SIRAD <span className="logo__accent">CODES</span>
      </span>
    </a>
  )
}

export default Logo