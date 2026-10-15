const emailAddress = 'tirawat.cod01@gmail.com';

export const portfolioData = {
  personal: {
    name: 'Coach',
    title: 'Full-stack & DevOps Developer',
    email: emailAddress,
    education: 'B.S. Computer Science, Kasetsart University Kamphaeng Saen Campus',
    bio: 'I build full-stack products and practical automation, connecting thoughtful user experiences with reliable backend systems.',
    socialLinks: [
      { name: 'GitHub', href: 'https://github.com/', icon: 'github' },
      { name: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'linkedin' },
      { name: 'Email', href: `mailto:${emailAddress}`, icon: 'mail' },
    ],
  },
  experiences: [
    {
      company: 'Tomato Ideas Co., Ltd.',
      role: 'Full-stack & DevOps Developer (Cooperative Education / Internship)',
      period: 'Nov 24, 2025 – Mar 20, 2026',
      description:
        'Developed an Email Automation & AI OCR Pipeline to parse document data and streamline workflows.',
      highlights: [
        'Developed an email automation pipeline for document processing.',
        'Built an AI OCR pipeline to parse document data and streamline workflows.',
      ],
      techStack: [
        'Node.js',
        'Express',
        'React',
        'PostgreSQL',
        'n8n',
        'Docker',
        'Gemini API',
        'Claude AI',
      ],
    },
  ],
  projects: [
    {
      title: 'OrgChat',
      description:
        'A real-time organizational chat platform that brings team conversations and video calls into one shared workspace.',
      role: 'Full-stack developer',
      contribution:
        'Built the application across the React client and Express API, connecting real-time messaging, persistent PostgreSQL data, and Zegocloud calling.',
      techStack: ['React', 'Express', 'Socket.IO', 'PostgreSQL', 'Prisma', 'Zegocloud'],
      images: [
        '/project-shots/orgchat-conversations.svg',
        '/project-shots/orgchat-channel.svg',
        '/project-shots/orgchat-call.svg',
      ],
      features: [
        'Real-time team conversations powered by Socket.IO.',
        'Persistent organizational chat data managed with PostgreSQL and Prisma.',
        'Integrated video and voice communication using Zegocloud.',
      ],
    },
    {
      title: 'FormStoreWeb',
      description:
        'A full-stack restaurant ordering platform connecting a digital menu and order flow with workflow automation.',
      role: 'Full-stack developer',
      contribution:
        'Developed the ordering experience and connected order events to n8n webhooks, with PostgreSQL supporting order data.',
      techStack: ['n8n', 'PostgreSQL'],
      images: [
        '/project-shots/formstore-menu.svg',
        '/project-shots/formstore-cart.svg',
        '/project-shots/formstore-orders.svg',
      ],
      features: [
        'Restaurant menu and ordering experience for customers.',
        'Order data persisted in PostgreSQL.',
        'n8n webhooks connect submitted orders to automated workflows.',
      ],
    },
    {
      title: 'Recruitment System',
      description:
        'An applicant tracking system that streamlines candidate intake with automated document parsing and AI-assisted evaluation.',
      role: 'Full-stack developer',
      contribution:
        'Built recruitment workflows that organize applicant information and connect document parsing with AI evaluation.',
      techStack: ['Applicant Tracking', 'Document Parsing', 'AI Evaluation'],
      images: [
        '/project-shots/recruitment-candidates.svg',
        '/project-shots/recruitment-profile.svg',
        '/project-shots/recruitment-review.svg',
      ],
      features: [
        'Centralized applicant tracking from a recruitment dashboard.',
        'Automated parsing of candidate documents.',
        'AI-assisted applicant evaluation to support the review process.',
      ],
    },
  ],
  skills: [
    {
      category: 'Frontend',
      items: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
    },
    {
      category: 'Backend & Database',
      items: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'REST APIs'],
    },
    {
      category: 'DevOps & Tools',
      items: ['Docker', 'n8n', 'Git', 'Gemini API', 'Claude AI'],
    },
  ],
};
