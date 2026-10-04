import { useState } from 'react'
import { ArrowUpRight, Send } from 'lucide-react'
import { contactLinks } from '../data/site'
import { sendMessage } from '../lib/sendMessage'
import SectionHeader from '../components/SectionHeader'
import SocialIcon from '../components/SocialIcon'
import './Contact.css'

const projectTypes = [
  'Business Website',
  'Web Application',
  'Management System',
  'Custom Dashboard',
  'Something else',
]

// "company" is a hidden trap field. Real people never fill it. Bots do.
const initialValues = {
  name: '',
  email: '',
  projectType: '',
  message: '',
  company: '',
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) {
    errors.email = 'Please enter your email.'
  } else if (!EMAIL_PATTERN.test(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.projectType) errors.projectType = 'Please choose a project type.'
  if (values.message.trim().length < 20) {
    errors.message = 'Please write at least 20 characters.'
  }
  return errors
}

function Field({ id, label, error, children }) {
  return (
    <div className={`field ${error ? 'field--error' : ''}`}>
      <label htmlFor={id} className="field__label">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="field__error">
          {error}
        </p>
      )}
    </div>
  )
}

function Contact() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  // Hide links that still contain placeholder values.
  const visibleLinks = contactLinks.filter(
    (link) => !link.href.includes('REPLACE_'),
  )

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((previous) => ({ ...previous, [name]: value }))
    if (errors[name]) {
      setErrors((previous) => ({ ...previous, [name]: undefined }))
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (values.company) return

    const foundErrors = validate(values)
    setErrors(foundErrors)

    const firstError = Object.keys(foundErrors)[0]
    if (firstError) {
      document.getElementById(`contact-${firstError}`)?.focus()
      return
    }

    setStatus({ state: 'sending', message: '' })

    try {
      const result = await sendMessage(values)
      if (result.method === 'mailto') {
        setStatus({
          state: 'success',
          message:
            'Your email app is opening with your message. Press send there to finish.',
        })
      } else {
        setStatus({
          state: 'success',
          message: 'Thank you. Your message has been sent. I will reply by email.',
        })
        setValues(initialValues)
      }
    } catch (error) {
      setStatus({
        state: 'error',
        message: `${error.message} Please use one of the contact links on this page.`,
      })
    }
  }

  const inputProps = (name) => ({
    id: `contact-${name}`,
    name,
    value: values[name],
    onChange: handleChange,
    'aria-invalid': errors[name] ? 'true' : undefined,
    'aria-describedby': errors[name] ? `contact-${name}-error` : undefined,
  })

  const isSending = status.state === 'sending'

  return (
    <section
      id="contact"
      className="section section--surface"
      aria-labelledby="contact-title"
    >
      <div className="container contact__grid">
        <div className="contact__info">
          <SectionHeader
            eyebrow="Contact"
            title="Let's Work Together"
            description="Have a website, application, or software idea? Tell me what you're building."
            titleId="contact-title"
          />

          {visibleLinks.length > 0 && (
            <ul className="contact__links">
              {visibleLinks.map((link) => {
                const isExternal = !link.href.startsWith('mailto:')
                return (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      className="contact-link"
                      {...(isExternal && {
                        target: '_blank',
                        rel: 'noopener noreferrer',
                      })}
                    >
                      <span className="contact-link__icon">
                        <SocialIcon id={link.id} />
                      </span>
                      <span className="contact-link__text">
                        <span className="contact-link__label">{link.label}</span>
                        <span className="contact-link__value">{link.display}</span>
                      </span>
                      <ArrowUpRight
                        size={18}
                        className="contact-link__arrow"
                        aria-hidden="true"
                      />
                      {isExternal && (
                        <span className="sr-only"> (opens in a new tab)</span>
                      )}
                    </a>
                  </li>
                )
              })}
            </ul>
          )}
        </div>

        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <div className="contact__row">
            <Field id="contact-name" label="Name" error={errors.name}>
              <input
                type="text"
                autoComplete="name"
                className="field__input"
                {...inputProps('name')}
              />
            </Field>

            <Field id="contact-email" label="Email" error={errors.email}>
              <input
                type="email"
                autoComplete="email"
                className="field__input"
                {...inputProps('email')}
              />
            </Field>
          </div>

          <Field
            id="contact-projectType"
            label="Project type"
            error={errors.projectType}
          >
            <select className="field__input field__select" {...inputProps('projectType')}>
              <option value="" disabled>
                Choose one
              </option>
              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </Field>

          <Field id="contact-message" label="Message" error={errors.message}>
            <textarea
              rows="5"
              className="field__input field__textarea"
              placeholder="What are you building, and what problem should it solve?"
              {...inputProps('message')}
            />
          </Field>

          {/* Hidden trap field for spam bots */}
          <div className="field--trap" aria-hidden="true">
            <label htmlFor="contact-company">Company</label>
            <input
              type="text"
              tabIndex="-1"
              autoComplete="off"
              {...inputProps('company')}
            />
          </div>

          <button
            type="submit"
            className="btn btn--primary contact__submit"
            disabled={isSending}
          >
            {isSending ? 'Sending...' : 'Send Message'}
            {!isSending && <Send size={18} aria-hidden="true" />}
          </button>

          <div className="contact__status" role="status" aria-live="polite">
            {status.message && (
              <p className={`status status--${status.state}`}>{status.message}</p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact