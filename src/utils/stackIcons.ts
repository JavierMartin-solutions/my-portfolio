export const getStackIcon = (key: string): string => {
  return stackIconMap[key] ?? 'default';
};

export const stackIconMap: Record<string, string> = {
  // Backend
  java: 'java',
  'spring-boot': 'springboot',
  groovy: 'groovy',
  grails: 'grails',
  'api-rest': 'apirest',
  'spring-security': 'spring',

  // Frontend
  html5: 'html5',
  css3: 'css',
  js: 'javascript',
  ts: 'typescript',
  react: 'react',
  bootstrap: 'bootstrap',
  tailwind: 'tailwind',

  // Architecture & Infra
  mvc: 'mvc',
  tomcat: 'tomcat',
  hex: 'hexagonal',

  // Databases
  oracle: 'oracle',
  postgresql: 'postgresql',
  mysql: 'mysql',
  hibernate: 'hibernate',

  // Tools
  github: 'github',
  gitlab: 'gitlab',
  docker: 'docker',
  maven: 'maven',
  gradle: 'gradle',

  // Testing
  spock: 'spock',

  //others
  appfinances: 'appfinances',
  sap: 'sap'
};


