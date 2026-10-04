import { contactLinks } from '../data/site'

// OPTIONAL: to receive messages without opening the visitor's email app,
// create a .env file in the project root with this line:
// VITE_FORM_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT

function getEmailAddress() {
  const email = contactLinks.find((link) => link.id === 'email')
  if (!email || email.href.includes('REPLACE_')) return null
  return email.href.replace('mailto:', '')
}

export async function sendMessage({ name, email, projectType, message }) {
  // Option 1: send through a form service.
  if (FORM_ENDPOINT) {
    const response = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ name, email, projectType, message }),
    })

    if (!response.ok) {
      throw new Error('The message could not be sent.')
    }

    return { method: 'endpoint' }
  }

  // Option 2: open the visitor's email app with the message filled in.
  const address = getEmailAddress()
  if (!address) {
    throw new Error('The contact form is not connected yet.')
  }

  const subject = `New project enquiry: ${projectType}`
  const body = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Project type: ${projectType}`,
    '',
    message,
  ].join('\n')

  window.location.href = `mailto:${address}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`

  return { method: 'mailto' }
}