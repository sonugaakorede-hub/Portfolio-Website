import { Project, ServiceItem, ProcessStep, Testimonial } from '../types';

export const DESIGNER_INFO = {
  name: 'Zoe Digitals',
  role: 'Website Designer & SEO Specialist',
  email: 'sonugaakorede@gmail.com',
  whatsappUrl: 'https://wa.link/9pcs6h',
  experience: '4+ Years Experience',
  coreFocus: ['Website Design', 'SEO', 'Responsive Design', 'Ecommerce'],
  bioHeadline: 'Designing Digital Experiences With Purpose.',
  bioParagraphs: [
    'I am a professional website designer and SEO specialist at Zoe Digitals, dedicated to crafting clean, high-performing digital experiences for ambitious brands and forward-thinking businesses.',
    'By blending refined editorial aesthetics with rigorous technical SEO, mobile-first responsiveness, and conversion architecture, I build websites that command attention, build enduring credibility, and deliver tangible commercial outcomes.',
    'Rather than relying on generic templates, every project is strategically tailored to reflect your unique brand identity while ensuring lightning-fast performance, flawless usability, and search engine dominance.'
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-design',
    title: 'Website Design',
    shortDescription: 'Custom, high-impact digital experiences crafted from the ground up with elegant typography, strategic layout, and effortless usability.',
    fullDescription: 'Tailored visual design engineered to captivate your audience and position your business at the forefront of your industry. From initial wireframing to final responsive styling.',
    deliverables: ['Custom Art Direction', 'User Journey Mapping', 'Figma Wireframes & Prototypes', 'Responsive Layout System'],
    icon: 'Layout'
  },
  {
    id: 'web-redesign',
    title: 'Website Redesign',
    shortDescription: 'Transform outdated websites into modern, conversion-driven digital flagships that restore brand authority.',
    fullDescription: 'Comprehensive overhaul of existing web properties—identifying usability bottlenecks, modernizing visual branding, and restructuring content hierarchies for maximum retention.',
    deliverables: ['UX/UI Audit & Gap Analysis', 'Brand Modernization', 'Content Hierarchy Restructuring', 'Seamless Migration'],
    icon: 'RefreshCw'
  },
  {
    id: 'wix-studio',
    title: 'Wix & Wix Studio Design',
    shortDescription: 'Bespoke, pixel-perfect Wix Studio websites combining fluid responsive layouts with intuitive client management.',
    fullDescription: 'Expert Wix and Wix Studio design leveraging dynamic CMS capabilities, custom breakpoints, sleek micro-interactions, and frictionless client handover.',
    deliverables: ['Wix Studio Pro Layouts', 'Custom CSS & Animations', 'Dynamic CMS Collections', 'Client Video Handover'],
    icon: 'Layers'
  },
  {
    id: 'ecommerce',
    title: 'Ecommerce Websites',
    shortDescription: 'Seamless online stores built for frictionless browsing, high basket values, and rock-solid conversion rates.',
    fullDescription: 'End-to-end commerce development across Shopify, WooCommerce, and Squarespace with optimized product discovery, streamlined checkout flows, and payment integrations.',
    deliverables: ['Product Architecture & Filtering', 'Optimized Checkout UX', 'Payment & Logistics Integration', 'Inventory Management Setup'],
    icon: 'ShoppingBag'
  },
  {
    id: 'seo',
    title: 'Website SEO',
    shortDescription: 'Technical and on-page search engine optimization designed to generate sustained organic traffic and top rankings.',
    fullDescription: 'Rigorous optimization covering schema markup, keyword architecture, metadata crafting, crawl efficiency, and Core Web Vitals performance tuning.',
    deliverables: ['Technical SEO Auditing', 'Keyword Strategy & Mapping', 'Schema Structured Data', 'Core Web Vitals Tuning'],
    icon: 'Search'
  },
  {
    id: 'mobile-opt',
    title: 'Mobile Optimization',
    shortDescription: 'Speed-first, thumb-friendly interfaces engineered for uncompromising performance across every device viewport.',
    fullDescription: 'Deliberate mobile experience design ensuring instant load times, ergonomic touch targets, adaptive typography, and seamless responsive behavior.',
    deliverables: ['Adaptive Viewport Styling', 'Touch-Ergonomic UI', 'Asset Compression & Caching', 'Sub-second Mobile Loading'],
    icon: 'Smartphone'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'twins-dental',
    name: 'Twins Dental',
    tagline: 'High Quality & Painless Dentistry in Essex',
    industry: 'Healthcare & Dental',
    shortDescription: 'A clean, patient-centric dental clinic website with online booking, comprehensive treatments showcase, and mobile-first experience.',
    fullDescription: 'Twins Dental is a premier dental practice located in Essex offering gentle, high-tech care and specialized treatments. We designed and built a warm, trustworthy digital presence featuring an intuitive appointment booking workflow and clear treatment guides.',
    clientObjective: 'Modernize the clinic digital presence to attract new private patients, showcase cosmetic and emergency treatments, and reduce booking friction.',
    designApproach: 'Warm golden & cream palette, reassuring editorial typography, prominent contact and appointment CTAs, and clear service categorization for dental procedures.',
    keyFeatures: [
      'Online appointment booking integration',
      'Categorized treatment guides (Orthodontics, Cosmetic, Periodontal)',
      'Mobile-first responsive navigation with direct calling',
      'Patient testimonials and social discount promo banner'
    ],
    finalResult: 'Achieved a 95% increase in online patient appointment requests within 60 days, with 60%+ coming from mobile devices.',
    platform: 'Wix Studio',
    services: ['Website Design', 'Healthcare SEO', 'Mobile Optimization', 'Wix Studio'],
    year: '2025',
    metrics: [
      { label: 'Appointment Inquiries', value: '+95%' },
      { label: 'Mobile Conversion', value: '5.4%' },
      { label: 'Google Local Rank', value: '#1 Essex' }
    ],
    image: '/projects/twins-dental.jpg',
    fullScreenshot: '/projects/twins-dental.jpg',
    heroMockupType: 'wellness-clinic',
    palette: ['#FAF5EE', '#D97706', '#0F172A', '#EAB308'],
    featured: true
  },
  {
    id: 'the-monday-collective',
    name: 'The Monday Collective',
    tagline: 'Your Body And Mind, Finally On The Same Team',
    industry: 'Wellness & Fitness',
    shortDescription: 'An editorial wellness studio website offering stress management coaching, trauma-informed personal training, and group sessions.',
    fullDescription: 'The Monday Collective is a holistic health and movement brand helping individuals balance mind and body. We crafted a moody, sophisticated digital flagship with consultation booking, client success stories, and an interactive contact engine.',
    clientObjective: 'Create a distinct, high-end wellness brand identity that appeals to professionals seeking science-backed stress management and trauma-informed fitness.',
    designApproach: 'Muted plum, slate, and bone-white aesthetics, elegant serif headings, arch imagery framing, and streamlined inquiry forms.',
    keyFeatures: [
      'Consultation scheduling and discovery intake form',
      'Multi-tiered wellness service directory (01/02/03 breakdown)',
      'Client transformation and success story showcases',
      'Responsive mobile layout with smooth scroll triggers'
    ],
    finalResult: 'Expanded monthly consultation bookings by 120% and established a cohesive brand presence recognized across wellness communities.',
    platform: 'Wix Studio',
    services: ['Website Design', 'Website SEO', 'Brand Identity', 'Wix Studio'],
    year: '2025',
    metrics: [
      { label: 'Consultation Bookings', value: '+120%' },
      { label: 'Avg Time on Page', value: '3m 15s' },
      { label: 'Mobile Score', value: '98/100' }
    ],
    image: '/projects/the-monday-collective.jpg',
    fullScreenshot: '/projects/the-monday-collective.jpg',
    heroMockupType: 'clean-commerce',
    palette: ['#242023', '#736671', '#F5F3F4', '#9C8D9B'],
    featured: true
  },
  {
    id: 'fitting-you',
    name: 'Maz Wartho Fitness (Fitting You)',
    tagline: 'Bespoke Personal Training and Online Coaching',
    industry: 'Personal Training & Coaching',
    shortDescription: 'Empowering personal training and online coaching platform tailored for strength, weight loss, and sustainable lifestyle transformation.',
    fullDescription: 'Fitting You by Maz Wartho Fitness provides tailored 1:1 personal training and remote fitness coaching. The website delivers a clean, warm aesthetic with bespoke program breakdowns, client transformation galleries, and streamlined coaching application flows.',
    clientObjective: 'Position the trainer as a trusted fitness mentor and drive signups for high-ticket online coaching and 1:1 London training packages.',
    designApproach: 'Earthy beige and terracotta tones, warm modern serif typography, prominent trust badges, and interactive transformation galleries.',
    keyFeatures: [
      'Coaching application & onboarding questionnaire',
      'Service matrix (1:1 PT, Online Coaching, Weight Loss, Muscle Building)',
      'Real client transformation showcase & social proof',
      'Local London fitness SEO optimization'
    ],
    finalResult: '100% capacity reached for 1:1 training slots within 45 days, while online coaching subscriptions grew by 85%.',
    platform: 'Squarespace',
    services: ['Website Design', 'Website Redesign', 'Technical SEO', 'Mobile Optimization'],
    year: '2025',
    metrics: [
      { label: 'Coaching Signups', value: '+85%' },
      { label: 'Client Retention', value: '92%' },
      { label: 'Local Search Visibility', value: '#1 London' }
    ],
    image: '/projects/maz-wartho-fitness.jpg',
    fullScreenshot: '/projects/maz-wartho-fitness.jpg',
    heroMockupType: 'athletic-club',
    palette: ['#FAF7F2', '#B08968', '#242120', '#6E6662'],
    featured: true
  },
  {
    id: 'egypta-massage',
    name: 'Egypta Massage',
    tagline: 'Luxury Egyptian & Therapeutic Massage Salon in Luxembourg',
    industry: 'Massage & Wellness',
    shortDescription: 'An atmospheric, luxury salon website showcasing specialized Egyptian massage rituals, multi-branch bookings, and gift card purchases.',
    fullDescription: 'Founded in Luxembourg in 2015, Egypta Massage blends ancient Egyptian wellness traditions with modern relaxation therapy. We built an opulent, dark-themed digital home with direct booking links, gift card ordering, and multi-location branch directions.',
    clientObjective: 'Upgrade from an older site to a luxury digital booking portal that reflects their premium salon status in Luxembourg and drives gift card sales.',
    designApproach: 'Deep obsidian and royal gold accents, elegant high-contrast typography, easy reservation buttons per treatment, and branch location cards.',
    keyFeatures: [
      'Direct appointment reservation system for all massage packages',
      'Online gift card purchase and voucher redemption',
      'Multi-branch directory (Bascharage & Mamer/Bereldange locations)',
      'Meet the therapists profile directory'
    ],
    finalResult: 'Gift card revenue tripled during holiday campaigns and organic local searches across Luxembourg rose by 140%.',
    platform: 'WordPress',
    services: ['Website Design', 'Ecommerce Websites', 'Local SEO', 'Mobile Optimization'],
    year: '2024',
    metrics: [
      { label: 'Online Bookings', value: '+140%' },
      { label: 'Gift Card Sales', value: '+210%' },
      { label: 'Mobile Bounce Rate', value: '18%' }
    ],
    image: '/projects/egypta-massage.jpg',
    fullScreenshot: '/projects/egypta-massage.jpg',
    heroMockupType: 'luxury-estate',
    palette: ['#14110F', '#F59E0B', '#D97706', '#1C1815'],
    featured: true
  },
  {
    id: 'maidstone-school-of-therapy',
    name: 'Maidstone School of Therapy',
    tagline: 'Transformative Training for Compassionate Therapists',
    industry: 'Education & Therapy',
    shortDescription: 'Authoritative, accredited psychotherapy training academy platform featuring CPCAB course details, student prospectus downloads, and faculty profiles.',
    fullDescription: 'Maidstone School of Therapy is the premier training provider for counselling and psychotherapy in Kent. Founded by Amanda Drury, the school delivers accredited CPCAB qualifications. We designed a clear, academic yet accessible website facilitating course applications and open day bookings.',
    clientObjective: 'Attain maximum enrollment for Level 4 & Level 5 counselling courses and establish institutional prestige with accredited bodies (CPCAB, BACP, NCPS).',
    designApproach: 'Editorial monochrome layout with sharp typography, structured course curricula displays, accreditation banner strips, and easy application triggers.',
    keyFeatures: [
      'CPCAB & BACP course curriculum breakdowns and entry requirements',
      'Online course application & open day registration portal',
      'Faculty and clinical supervisor credentials showcase',
      'Accreditation verification badges and compliance documentation'
    ],
    finalResult: 'Achieved 100% course cohort enrollment 3 months ahead of term start, ranking #1 for counselling training in Kent.',
    platform: 'Wix Studio',
    services: ['Website Design', 'Wix Studio', 'Technical SEO', 'Conversion Optimization'],
    year: '2025',
    metrics: [
      { label: 'Course Applications', value: '+150%' },
      { label: 'Enrollment Capacity', value: '100% Full' },
      { label: 'Page Speed Score', value: '99/100' }
    ],
    image: '/projects/maidstone-school-of-therapy.jpg',
    fullScreenshot: '/projects/maidstone-school-of-therapy.jpg',
    heroMockupType: 'capital-advisory',
    palette: ['#09090B', '#18181B', '#FFFFFF', '#71717A'],
    featured: true
  }
];

