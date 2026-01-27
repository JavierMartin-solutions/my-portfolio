export type StackLevel = 'core' | 'professional' | 'learning';

export type StackItem = {
  key: string;
  label: {
    es: string,
    en: string
  };
  level?: StackLevel;
};

export type StackProject = {
  title: {
    es: string;
    en: string;
  };
  stack: StackItem[];
};

export const stackProjects: StackProject[] = [
  {
    title: {
      es: 'Plataformas gubernamentales',
      en: 'Government platforms'
    },
    stack: [
      { key: 'grails', label: { es: 'Grails', en: 'Grails' }, level: 'core' },
      { key: 'groovy', label: { es: 'Groovy', en: 'Groovy' }, level: 'core' },
      { key: 'java', label: { es: 'Java', en: 'Java' }, level: 'professional' },
      { key: 'mysql', label: { es: 'MySQL', en: 'MySQL' }, level: 'professional' },
      { key: 'tomcat', label: { es: 'Tomcat', en: 'Tomcat' }, level: 'professional' },
      { key: 'gradle', label: { es: 'Gradle', en: 'Gradle' }, level: 'professional' },
      { key: 'mvc', label: { es: 'Arquitectura MVC', en: 'MVC Architecture' }, level: 'professional' },
      { key: 'ts', label: { es: 'TypeScript', en: 'TypeScript' }, level: 'professional' },
      { key: 'js', label: { es: 'JavaScript', en: 'JavaScript' }, level: 'professional' },
      { key: 'html5', label: { es: 'HTML', en: 'HTML' }, level: 'professional' },
      { key: 'css3', label: { es: 'CSS', en: 'CSS' }, level: 'professional' },
      { key: 'bootstrap', label: { es: 'Bootstrap', en: 'Bootstrap' }, level: 'professional' },
      { key: 'spock', label: { es: 'Spock', en: 'Spock' }, level: 'professional' }
    ]
  },

  {
    title: {
      es: 'Sistemas empresariales',
      en: 'Enterprise systems'
    },
    stack: [
      { key: 'spring-security', label: { es: 'Spring', en: 'Spring' }, level: 'professional' },
      { key: 'api-rest', label: { es: 'APIs REST', en: 'REST APIs' }, level: 'professional' },
      { key: 'appfinances', label: { es: 'Integraciones financieras', en: 'Financial integrations' }, level: 'professional' },
      { key: 'sap', label: { es: 'SAP', en: 'SAP' }, level: 'professional' },
      { key: 'github', label: { es: 'GitHub', en: 'GitHub' }, level: 'professional' },
      { key: 'gitlab', label: { es: 'GitLab', en: 'GitLab' }, level: 'professional' }
    ]
  },

  {
    title: {
      es: 'Evolución full-stack (Aprendizaje activo)',
      en: 'Full-stack evolution (Active learning)'
    },
    stack: [
      { key: 'spring-boot', label: { es: 'Spring Boot', en: 'Spring Boot' }, level: 'learning' },
      { key: 'react', label: { es: 'React', en: 'React' }, level: 'learning' },
      { key: 'hex', label: { es: 'Arquitectura Hexagonal', en: 'Hexagonal Architecture' }, level: 'learning' },
      { key: 'default', label: { es: 'Microservicios', en: 'Microservices' }, level: 'learning' },
      { key: 'docker', label: { es: 'Docker', en: 'Docker' }, level: 'learning' },
      { key: 'tailwind', label: { es: 'Tailwind CSS', en: 'Tailwind CSS' }, level: 'learning' }
    ]
  },

  {
    title: {
      es: 'Otros conocimientos',
      en: 'Other knowledge'
    },
    stack: [
      { key: 'maven', label: { es: 'Maven', en: 'Maven' }, level: 'professional' },
      { key: 'oracle', label: { es: 'Oracle', en: 'Oracle' }, level: 'professional' },
      { key: 'postgresql', label: { es: 'PostgreSQL', en: 'PostgreSQL' }, level: 'professional' }
    ]
  }
];

