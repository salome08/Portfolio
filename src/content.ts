// All the copy of the site lives here, so it can be edited without touching the layout.

export const profile = {
  name: 'Salomé Hazan',
  role: 'Senior Fullstack Engineer',
  headline: 'I build web & mobile products that make money.',
  pitch:
    'Freelance React, React Native and Node.js engineer with 9 years of experience. I ship subscription flows, payments, reliable mobile releases and AI features, end to end.',
  location: 'Based in Paris, working full remote (UTC+2)',
  availability: 'Available from December 9 · 3 to 5 days a week',
  email: 'salome.hazan@yahoo.fr',
  photo: '/img/salome.webp',
  links: {
    github: 'https://github.com/salome08',
    linkedin: 'https://www.linkedin.com/in/salom%C3%A9-hazan-631894b5/?locale=en_US',
    // Paste your Malt profile URL here: the "Hire me on Malt" buttons only show once it is set.
    malt: '',
  },
};

export const services = [
  {
    title: 'Subscription & payment flows',
    text: 'Paywalls, in-app subscriptions and checkout that convert and stay reliable: RevenueCat, Stripe, App Store and Play billing, webhooks and entitlement logic.',
    icon: 'card',
  },
  {
    title: 'Web & mobile apps, end to end',
    text: 'From architecture to store release: React, Next.js, React Native / Expo and Node.js, with CI/CD so every release ships without drama.',
    icon: 'devices',
  },
  {
    title: 'AI features in your product',
    text: 'Useful AI, not demos: retrieval-augmented chat over your data, image processing, assistants embedded in existing apps.',
    icon: 'sparkles',
  },
] as const;

export const caseStudies = [
  {
    client: 'Bohema',
    type: 'Freelance mission · cross-platform consumer app',
    context: 'An iOS, Android and web app that needed a dependable way to monetise and to ship updates.',
    delivered: [
      'Designed the subscription architecture and purchase flow (RevenueCat)',
      'Tracked down and fixed Android production crashes',
      'Set up the full build and deployment pipeline to the stores',
    ],
    stack: ['React Native', 'Expo', 'TypeScript', 'RevenueCat', 'Node.js'],
  },
  {
    client: 'RedPill',
    type: 'Web & mobile chat application',
    context: 'A real-time chat product running on web and mobile, held back by a monolithic front-end build.',
    delivered: [
      'Migrated the front end to a Webpack 5 micro-frontend architecture',
      'Built real-time messaging over WebSockets',
      'Integrated AI-based image processing',
    ],
    stack: ['React', 'React Native', 'Webpack 5', 'WebSockets', 'Node.js'],
  },
  {
    client: 'Ermes',
    type: 'Data & AI marketing platform',
    context:
      'A platform that plans and optimises advertising campaigns on 60M+ audience profiles, with a data clean room and generative AI for creatives.',
    delivered: [
      'Built product features across the React front end and Node.js / GraphQL back end',
      'Worked on audience search and caching with ElasticSearch and Redis',
      'Contributed to AI-powered media planning and creative generation features',
    ],
    stack: ['React', 'Node.js', 'TypeScript', 'GraphQL', 'ElasticSearch', 'Redis', 'MongoDB'],
    link: 'https://www.ermes.ai/plateforme',
  },
];

export const sideProjects = [
  {
    title: 'Face Recognition Web App',
    text: 'Guided multi-angle face capture with real-time head orientation detection and a 3D face-tracking mask.',
    image: '/projects/face-recognition.webp',
    stack: ['React', 'TypeScript', 'Three.js', 'Jeeliz'],
    link: 'https://recogn-app.netlify.app/',
  },
  {
    title: 'Lanka Events',
    text: 'Mobile app to create, promote and sell tickets for events, with attendee registration and multi-device sync.',
    image: '/projects/lanka-events.webp',
    stack: ['React Native', 'Expo', 'Node.js', 'MongoDB'],
    link: 'https://github.com/salome08/LankaEvents',
  },
];

export const stack = [
  { group: 'Front end', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Three.js', 'Micro-frontends'] },
  { group: 'Mobile', items: ['React Native', 'Expo', 'EAS / store releases', 'RevenueCat', 'In-app purchases'] },
  { group: 'Back end', items: ['Node.js', 'Express', 'GraphQL', 'Python', 'Microservices', 'RabbitMQ'] },
  { group: 'Data & infra', items: ['PostgreSQL', 'MongoDB', 'Redis', 'ElasticSearch', 'Docker', 'GCP / AWS', 'GitLab CI'] },
  { group: 'Payments & AI', items: ['Stripe', 'RevenueCat', 'RAG / LLMs', 'Google Cloud Vision'] },
];

export const facts = [
  { value: '9 years', label: 'shipping JavaScript products' },
  { value: 'Web + mobile', label: 'one engineer for both' },
  { value: 'École 42', label: 'Paris' },
  { value: 'FR / EN', label: 'native French, fluent English' },
];
