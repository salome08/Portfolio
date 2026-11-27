// All the copy of the site lives here, in English and French, so it can be edited without touching the layout.

export type Lang = 'en' | 'fr';

export const links = {
  email: 'salome.hazan.dev@gmail.com',
  photo: '/img/salome.webp',
  github: 'https://github.com/salome08',
  linkedin: 'https://www.linkedin.com/in/salom%C3%A9-hazan-631894b5/',
  // The "Malt" buttons only show when this is set.
  malt: 'https://www.malt.fr/profile/salomehazan',
};

type Testimonial = { quote: string; name: string; role: string };

const en = {
  meta: {
    title: 'Salomé Hazan · Freelance Senior Fullstack Engineer (React, React Native, Node.js)',
    description:
      'Freelance senior fullstack engineer, 9 years of experience. React, React Native / Expo, Node.js. Subscription & payment flows, mobile releases, AI features. Paris-based, full remote.',
  },
  ui: {
    nav: { services: 'Services', work: 'Work', stack: 'Stack', contact: 'Contact', hire: 'Hire me' },
    cta: 'Discuss your project',
    malt: 'Hire me on Malt',
    servicesEyebrow: 'What I do',
    servicesTitle: 'How I can help your team',
    workEyebrow: 'Selected work',
    workTitle: 'Recent missions',
    delivered: 'What I delivered',
    seeProduct: 'See the product',
    sideProjects: 'Side projects',
    testimonialsEyebrow: 'Testimonials',
    testimonialsTitle: 'What people say',
    stackEyebrow: 'Toolbox',
    stackTitle: 'Tech I work with',
    contactEyebrow: 'Contact',
    contactTitle: "Let's talk about your project",
    contactIntro: 'Tell me what you are building and where you need help. I reply within 24 hours, and a first call is free.',
    contactEmail: 'You can also email me at',
    contactMalt: 'or book me on Malt',
    name: 'Name',
    namePh: 'Your name',
    email: 'Email',
    emailPh: 'you@company.com',
    project: 'Your project',
    projectPh: 'What are you building, what stack, and when would you like to start?',
    send: 'Send message',
    sending: 'Sending...',
    sent: "Message sent. I'll get back to you within 24 hours.",
    failed: 'The message could not be sent. Please email me directly at',
    footer: 'Freelance Senior Fullstack Engineer',
    portrait: 'Portrait of',
    switchTo: 'Version française',
  },
  profile: {
    name: 'Salomé Hazan',
    role: 'Senior Fullstack Engineer',
    headline: 'I build web & mobile products that make money.',
    pitch:
      'Freelance React, React Native and Node.js engineer with 9 years of experience. I ship subscription flows, payments, reliable mobile releases and AI features, end to end.',
    location: 'Based in Paris, working full remote (UTC+2)',
    availability: 'Available from December 9 · 3 to 5 days a week',
  },
  facts: [
    { value: '9 years', label: 'shipping JavaScript products' },
    { value: 'Web + mobile', label: 'one engineer for both' },
    { value: 'École 42', label: 'Paris' },
    { value: 'FR / EN', label: 'native French, fluent English' },
  ],
  services: [
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
  ],
  caseStudies: [
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
      link: '',
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
      link: '',
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
  ],
  sideProjects: [
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
  ],
  // Add 1 to 3 quotes from clients or colleagues here (e.g. copied from LinkedIn recommendations).
  // The section stays hidden while this list is empty.
  testimonials: [] as Testimonial[],
  stack: [
    { group: 'Front end', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Three.js', 'Micro-frontends'] },
    { group: 'Mobile', items: ['React Native', 'Expo', 'EAS / store releases', 'RevenueCat', 'In-app purchases'] },
    { group: 'Back end', items: ['Node.js', 'Express', 'GraphQL', 'Python', 'Microservices', 'RabbitMQ'] },
    { group: 'Data & infra', items: ['PostgreSQL', 'MongoDB', 'Redis', 'ElasticSearch', 'Docker', 'GCP / AWS', 'GitLab CI'] },
    { group: 'Payments & AI', items: ['Stripe', 'RevenueCat', 'RAG / LLMs', 'Google Cloud Vision'] },
  ],
};

export type Content = typeof en;

const fr: Content = {
  meta: {
    title: 'Salomé Hazan · Développeuse Fullstack senior freelance (React, React Native, Node.js)',
    description:
      'Développeuse fullstack senior freelance, 9 ans d’expérience. React, React Native / Expo, Node.js. Abonnements et paiements, mises en production mobile, fonctionnalités IA. Basée à Paris, full remote.',
  },
  ui: {
    nav: { services: 'Services', work: 'Missions', stack: 'Stack', contact: 'Contact', hire: 'Me contacter' },
    cta: 'Parlons de votre projet',
    malt: 'Me réserver sur Malt',
    servicesEyebrow: 'Ce que je fais',
    servicesTitle: 'Comment je peux aider votre équipe',
    workEyebrow: 'Références',
    workTitle: 'Missions récentes',
    delivered: 'Ce que j’ai livré',
    seeProduct: 'Voir le produit',
    sideProjects: 'Projets personnels',
    testimonialsEyebrow: 'Recommandations',
    testimonialsTitle: 'Ils ont travaillé avec moi',
    stackEyebrow: 'Boîte à outils',
    stackTitle: 'Les technos que j’utilise',
    contactEyebrow: 'Contact',
    contactTitle: 'Parlons de votre projet',
    contactIntro:
      'Dites-moi ce que vous construisez et où vous avez besoin d’aide. Je réponds sous 24 heures, et le premier échange est offert.',
    contactEmail: 'Vous pouvez aussi m’écrire à',
    contactMalt: 'ou me réserver sur Malt',
    name: 'Nom',
    namePh: 'Votre nom',
    email: 'Email',
    emailPh: 'vous@entreprise.com',
    project: 'Votre projet',
    projectPh: 'Que construisez-vous, avec quelle stack, et quand souhaitez-vous démarrer ?',
    send: 'Envoyer',
    sending: 'Envoi...',
    sent: 'Message envoyé. Je vous réponds sous 24 heures.',
    failed: 'Le message n’a pas pu être envoyé. Écrivez-moi directement à',
    footer: 'Développeuse Fullstack senior freelance',
    portrait: 'Portrait de',
    switchTo: 'English version',
  },
  profile: {
    name: 'Salomé Hazan',
    role: 'Développeuse Fullstack senior',
    headline: 'Je construis des produits web et mobiles qui rapportent.',
    pitch:
      'Freelance React, React Native et Node.js, 9 ans d’expérience. Je livre de bout en bout des parcours d’abonnement, des paiements, des mises en production mobiles fiables et des fonctionnalités IA.',
    location: 'Basée à Paris, en full remote (UTC+2)',
    availability: 'Disponible dès le 9 décembre · 3 à 5 jours par semaine',
  },
  facts: [
    { value: '9 ans', label: 'de produits JavaScript livrés' },
    { value: 'Web + mobile', label: 'une seule personne pour les deux' },
    { value: 'École 42', label: 'Paris' },
    { value: 'FR / EN', label: 'français natif, anglais courant' },
  ],
  services: [
    {
      title: 'Abonnements et paiements',
      text: 'Paywalls, abonnements in-app et tunnels de paiement qui convertissent et restent fiables : RevenueCat, Stripe, facturation App Store et Play, webhooks et gestion des droits.',
      icon: 'card',
    },
    {
      title: 'Apps web et mobiles de bout en bout',
      text: 'De l’architecture à la publication sur les stores : React, Next.js, React Native / Expo et Node.js, avec une CI/CD pour livrer sans stress.',
      icon: 'devices',
    },
    {
      title: 'De l’IA dans votre produit',
      text: 'De l’IA utile, pas des démos : chat sur vos données (RAG), traitement d’images, assistants intégrés à vos apps existantes.',
      icon: 'sparkles',
    },
  ],
  caseStudies: [
    {
      client: 'Bohema',
      type: 'Mission freelance · app grand public multiplateforme',
      context: 'Une app iOS, Android et web qui avait besoin d’un modèle de monétisation fiable et de mises à jour sans accroc.',
      delivered: [
        'Conception de l’architecture d’abonnement et du parcours d’achat (RevenueCat)',
        'Diagnostic et correction des crashs Android en production',
        'Mise en place de toute la chaîne de build et de publication sur les stores',
      ],
      stack: ['React Native', 'Expo', 'TypeScript', 'RevenueCat', 'Node.js'],
      link: '',
    },
    {
      client: 'RedPill',
      type: 'Application de chat web et mobile',
      context: 'Un produit de chat temps réel sur web et mobile, freiné par un front-end monolithique.',
      delivered: [
        'Migration du front-end vers une architecture micro-frontend Webpack 5',
        'Messagerie temps réel en WebSockets',
        'Intégration d’un traitement d’images par IA',
      ],
      stack: ['React', 'React Native', 'Webpack 5', 'WebSockets', 'Node.js'],
      link: '',
    },
    {
      client: 'Ermes',
      type: 'Plateforme marketing data & IA',
      context:
        'Une plateforme qui planifie et optimise des campagnes publicitaires sur plus de 60 millions de profils, avec data clean room et IA générative pour les créations.',
      delivered: [
        'Développement de fonctionnalités sur le front React et le back Node.js / GraphQL',
        'Recherche d’audiences et cache avec ElasticSearch et Redis',
        'Contribution au media planning assisté par IA et à la génération de créations',
      ],
      stack: ['React', 'Node.js', 'TypeScript', 'GraphQL', 'ElasticSearch', 'Redis', 'MongoDB'],
      link: 'https://www.ermes.ai/plateforme',
    },
  ],
  sideProjects: [
    {
      title: 'App de reconnaissance faciale',
      text: 'Capture du visage sous plusieurs angles, détection de l’orientation de la tête en temps réel et masque 3D qui suit le visage.',
      image: '/projects/face-recognition.webp',
      stack: ['React', 'TypeScript', 'Three.js', 'Jeeliz'],
      link: 'https://recogn-app.netlify.app/',
    },
    {
      title: 'Lanka Events',
      text: 'App mobile pour créer, promouvoir et vendre des billets d’événements, avec inscriptions et synchronisation multi-appareils.',
      image: '/projects/lanka-events.webp',
      stack: ['React Native', 'Expo', 'Node.js', 'MongoDB'],
      link: 'https://github.com/salome08/LankaEvents',
    },
  ],
  // Même chose qu'en anglais : la section reste masquée tant que la liste est vide.
  testimonials: [] as Testimonial[],
  stack: [
    { group: 'Front-end', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Three.js', 'Micro-frontends'] },
    { group: 'Mobile', items: ['React Native', 'Expo', 'EAS / stores', 'RevenueCat', 'Achats in-app'] },
    { group: 'Back-end', items: ['Node.js', 'Express', 'GraphQL', 'Python', 'Microservices', 'RabbitMQ'] },
    { group: 'Data & infra', items: ['PostgreSQL', 'MongoDB', 'Redis', 'ElasticSearch', 'Docker', 'GCP / AWS', 'GitLab CI'] },
    { group: 'Paiements & IA', items: ['Stripe', 'RevenueCat', 'RAG / LLM', 'Google Cloud Vision'] },
  ],
};

export const content: Record<Lang, Content> = { en, fr };
