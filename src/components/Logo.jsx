import './Logo.css'

// variant="dark" for light backgrounds, variant="light" for dark backgrounds.
function Logo({ variant = 'dark', onClick }) {
  return (
    <a href="#home" className={`logo logo--${variant}`} onClick={onClick}>
      <svg className="logo__mark" viewBox="0 0 100 100" aria-hidden="true">
        <path
          className="logo__mark-c"
          d="M72 12 H28 Q12 12 12 28 V72 Q12 88 28 88 H72"
          fill="none"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <g transform="translate(55 50) scale(0.78) translate(-54 -50)">
          <path
            className="logo__mark-s"
            d="M76 32 H42 Q34 32 34 40 V42 Q34 50 42 50 H58 Q66 50 66 58 V60 Q66 68 58 68 H32"
            fill="none"
            strokeWidth="8"
            strokeLinejoin="round"
          />
          <circle className="logo__mark-node" cx="78" cy="32" r="7" />
          <circle className="logo__mark-node" cx="30" cy="68" r="7" />
        </g>
      </svg>
      <span className="logo__text">
        SIRAD <span className="logo__accent">CODES</span>
      </span>
    </a>
  )
}

export default Logo