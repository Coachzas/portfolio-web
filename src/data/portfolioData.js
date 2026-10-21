const emailAddress = 'tirawat.cod01@gmail.com';

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/Coachzas', icon: 'github' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/tirawat-pisut-8a809a3a7/', icon: 'linkedin' },
  { name: 'Email', href: `mailto:${emailAddress}`, icon: 'mail' },
];

const skills = [
  {
    category: { en: 'Frontend', th: 'ส่วนหน้า' },
    items: [
      { name: 'React', icon: 'react' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'HTML5', icon: 'html5' },
      { name: 'CSS', icon: 'css' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
    ],
  },
  {
    category: { en: 'Backend', th: 'ระบบหลังบ้าน' },
    items: [
      { name: 'Node.js', icon: 'nodedotjs' },
      { name: 'Express', icon: 'express' },
      { name: 'REST APIs', icon: 'rest-api' },
      { name: 'Socket.IO', icon: 'socketdotio' },
      { name: 'Zegocloud', icon: 'zegocloud' },
    ],
  },
  {
    category: { en: 'Database', th: 'ฐานข้อมูล' },
    items: [
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'Prisma', icon: 'prisma' },
    ],
  },
  {
    category: { en: 'DevOps', th: 'DevOps' },
    items: [
      { name: 'Docker', icon: 'docker' },
      { name: 'Vercel', icon: 'vercel' },
      { name: 'n8n', icon: 'n8n' },
    ],
  },
  {
    category: { en: 'Tools', th: 'เครื่องมือ' },
    items: [
      { name: 'Git', icon: 'git' },
      { name: 'Postman', icon: 'postman' },
      { name: 'VS Code', icon: 'vscode' },
      { name: 'Vite', icon: 'vite' },
      { name: 'Gemini API', icon: 'googlegemini' },
      { name: 'Claude API', icon: 'claude' },
    ],
  },
];

