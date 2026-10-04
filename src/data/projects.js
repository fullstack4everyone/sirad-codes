// HOW TO ADD A PROJECT
// 1. Put a screenshot in public/images/projects (16:10 ratio works best, e.g. 1600x1000).
// 2. Copy one object below and change the values.
// 3. image: '/images/projects/your-file.png'. Leave it null to show a clean placeholder.
// 4. liveUrl and codeUrl: leave null to hide that button.

export const projects = [
  {
    id: 'cilmi-school',
    title: 'Cilmi School Management System',
    description:
      'A full-stack school management platform designed to organize students, classes, fees, users, and school operations.',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    image: null,
    imageAlt: 'Cilmi School Management System dashboard',
    liveUrl: null,
    codeUrl: null,
  },
  {
    id: 'hospital-management',
    title: 'Hospital Management System',
    description:
      'A web-based management system designed to organize hospital records and improve operational workflows.',
    tech: ['Django', 'SQLite', 'HTML', 'CSS', 'JavaScript'],
    image: null,
    imageAlt: 'Hospital Management System records screen',
    liveUrl: null,
    codeUrl: null,
  },
  {
    id: 'school-finance',
    title: 'School Finance Management System',
    description:
      'A web application for managing financial records, transactions, and reports.',
    tech: ['React', 'PostgreSQL'],
    image: null,
    imageAlt: 'School Finance Management System reports screen',
    liveUrl: null,
    codeUrl: null,
  },
  {
    id: 'next-project',
    title: 'Next Project',
    description:
      'A new system is in progress. Details and screenshots will be added here soon.',
    tech: [],
    image: null,
    imageAlt: '',
    liveUrl: null,
    codeUrl: null,
    isPlaceholder: true,
  },
]