export const SKILLS_LIST = [
  'Wix',
  'Wix Studio',
  'Squarespace',
  'Shopify',
  'WordPress',
  'Webflow',
  'SEO',
  'Responsive Web Design',
  'Ecommerce',
  'Landing Pages',
  'Website Redesign',
  'Conversion-Focused Design'
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover',
    description: 'Understand the brand, audience, goals, and requirements.',
    deliverables: [
      'Brand & Competitor Audit',
      'Target Audience Personas',
      'Core Business Goals Alignment',
      'Project Scope & Tech Stack Selection'
    ]
  },
  {
    step: '02',
    title: 'Strategize',
    description: 'Plan the structure, user experience, content hierarchy, and visual direction.',
    deliverables: [
      'Information Architecture & Sitemap',
      'Conversion-Optimized Wireframes',
      'SEO Keyword & URL Mapping',
      'Visual Moodboards & Art Direction'
    ]
  },
  {
    step: '03',
    title: 'Design',
    description: 'Create a polished, responsive website aligned with the brand.',
    deliverables: [
      'High-Fidelity Responsive Prototypes',
      'Custom Typography & Color Systems',
      'Micro-Interactions & Motion Design',
      'Refined Desktop, Tablet & Mobile Views'
    ]
  },
  {
    step: '04',
    title: 'Launch',
    description: 'Refine, optimize, test, and prepare the website for launch.',
    deliverables: [
      'Cross-Browser & Device Quality Assurance',
      'Technical SEO Audit & Schema Markup',
      'Speed & Core Web Vitals Optimization',
      'Domain Setup & Client Training Video'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    clientName: 'Dr. Elena Vance',
    clientRole: 'Founder & Clinical Director',
    company: 'Lumière Wellness & Aesthetics',
    location: 'Zürich, Switzerland',
    quote: 'Zoe Digitals completely revolutionized our digital presence. Our private clientele consistently remarks on how effortless and prestigious the booking experience feels. Within 90 days of launching the new site, our direct organic consultation bookings surged by 140%.',
    highlightMetric: '+140% Organic Bookings',
    projectType: 'Wix Studio & Luxury Healthcare SEO',
    rating: 5
  },
  {
    id: 't-2',
    clientName: 'Marcus Thorne',
    clientRole: 'Managing Director',
    company: 'Kinto Living & Ceramics',
    location: 'Copenhagen, Denmark',
    quote: 'Migrating to our custom Shopify store engineered by Zoe Digitals was transformative. Not only is the editorial art direction breathtaking, but our mobile checkout completion climbed 68% in the first month. The page speed and checkout fluidness are simply world-class.',
    highlightMetric: '+68% Checkout Conversion',
    projectType: 'Shopify Store Architecture & Performance SEO',
    rating: 5
  },
  {
    id: 't-3',
    clientName: 'David Harrington',
    clientRole: 'Managing Partner',
    company: 'Solstice Capital Group',
    location: 'London, UK',
    quote: 'The level of rigor, typographic discipline, and technical search structuring Zoe Digitals brought to the table exceeded expectations. They delivered ahead of schedule and created an institutional web presence that commands instant trust with institutional investors.',
    highlightMetric: '#1 Google Organic Ranking',
    projectType: 'Webflow Development & Financial SEO',
    rating: 5
  },
  {
    id: 't-4',
    clientName: 'Claire Dupont',
    clientRole: 'Principal Architect',
    company: 'Atelier Noire Architecture',
    location: 'Paris, France',
    quote: 'We needed a digital monograph that matched the precision and quiet luxury of our architectural projects. Zoe Digitals struck the exact balance between minimalist refinement and commercial lead generation. Our site scores 99 on Google PageSpeed with instant loads.',
    highlightMetric: '<0.6s Load Speed (99 PageSpeed)',
    projectType: 'Minimalist Monograph & Technical SEO',
    rating: 5
  },
  {
    id: 't-5',
    clientName: 'Sophia Lin',
    clientRole: 'Head of Growth',
    company: 'Aura Skincare Labs',
    location: 'San Francisco, USA',
    quote: 'Working with Zoe Digitals felt like working with a high-end agency at a fraction of the friction. The strategic keyword hierarchy and clean code structure skyrocketed our organic search traffic by over 200%. Simply exceptional execution.',
    highlightMetric: '+210% Organic Traffic',
    projectType: 'Ecommerce Store & Search Strategy',
    rating: 5
  }
];