const projects = [
  {
    title: { en: 'Recruitment System', th: 'ระบบสรรหาบุคลากร' },
    githubUrl: 'https://github.com/Coachzas/recruitment-system',
    demoUrl: 'https://recruitment-system-three-gamma.vercel.app/',
    description: {
      en: 'An applicant tracking system that streamlines candidate intake with automated document parsing and AI-assisted evaluation.',
      th: 'ระบบติดตามผู้สมัครที่ช่วยให้การรับสมัครมีประสิทธิภาพยิ่งขึ้นด้วยการดึงข้อมูลจากเอกสารอัตโนมัติและการประเมินด้วย AI',
    },
    role: { en: 'Full-stack Web Developer', th: 'นักพัฒนาเว็บ Full-stack' },
    contribution: {
      en: 'Built recruitment workflows that organize applicant information and connect document parsing with AI evaluation.',
      th: 'พัฒนาเวิร์กโฟลว์การสรรหาเพื่อจัดระเบียบข้อมูลผู้สมัคร และเชื่อมการดึงข้อมูลจากเอกสารเข้ากับการประเมินด้วย AI',
    },
    techStack: ['React ', 'Vite ', 'Tailwind CSS', 'Express ', 'PostgreSQL ', 'Gemini API ', 'Claude AI'],
    images: [
      '/project-shots/Fetch0.png',
      '/project-shots/Applicants.png',
      '/project-shots/ApplicantsView.png',
      '/project-shots/Criteria.png',
      '/project-shots/Connections.png',
      '/project-shots/AIsetting.png',
      '/project-shots/Scheduler.png',
      '/project-shots/SchedulerSetting.png',
    ],
    features: {
      en: [
        'Centralized applicant tracking from a recruitment dashboard.',
        'Automated parsing of candidate documents.',
        'AI-assisted applicant evaluation to support the review process.',
      ],
      th: [
        'ติดตามข้อมูลผู้สมัครจากแดชบอร์ดการสรรหาในที่เดียว',
        'ดึงข้อมูลจากเอกสารของผู้สมัครโดยอัตโนมัติ',
        'ใช้ AI ช่วยประเมินผู้สมัครเพื่อสนับสนุนขั้นตอนการพิจารณา',
      ],
    },
  },
  {
    title: { en: 'FormStoreWeb', th: 'FormStoreWeb' },
    githubUrl: 'https://github.com/Coachzas/FormStoreWeb',
    demoUrl: 'https://form-store-web.vercel.app/',
    description: {
      en: 'A full-stack web ordering platform connecting a digital menu and order flow with workflow automation.',
      th: 'แพลตฟอร์มเว็บสั่งอาหารแบบ Full-stack ที่เชื่อมต่อเมนูดิจิทัลและขั้นตอนการสั่งอาหารเข้ากับระบบเวิร์กโฟลว์อัตโนมัติ',
    },
    role: { en: 'Full-stack Web Developer', th: 'นักพัฒนาเว็บ Full-stack' },
    contribution: {
      en: 'Developed the ordering experience and connected order events to n8n webhooks, with PostgreSQL supporting order data.',
      th: 'พัฒนาประสบการณ์การสั่งอาหารและเชื่อมต่อเหตุการณ์คำสั่งซื้อกับ n8n webhooks โดยใช้ PostgreSQL จัดเก็บข้อมูลคำสั่งซื้อ',
    },
    techStack: ['HTML', 'CSS', 'Tailwind CSS', 'Express', 'PostgreSQL', 'n8n'],
    imagePresentation: 'portrait',
    images: [
      '/project-shots/FromF1.png',
      '/project-shots/FormRice1.png',
      '/project-shots/FormRice2.png',
      '/project-shots/FormWater1.png',
      '/project-shots/FormWater2.png',
      '/project-shots/Cart1.png',
      '/project-shots/FormConfirm.png',
      '/project-shots/FormNoti.png',
    ],
    features: {
      en: [
        'Restaurant menu and ordering experience for customers.',
        'Order data persisted in PostgreSQL.',
        'n8n webhooks connect submitted orders to automated workflows.',
      ],
      th: [
        'เมนูร้านอาหารและระบบสั่งอาหารสำหรับลูกค้า',
        'จัดเก็บข้อมูลคำสั่งซื้อใน PostgreSQL',
        'ใช้ n8n webhooks เชื่อมคำสั่งซื้อเข้ากับเวิร์กโฟลว์อัตโนมัติ',
      ],
    },
  },
  {
    title: { en: 'OrgChat', th: 'OrgChat' },
    githubUrl: 'https://github.com/Coachzas/orgchat-project',
    demoUrl: '',
    description: {
      en: 'A real-time organizational chat platform that brings team conversations and video calls into one shared workspace.',
      th: 'แพลตฟอร์มแชตองค์กรแบบเรียลไทม์ที่รวมการสนทนาของทีมและวิดีโอคอลไว้ในพื้นที่ทำงานเดียวกัน',
    },
    role: { en: 'Full-stack Web Developer', th: 'นักพัฒนาเว็บ Full-stack' },
    contribution: {
      en: 'Built the application across the React client and Express API, connecting real-time messaging, persistent PostgreSQL data, and Zegocloud calling.',
      th: 'พัฒนาแอปพลิเคชันทั้งฝั่ง React และ Express API เชื่อมต่อการส่งข้อความแบบเรียลไทม์ ฐานข้อมูล PostgreSQL และระบบโทรผ่าน Zegocloud',
    },
    techStack: ['React', 'Express', 'Socket.IO', 'PostgreSQL', 'Prisma', 'Zegocloud'],
    images: [
      '/project-shots/Message.png',
      '/project-shots/Group.png',
      '/project-shots/GroupFile.png',
      '/project-shots/AdminNote.png',
      '/project-shots/VoiceCall.png',
      '/project-shots/VideoCall.png',
      '/project-shots/AdminDashb.png',
    ],
    features: {
      en: [
        'Real-time team conversations powered by Socket.IO.',
        'Persistent organizational chat data managed with PostgreSQL and Prisma.',
        'Integrated video and voice communication using Zegocloud.',
      ],
      th: [
        'สนทนาภายในทีมแบบเรียลไทม์ด้วย Socket.IO',
        'จัดเก็บข้อมูลแชตขององค์กรด้วย PostgreSQL และ Prisma',
        'รองรับวิดีโอคอลและการสื่อสารด้วยเสียงผ่าน Zegocloud',
      ],
    },
  },
];

