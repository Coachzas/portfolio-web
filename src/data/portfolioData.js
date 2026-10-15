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
      description: 'A real-time organizational chat system built for connected teams.',
      techStack: ['React', 'Express', 'Socket.IO', 'PostgreSQL', 'Prisma', 'Zegocloud'],
    },
    {
      title: 'FormStoreWeb',
      description:
        'A full-stack restaurant ordering platform with n8n webhooks and PostgreSQL.',
      techStack: ['n8n', 'PostgreSQL'],
    },
    {
      title: 'Recruitment System',
      description:
        'An applicant tracking system featuring automated document parsing and AI evaluation.',
      techStack: ['Applicant Tracking', 'Document Parsing', 'AI Evaluation'],
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
