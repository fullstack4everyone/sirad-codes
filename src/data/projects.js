// HOW TO ADD A PROJECT
// 1. Put a screenshot in public/images/projects (16:10 ratio works best, e.g. 1600x1000).
// 2. Copy one object below and change the values.
// 3. image: '/images/projects/your-file.webp'. Leave it null to show a clean placeholder.
// 4. liveUrl and codeUrl: leave null to hide that button.

export const projects = [
  {
    id: 'hospital-management',
    title: 'Garbahaarey Hospital Management System',
    description:
      'Built for Garbahaarey Hospital. Covers patient registration, consultations, laboratory requests, pharmacy stock and sales, dispensing and staff accounts, with low-stock and expiry alerts.',
    tech: ['PHP', 'MySQL', 'Bootstrap', 'jQuery', 'AJAX'],
    image: '/images/projects/hospital-management.webp',
    imageAlt:
      'Garbahaarey Hospital dashboard showing patient totals, daily pharmacy revenue, visits, low stock alerts and recent consultations',
    liveUrl: null,
    codeUrl: null,
  },
  {
    id: 'secureguard',
    title: 'SecureGuard Security Management System',
    description:
      'Built for a private security company. A web dashboard and mobile app for visitor check-in, gate control, guard attendance and breaks, incident reports, vehicles and patrols.',
    tech: ['React', 'React Native', 'Node.js', 'Express', 'PostgreSQL'],
    image: '/images/projects/secureguard.webp',
    imageAlt:
      'SecureGuard admin dashboard showing visitors, open and closed gates, staff present, guards on break, incidents and a visitor overview chart',
    liveUrl: null,
    codeUrl: null,
  },
  {
    id: 'siradify-pos',
    title: 'Siradify POS',
    description:
      'My own point-of-sale system for small shops in Kenya. Handles sales, M-Pesa STK Push payments, printed receipts, stock alerts, staff roles and daily email reports.',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'M-Pesa API'],
    image: '/images/projects/siradify-pos.webp',
    imageAlt:
      'Siradify POS dashboard showing total and daily revenue, products, pending payments, a sales chart for the last 7 days and recent orders',
    liveUrl: 'https://siradify-pos.vercel.app',
    codeUrl: 'https://github.com/fullstack4everyone/siradify-web',
  },
  {
    id: 'cilmi-college',
    title: 'Cilmi College Management System',
    description:
      'A college management system for students, fees, inventory and reports, with a live dashboard, AJAX forms and Excel and PDF exports.',
    tech: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'AJAX'],
    image: '/images/projects/cilmi-college.webp',
    imageAlt:
      'Cilmi College dashboard showing student, revenue and payment totals, a monthly fees chart and students by course',
    liveUrl: null,
    codeUrl: null,
  },
]