const sharedData = {
  email: emailAddress,
  socialLinks,
  skills,
  projects,
  experiences: [
    {
      company: 'Tomato Ideas Co., Ltd.',
      period: 'Nov 24, 2025 – Mar 20, 2026',
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
    {
      company: 'Kasetsart University, Kamphaeng Saen Campus',
      period: '2022 – 2026',
      techStack: [],
    },
  ],
};

export const portfolioData = {
  en: {
    ...sharedData,
    personal: {
      name: 'Tirawat Pisut',
      title: 'Full-stack Web Developer & DevOps Engineer',
      email: emailAddress,
      education: 'B.S. Computer Science, Kasetsart University Kamphaeng Saen Campus',
      bio: 'I build full-stack web applications and practical automation, connecting thoughtful user experiences with reliable backend systems.',
      socialLinks,
    },
    navbar: {
      links: [
        { label: 'Home', href: '#hero' },
        { label: 'About', href: '#about' },
        { label: 'Experience', href: '#experience' },
        { label: 'Projects', href: '#projects' },
        { label: 'Skills', href: '#skills' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    hero: {
      tagline: 'Full-stack Web · DevOps · Automation',
      greeting: "Hi, I'm",
      nickname: 'Coach',
      projectsLink: 'Explore my work',
      contactLink: 'Get in touch',
      emailCopyLabel: 'Copy email address',
      code: {
        build: 'web apps',
        automate: 'workflows',
        deploy: 'with care',
      },
    },
    experience: {
      heading: "Where I've worked",
      title: 'Experience',
      items: [
        {
          role: 'Full-stack Web Developer & DevOps Engineer (Cooperative Education / Internship)',
          description:
            'Developed an Email Automation & AI OCR Pipeline to parse document data and streamline workflows.',
          highlights: [
            'Developed an email automation pipeline for document processing.',
            'Built an AI OCR pipeline to parse document data and streamline workflows.',
          ],
        },
        {
          role: 'Bachelor of Science, Computer Science',
          period: '2022 – 2026',
          description: 'Faculty of Liberal Arts and Science',
          highlights: ['GPA: 3.07'],
        },
      ],
      technologiesLabel: 'Technologies used',
    },
    projectsSection: {
      heading: 'Selected work',
      title: 'Projects',
      intro: 'A few projects where software, automation, and useful ideas come together.',
      viewDetails: 'View project details',
      githubLabel: 'GitHub',
      demoLabel: 'Live Demo',
      linkUnavailable: 'Add a project URL to enable this link',
    },
    skillsSection: {
      heading: 'Tools of the trade',
      title: 'Skills',
    },
    footer: {
      heading: 'GET IN TOUCH',
      title: 'Ready to Collaborate & Build Something Exceptional',
      description: 'Open to full-time roles, contracts, and innovative projects. Feel free to reach out—I usually respond within 24 hours.',
      emailPrompt: 'LET’S START A CONVERSATION',
      githubDetail: 'Profile & Repositories',
      linkedinDetail: 'Professional Network',
      resumeLabel: 'Download Resume',
      resumePrompt: 'View experience & skills',
      copyright: 'Built with care.',
      backToTop: 'Back to top',
      backToTopLabel: 'Back to top',
    },
    ui: {
      closeMenu: 'Close navigation menu',
      openMenu: 'Open navigation menu',
      navigationLabel: 'Main navigation',
      languageLabel: 'Select language',
      lightMode: 'Light mode',
      darkMode: 'Dark mode',
      switchToLight: 'Switch to light mode',
      switchToDark: 'Switch to dark mode',
      emailCopied: 'Email copied!',
      emailCopyFailed: 'Unable to copy email',
      closeProject: 'Close project details',
      closeLightbox: 'Close image gallery',
      openScreenshot: 'Open project screenshots',
      expandScreenshot: 'Expand screenshot',
      projectGallery: 'image gallery',
      previousScreenshot: 'Previous screenshot',
      nextScreenshot: 'Next screenshot',
      chooseScreenshot: 'Choose screenshot',
      showScreenshot: 'Show screenshot',
      screenshotUnavailable: 'Screenshot unavailable',
      projectDetails: 'Project details',
      roleContribution: 'Role & Contribution',
      roleContributionSeparator: '. ',
      keyFeatures: 'Key Features',
      techStack: 'Tech Stack',
    },
  },
  th: {
    ...sharedData,
    personal: {
      name: 'ถิรวัฒน์ พิสุทธิ์',
      title: 'นักพัฒนาเว็บ Full-stack และ DevOps',
      email: emailAddress,
      education: 'วิทยาศาสตรบัณฑิต สาขาวิทยาการคอมพิวเตอร์ มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตกำแพงแสน',
      bio: 'ผมพัฒนาเว็บแอปพลิเคชันและระบบอัตโนมัติที่ใช้งานได้จริง โดยเชื่อมประสบการณ์ผู้ใช้ที่ใส่ใจรายละเอียดเข้ากับระบบหลังบ้านที่เชื่อถือได้',
      socialLinks,
    },
    navbar: {
      links: [
        { label: 'หน้าแรก', href: '#hero' },
        { label: 'เกี่ยวกับผม', href: '#about' },
        { label: 'ประสบการณ์', href: '#experience' },
        { label: 'ผลงาน', href: '#projects' },
        { label: 'ทักษะ', href: '#skills' },
        { label: 'ติดต่อ', href: '#contact' },
      ],
    },
    hero: {
      tagline: 'Full-stack Web · DevOps · ระบบอัตโนมัติ',
      greeting: 'สวัสดีครับ ผม',
      nickname: 'โค้ช',
      projectsLink: 'ดูผลงานของผม',
      contactLink: 'ติดต่อผม',
      emailCopyLabel: 'คัดลอกอีเมล',
      code: {
        build: 'เว็บแอป',
        automate: 'เวิร์กโฟลว์',
        deploy: 'ใส่ใจในทุกรายละเอียด',
      },
    },
    experience: {
      heading: 'ประสบการณ์การทำงาน',
      title: 'ประสบการณ์',
      items: [
        {
          role: 'นักพัฒนาเว็บ Full-stack และ DevOps (สหกิจศึกษา / ฝึกงาน)',
          description:
            'พัฒนาระบบอัตโนมัติสำหรับอีเมลและ AI OCR เพื่อดึงข้อมูลจากเอกสารและปรับปรุงขั้นตอนการทำงานให้มีประสิทธิภาพ',
          highlights: [
            'พัฒนาระบบอัตโนมัติสำหรับประมวลผลเอกสารผ่านอีเมล',
            'สร้างระบบ AI OCR เพื่อดึงข้อมูลจากเอกสารและปรับปรุงขั้นตอนการทำงาน',
          ],
        },
        {
          role: 'วิทยาศาสตรบัณฑิต สาขาวิทยาการคอมพิวเตอร์',
          period: '2565 – 2569',
          description: 'คณะศิลปศาสตร์และวิทยาศาสตร์',
          highlights: ['เกรดเฉลี่ย: 3.07'],
        },
      ],
      technologiesLabel: 'เทคโนโลยีที่ใช้',
    },
    projectsSection: {
      heading: 'ผลงานที่คัดสรร',
      title: 'ผลงาน',
      intro: 'ตัวอย่างผลงานที่ผสานซอฟต์แวร์ ระบบอัตโนมัติ และแนวคิดที่นำไปใช้ได้จริง',
      viewDetails: 'ดูรายละเอียดผลงาน',
      githubLabel: 'GitHub',
      demoLabel: 'ดูตัวอย่าง',
      linkUnavailable: 'เพิ่มลิงก์โปรเจกต์เพื่อเปิดใช้งานปุ่มนี้',
    },
    skillsSection: {
      heading: 'เครื่องมือที่ใช้',
      title: 'ทักษะ',
    },
    footer: {
      heading: 'ช่องทางการติดต่อ',
      title: 'พร้อมร่วมงานและเปลี่ยนไอเดียให้เป็นจริง',
      description: 'เปิดรับโอกาสงานประจำ งานสัญญาจ้าง และโครงการต่าง ๆ พร้อมตอบกลับภายใน 24 ชม.',
      emailPrompt: 'เริ่มต้นพูดคุยกัน',
      githubDetail: 'โปรไฟล์และ repositories',
      linkedinDetail: 'เครือข่ายด้านอาชีพ',
      resumeLabel: 'ดาวน์โหลดเรซูเม่',
      resumePrompt: 'ประสบการณ์และทักษะ',
      copyright: 'สร้างด้วยความใส่ใจ',
      backToTop: 'กลับขึ้นด้านบน',
      backToTopLabel: 'กลับขึ้นด้านบน',
    },
    ui: {
      closeMenu: 'ปิดเมนูนำทาง',
      openMenu: 'เปิดเมนูนำทาง',
      navigationLabel: 'เมนูหลัก',
      languageLabel: 'เลือกภาษา',
      lightMode: 'โหมดสว่าง',
      darkMode: 'โหมดมืด',
      switchToLight: 'เปลี่ยนเป็นโหมดสว่าง',
      switchToDark: 'เปลี่ยนเป็นโหมดมืด',
      emailCopied: 'คัดลอกอีเมลแล้ว!',
      emailCopyFailed: 'คัดลอกอีเมลไม่สำเร็จ',
      closeProject: 'ปิดรายละเอียดผลงาน',
      closeLightbox: 'ปิดแกลเลอรีภาพ',
      openScreenshot: 'เปิดภาพหน้าจอผลงาน',
      expandScreenshot: 'ขยายภาพหน้าจอ',
      projectGallery: 'แกลเลอรีภาพ',
      previousScreenshot: 'ภาพหน้าจอก่อนหน้า',
      nextScreenshot: 'ภาพหน้าจอถัดไป',
      chooseScreenshot: 'เลือกภาพหน้าจอ',
      showScreenshot: 'แสดงภาพหน้าจอ',
      screenshotUnavailable: 'ไม่สามารถแสดงภาพหน้าจอได้',
      projectDetails: 'รายละเอียดผลงาน',
      roleContribution: 'บทบาทและสิ่งที่พัฒนา',
      roleContributionSeparator: ' — ',
      keyFeatures: 'คุณสมบัติเด่น',
      techStack: 'เทคโนโลยีที่ใช้',
    },
  },
};

for (const language of Object.keys(portfolioData)) {
  portfolioData[language].skills = skills.map(({ category, items }) => ({
    category: category[language],
    items,
  }));
  portfolioData[language].projects = projects.map((project) => ({
    ...project,
    title: project.title[language],
    description: project.description[language],
    role: project.role[language],
    contribution: project.contribution[language],
    features: project.features[language],
  }));
  portfolioData[language].experiences = sharedData.experiences.map((experience, index) => ({
    ...experience,
    ...portfolioData[language].experience.items[index],
  }));
}
