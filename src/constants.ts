// Company Information
export const COMPANY = {
  name: 'Omega Care Consultancy Ltd',
  shortName: 'OCCL',
  tagline: 'Professional Care Services',
  description: 'Leading provider of residential care home and hospital staffing services in the UK. Quality care professionals for your facility.',
} as const;

// Contact Information
export const CONTACT = {
  phone: {
    display: '+44 (0) 20 8153 3354',
    href: 'tel:+442081533354',
  },
  email: {
    display: 'info@omegacareconltd.co.uk',
    href: 'mailto:info@omegacareconltd.co.uk',
  },
  address: {
    street: '7 Bell Yard',
    city: 'London',
    postcode: 'WC2A 2JR',
    country: 'United Kingdom',
    full: 'Omega Care Con Ltd\n7 Bell Yard\nLondon, WC2A 2JR\nUnited Kingdom',
  },
} as const;

// Business Hours
export const BUSINESS_HOURS = {
  weekdays: {
    days: 'Monday - Friday',
    hours: '9:00 AM - 6:00 PM',
  },
  saturday: {
    days: 'Saturday',
    hours: '10:00 AM - 4:00 PM',
  },
  sunday: {
    days: 'Sunday',
    hours: 'Closed',
  },
  emergency: '24/7 emergency staffing support available',
} as const;

// Social Media Links (update with actual links when available)
export const SOCIAL_MEDIA = {
  // facebook: {
  //   name: 'Facebook',
  //   url: 'https://facebook.com/omegacarecon',
  //   icon: 'facebook',
  // },
  // twitter: {
  //   name: 'Twitter',
  //   url: 'https://twitter.com/omegacarecon',
  //   icon: 'twitter',
  // },
  // linkedin: {
  //   name: 'LinkedIn',
  //   url: 'https://linkedin.com/company/omegacarecon',
  //   icon: 'linkedin',
  // },
} as const;

// Statistics
export const STATS = {
  carers: {
    value: '500+',
    label: 'Qualified Carers',
  },
  facilities: {
    value: '100+',
    label: 'Partner Facilities',
  },
  availability: {
    value: '24/7',
    label: 'Support Available',
  },
  experience: {
    value: '10+',
    label: 'Years Experience',
  },
} as const;

// Navigation
export const NAV_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
] as const;

// Services Overview
export const SERVICES = [
  {
    title: 'Residential Care Homes',
    description: 'Expert carers for residential facilities, ensuring the highest standards of care and comfort for your residents with 24/7 support.',
    icon: 'home',
  },
  {
    title: 'Hospital Staffing',
    description: 'Professional healthcare staff for hospitals and medical facilities. Qualified nurses and support workers available at short notice.',
    icon: 'heart',
  },
  {
    title: 'Specialized Care',
    description: 'Tailored care solutions for specific needs including dementia care, palliative care, and complex medical requirements.',
    icon: 'shield',
  },
] as const;
