// Firestore Data Initialization Script
// Run this once to populate Firestore with initial data from your static frontend

export const initialData = {
  // Hero Section
  hero: {
    badge: 'Welcome to Sinar AI',
    title: 'Building the Future with',
    highlightedText: 'AI Innovation',
    description: 'Transform your business with cutting-edge AI solutions. We combine artificial intelligence with human creativity to deliver exceptional results.',
    ctaPrimaryText: 'Start Your Project',
    ctaPrimaryLink: '/contact',
    ctaSecondaryText: 'View Our Work',
    ctaSecondaryLink: '/#portfolio'
  },

  // About Section (Vision & Mission)
  about: {
    badge: 'Our Vision',
    title: 'Innovating Tomorrow',
    description: 'At Sinar AI, we envision a future where artificial intelligence seamlessly enhances human capabilities, driving innovation and creating unprecedented value for businesses worldwide.',
    stats: [
      { number: '500+', label: 'Projects Completed' },
      { number: '98%', label: 'Client Satisfaction' },
      { number: '50+', label: 'AI Models Deployed' },
      { number: '24/7', label: 'Support Available' }
    ],
    mission: 'To democratize AI technology and make it accessible to businesses of all sizes, empowering them to achieve their goals through intelligent automation and data-driven insights.'
  },

  // Divisions
  divisions: [
    {
      id: 'ai-development',
      icon: '🤖',
      title: 'AI Development',
      description: 'Custom AI models and machine learning solutions tailored to your specific business needs.',
      features: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision']
    },
    {
      id: 'automation',
      icon: '⚡',
      title: 'Automation',
      description: 'Streamline your operations with intelligent automation powered by AI.',
      features: ['Process Automation', 'Workflow Optimization', 'RPA', 'Smart Integration']
    },
    {
      id: 'consulting',
      icon: '💡',
      title: 'AI Consulting',
      description: 'Strategic guidance to help you navigate your AI transformation journey.',
      features: ['Strategy Planning', 'Implementation', 'Training', 'Support']
    },
    {
      id: 'analytics',
      icon: '📊',
      title: 'Data Analytics',
      description: 'Turn your data into actionable insights with advanced analytics.',
      features: ['Data Mining', 'Predictive Analytics', 'Business Intelligence', 'Reporting']
    }
  ],

  // Portfolio Projects
  portfolio: [
    {
      id: 'ecommerce-ai',
      title: 'E-Commerce AI Platform',
      category: 'Web Development',
      image: '/portfolio/ecommerce.jpg',
      description: 'AI-powered recommendation engine for personalized shopping experiences',
      technologies: ['React', 'TensorFlow', 'Node.js', 'MongoDB'],
      results: '45% increase in conversion rate'
    },
    {
      id: 'chatbot-healthcare',
      title: 'Healthcare Chatbot',
      category: 'AI Solutions',
      image: '/portfolio/healthcare.jpg',
      description: 'Intelligent medical assistant for patient consultation and triage',
      technologies: ['NLP', 'Python', 'FastAPI', 'PostgreSQL'],
      results: '80% reduction in response time'
    },
    {
      id: 'analytics-dashboard',
      title: 'Business Analytics Dashboard',
      category: 'Data Analytics',
      image: '/portfolio/analytics.jpg',
      description: 'Real-time analytics platform for enterprise decision making',
      technologies: ['React', 'D3.js', 'Python', 'Apache Spark'],
      results: '3x faster insights generation'
    },
    {
      id: 'automation-workflow',
      title: 'Workflow Automation System',
      category: 'Automation',
      image: '/portfolio/automation.jpg',
      description: 'End-to-end automation solution for manufacturing processes',
      technologies: ['RPA', 'Python', 'Azure', 'Power Automate'],
      results: '60% cost reduction'
    }
  ],

  // Testimonials
  testimonials: [
    {
      id: 1,
      name: 'John Anderson',
      position: 'CEO',
      company: 'TechCorp Inc.',
      image: '/testimonials/john.jpg',
      rating: 5,
      text: 'Sinar AI transformed our business operations. Their AI solutions increased our efficiency by 40% within the first quarter.',
      date: '2024-10-15'
    },
    {
      id: 2,
      name: 'Sarah Mitchell',
      position: 'CTO',
      company: 'InnovateTech',
      image: '/testimonials/sarah.jpg',
      rating: 5,
      text: 'Outstanding team with deep AI expertise. They delivered beyond our expectations and provided excellent post-launch support.',
      date: '2024-09-20'
    },
    {
      id: 3,
      name: 'Michael Chen',
      position: 'Product Manager',
      company: 'Digital Solutions Ltd',
      image: '/testimonials/michael.jpg',
      rating: 5,
      text: 'The AI chatbot they built for us handles 80% of customer inquiries automatically. ROI was achieved in just 3 months.',
      date: '2024-08-10'
    }
  ],

  // Workflow Steps
  workflow: [
    {
      number: 1,
      icon: '🎯',
      title: 'Discovery & Planning',
      description: 'We begin by understanding your business goals, challenges, and requirements through in-depth consultation.',
      duration: '1-2 weeks'
    },
    {
      number: 2,
      icon: '🎨',
      title: 'Design & Strategy',
      description: 'Our team designs the optimal AI solution architecture and creates a detailed implementation strategy.',
      duration: '2-3 weeks'
    },
    {
      number: 3,
      icon: '⚙️',
      title: 'Development',
      description: 'We build and train AI models, develop the application, and integrate all components seamlessly.',
      duration: '4-8 weeks'
    },
    {
      number: 4,
      icon: '🧪',
      title: 'Testing & Optimization',
      description: 'Rigorous testing ensures accuracy, performance, and reliability. We fine-tune for optimal results.',
      duration: '2-3 weeks'
    },
    {
      number: 5,
      icon: '🚀',
      title: 'Deployment',
      description: 'We deploy your solution to production with zero downtime and comprehensive monitoring.',
      duration: '1 week'
    },
    {
      number: 6,
      icon: '📈',
      title: 'Support & Maintenance',
      description: 'Ongoing support, monitoring, and continuous improvement to ensure long-term success.',
      duration: 'Ongoing'
    }
  ],

  // FAQ
  faq: [
    {
      id: 1,
      question: 'What types of AI solutions do you provide?',
      answer: 'We offer a wide range of AI solutions including machine learning models, natural language processing, computer vision, chatbots, predictive analytics, and custom AI integrations tailored to your specific business needs.'
    },
    {
      id: 2,
      question: 'How long does it typically take to develop an AI solution?',
      answer: 'Project timelines vary based on complexity, but most projects range from 6-12 weeks from initial consultation to deployment. We provide detailed timelines during the discovery phase.'
    },
    {
      id: 3,
      question: 'Do you provide training for our team?',
      answer: 'Yes! We offer comprehensive training programs to ensure your team can effectively use and maintain the AI solutions we develop. Training is customized to your team\'s technical level.'
    },
    {
      id: 4,
      question: 'What industries do you work with?',
      answer: 'We work across various industries including e-commerce, healthcare, finance, manufacturing, retail, and technology. Our solutions are adaptable to any sector that can benefit from AI.'
    },
    {
      id: 5,
      question: 'How do you ensure data security and privacy?',
      answer: 'We implement industry-leading security practices including encryption, secure data storage, compliance with regulations (GDPR, HIPAA), and regular security audits. Your data privacy is our top priority.'
    },
    {
      id: 6,
      question: 'What is your pricing model?',
      answer: 'We offer flexible pricing based on project scope, including fixed-price projects, time and materials, and retainer agreements. Contact us for a customized quote based on your specific needs.'
    }
  ],

  // AI Employees
  aiEmployees: [
    {
      id: 'emma',
      name: 'Emma',
      role: 'AI Project Manager',
      avatar: '👩‍💼',
      description: 'Manages projects, coordinates teams, and ensures timely delivery',
      capabilities: ['Project Planning', 'Task Management', 'Team Coordination', 'Progress Tracking'],
      availability: '24/7'
    },
    {
      id: 'alex',
      name: 'Alex',
      role: 'AI Developer',
      avatar: '👨‍💻',
      description: 'Develops AI models and implements machine learning solutions',
      capabilities: ['ML Development', 'Model Training', 'Code Generation', 'API Integration'],
      availability: '24/7'
    },
    {
      id: 'sophia',
      name: 'Sophia',
      role: 'AI Designer',
      avatar: '👩‍🎨',
      description: 'Creates stunning UI/UX designs and user interfaces',
      capabilities: ['UI Design', 'UX Research', 'Prototyping', 'Design Systems'],
      availability: '24/7'
    },
    {
      id: 'marcus',
      name: 'Marcus',
      role: 'AI Analyst',
      avatar: '👨‍💼',
      description: 'Analyzes data and provides actionable business insights',
      capabilities: ['Data Analysis', 'Reporting', 'Insights Generation', 'Predictions'],
      availability: '24/7'
    }
  ],

  // Case Studies
  caseStudies: [
    {
      id: 'retail-optimization',
      title: 'Retail Inventory Optimization',
      client: 'Major Retail Chain',
      industry: 'Retail',
      challenge: 'Excessive inventory costs and frequent stockouts leading to lost sales',
      solution: 'Implemented AI-powered demand forecasting system using historical sales data, seasonality patterns, and external factors',
      results: [
        '35% reduction in inventory costs',
        '50% decrease in stockouts',
        '20% increase in sales',
        'ROI achieved in 4 months'
      ],
      technologies: ['Python', 'TensorFlow', 'Azure ML', 'Power BI'],
      duration: '3 months',
      testimonial: 'The AI solution transformed our inventory management and significantly improved our bottom line.'
    },
    {
      id: 'healthcare-diagnosis',
      title: 'Medical Diagnosis Assistant',
      client: 'Healthcare Network',
      industry: 'Healthcare',
      challenge: 'Long patient wait times and need for preliminary diagnosis support',
      solution: 'Developed an AI chatbot with NLP capabilities for initial patient assessment and triage',
      results: [
        '70% reduction in wait times',
        '85% accuracy in preliminary assessments',
        '60% decrease in staff workload',
        'Improved patient satisfaction by 45%'
      ],
      technologies: ['NLP', 'Python', 'FastAPI', 'React'],
      duration: '4 months',
      testimonial: 'This AI assistant has revolutionized our patient intake process and freed up our staff for more critical tasks.'
    }
  ],

  // Founders
  founders: [
    {
      id: 'founder-1',
      name: 'Dr. Adrian Singh',
      role: 'CEO & Co-Founder',
      image: '/founders/adrian.jpg',
      bio: 'Ph.D. in Artificial Intelligence from MIT. 15+ years of experience in AI research and development. Previously led AI initiatives at major tech companies.',
      linkedin: 'https://linkedin.com/in/adriansingh',
      expertise: ['AI Strategy', 'Machine Learning', 'Business Development']
    },
    {
      id: 'founder-2',
      name: 'Maria Gonzales',
      role: 'CTO & Co-Founder',
      image: '/founders/maria.jpg',
      bio: 'Former Principal Engineer at Google AI. Specialized in deep learning and neural networks. Published researcher with 20+ papers in top-tier conferences.',
      linkedin: 'https://linkedin.com/in/mariagonzales',
      expertise: ['Deep Learning', 'System Architecture', 'Research']
    }
  ],

  // Tech Stack
  techStack: {
    'AI & ML': [
      { name: 'TensorFlow', icon: '🧠', description: 'Deep learning framework' },
      { name: 'PyTorch', icon: '🔥', description: 'ML research platform' },
      { name: 'Scikit-learn', icon: '📊', description: 'ML algorithms library' },
      { name: 'Hugging Face', icon: '🤗', description: 'NLP models' }
    ],
    'Backend': [
      { name: 'Python', icon: '🐍', description: 'Primary language' },
      { name: 'Node.js', icon: '🟢', description: 'JavaScript runtime' },
      { name: 'FastAPI', icon: '⚡', description: 'Modern API framework' },
      { name: 'Django', icon: '🎸', description: 'Web framework' }
    ],
    'Frontend': [
      { name: 'React', icon: '⚛️', description: 'UI library' },
      { name: 'Next.js', icon: '▲', description: 'React framework' },
      { name: 'Tailwind CSS', icon: '💨', description: 'Utility CSS' },
      { name: 'TypeScript', icon: '📘', description: 'Type-safe JS' }
    ],
    'Cloud & DevOps': [
      { name: 'AWS', icon: '☁️', description: 'Cloud platform' },
      { name: 'Azure', icon: '🔷', description: 'Microsoft cloud' },
      { name: 'Docker', icon: '🐳', description: 'Containerization' },
      { name: 'Kubernetes', icon: '☸️', description: 'Orchestration' }
    ],
    'Database': [
      { name: 'PostgreSQL', icon: '🐘', description: 'Relational DB' },
      { name: 'MongoDB', icon: '🍃', description: 'NoSQL database' },
      { name: 'Redis', icon: '🔴', description: 'Cache & queue' },
      { name: 'Firestore', icon: '🔥', description: 'Cloud database' }
    ]
  },

  // Templates
  templates: [
    {
      id: 'chatbot-template',
      name: 'AI Chatbot Starter',
      category: 'AI Solutions',
      description: 'Pre-built chatbot with NLP capabilities, ready to customize for your needs',
      price: 'Free',
      features: ['NLP Integration', 'Multi-language', 'Analytics Dashboard', 'API Ready'],
      downloads: 1250,
      rating: 4.8,
      image: '/templates/chatbot.jpg'
    },
    {
      id: 'dashboard-template',
      name: 'Analytics Dashboard',
      category: 'Web Development',
      description: 'Beautiful analytics dashboard with charts, graphs, and real-time data',
      price: 'Free',
      features: ['Multiple Charts', 'Real-time Updates', 'Responsive', 'Dark Mode'],
      downloads: 980,
      rating: 4.9,
      image: '/templates/dashboard.jpg'
    },
    {
      id: 'ml-pipeline',
      name: 'ML Pipeline Template',
      category: 'AI Solutions',
      description: 'Complete ML pipeline from data ingestion to model deployment',
      price: 'Premium',
      features: ['Data Processing', 'Model Training', 'Auto-scaling', 'Monitoring'],
      downloads: 450,
      rating: 5.0,
      image: '/templates/ml-pipeline.jpg'
    }
  ],

  // Values & Ethics
  values: [
    {
      id: 'transparency',
      icon: '🔍',
      title: 'Transparency',
      description: 'We believe in open communication and clear explanations of our AI systems. No black boxes.'
    },
    {
      id: 'responsibility',
      icon: '🛡️',
      title: 'Responsibility',
      description: 'We take full responsibility for our AI solutions and their impact on society.'
    },
    {
      id: 'fairness',
      icon: '⚖️',
      title: 'Fairness',
      description: 'Our AI systems are designed to be unbiased and treat all users equally.'
    },
    {
      id: 'privacy',
      icon: '🔒',
      title: 'Privacy',
      description: 'Data privacy is paramount. We implement the highest security standards.'
    }
  ],

  // Contact Info
  contact: {
    email: 'sinaraiofficial@gmail.com',
    phone: '+1 (555) 123-4567',
    address: 'San Francisco, CA, USA',
    linkedin: 'https://linkedin.com/company/sinarai',
    twitter: 'https://twitter.com/sinarai',
    github: 'https://github.com/sinarai'
  }
};

// Metadata for each collection
export const collectionMetadata = {
  hero: { type: 'single', collection: 'content' },
  about: { type: 'single', collection: 'content' },
  divisions: { type: 'array', collection: 'divisions' },
  portfolio: { type: 'array', collection: 'portfolio' },
  testimonials: { type: 'array', collection: 'testimonials' },
  workflow: { type: 'array', collection: 'workflow' },
  faq: { type: 'array', collection: 'faq' },
  aiEmployees: { type: 'array', collection: 'aiEmployees' },
  caseStudies: { type: 'array', collection: 'caseStudies' },
  founders: { type: 'array', collection: 'founders' },
  techStack: { type: 'object', collection: 'content' },
  templates: { type: 'array', collection: 'templates' },
  values: { type: 'array', collection: 'values' },
  contact: { type: 'single', collection: 'content' }
};
