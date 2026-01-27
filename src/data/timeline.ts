export type LangText = {
  es: string;
  en: string;
};

export type TimelineItem = {
  type: 'work' | 'education';
  title: string;
  subtitle: LangText;
  location: LangText;
  period: LangText;
  description: LangText;
  highlights: LangText[];
};

export const timeline: TimelineItem[] = [
  {
    type: 'work',
    title: 'CM.COM',
    subtitle: {
      es: 'Lead Backend Developer · Groovy / Grails',
      en: 'Lead Backend Developer · Groovy / Grails'
    },
    location: {
      es: 'Madrid, España',
      en: 'Madrid, Spain'
    },
    period: {
      es: 'Sep 2021 – Actualidad',
      en: 'Sep 2021 – Present'
    },
    description: {
      es: 'Desarrollo y mantenimiento de una plataforma crítica de servicios gubernamentales a gran escala, orientada a la gestión de trámites y transacciones internacionales.',
      en: 'Development and maintenance of a large-scale, mission-critical governmental services platform focused on managing administrative processes and international transactions.'
    },
    highlights: [
      {
        es: 'Liderazgo técnico del proyecto y responsabilidad sobre la arquitectura y evolución de la plataforma',
        en: 'Technical leadership of the project, with responsibility for the platform architecture and evolution'
      },
      {
        es: 'Integración de sistemas financieros y pasarelas de pago propias para transacciones internacionales',
        en: 'Integration of financial systems and proprietary payment gateways for international transactions'
      },
      {
        es: 'Implementación de flujos completos de usuario de extremo a extremo, desde la interfaz hasta la lógica backend',
        en: 'Implementation of complete end-to-end user flows, from the user interface to backend business logic'
      },
      {
        es: 'Desarrollo backend con Grails y Groovy, utilizando Gradle como sistema de construcción',
        en: 'Backend development using Grails and Groovy, with Gradle as the build system'
      },
      {
        es: 'Garantía de fiabilidad, consistencia y seguridad en operaciones críticas',
        en: 'Ensuring reliability, consistency and security in critical operations'
      },
      {
        es: 'Despliegue y mantenimiento de aplicaciones en servidores Tomcat',
        en: 'Deployment and maintenance of applications on Tomcat servers'
      },
      {
        es: 'Gestión de bases de datos MySQL',
        en: 'MySQL database management'
      },
      {
        es: 'Trabajo con tecnologías frontend: HTML, CSS, JavaScript, TypeScript y Bootstrap',
        en: 'Work with frontend technologies: HTML, CSS, JavaScript, TypeScript and Bootstrap'
      },
      {
        es: 'Control de versiones y colaboración mediante GitHub',
        en: 'Version control and team collaboration using GitHub'
      }
    ]
  },

  {
    type: 'work',
    title: 'Vipera',
    subtitle: {
      es: 'Desarrollador Backend · Groovy / Grails',
      en: 'Backend Developer · Groovy / Grails'
    },
    location: {
      es: 'Pozuelo de Alarcón, Madrid, España',
      en: 'Pozuelo de Alarcón, Madrid, Spain'
    },
    period: {
      es: 'Mar 2019 – Sep 2021',
      en: 'Mar 2019 – Sep 2021'
    },
    description: {
      es: 'Diseño, desarrollo y mantenimiento de aplicaciones web empresariales para la gestión de trámites consulares y administrativos en entornos de alta seguridad.',
      en: 'Design, development and maintenance of enterprise web applications for the management of consular and administrative processes in high-security environments.'
    },
    highlights: [
      {
        es: 'Desarrollo backend con Java, Groovy y Grails (v2, v3, v4 y v5) sobre arquitectura MVC',
        en: 'Backend development with Java, Groovy and Grails (v2, v3, v4 and v5) following the MVC architecture'
      },
      {
        es: 'Implementación de soluciones para la gestión y digitalización de trámites consulares',
        en: 'Implementation of solutions for the management and digitalization of consular procedures'
      },
      {
        es: 'Desarrollo de paneles de monitorización y herramientas de administración interna',
        en: 'Development of monitoring dashboards and internal administration tools'
      },
      {
        es: 'Integración y sincronización de datos con sistemas empresariales SAP',
        en: 'Integration and data synchronization with enterprise SAP systems'
      },
      {
        es: 'Optimización de procesos de solicitud y validación de documentación',
        en: 'Optimization of document request and validation workflows'
      },
      {
        es: 'Mantenimiento y despliegue de aplicaciones WAR en servidores Linux',
        en: 'Maintenance and deployment of WAR applications on Linux servers'
      },
      {
        es: 'Trabajo con aplicaciones orientadas a pasarelas de pago y sistemas críticos',
        en: 'Work on applications related to payment gateways and other mission-critical systems'
      }
    ]
  },

  {
    type: 'work',
    title: 'Meta4',
    subtitle: {
      es: 'Desarrollador Software · Payroll LATAM',
      en: 'Software Developer · Payroll LATAM'
    },
    location: {
      es: 'Las Rozas, Madrid, España',
      en: 'Las Rozas, Madrid, Spain'
    },
    period: {
      es: 'Jul 2018 – Mar 2019',
      en: 'Jul 2018 – Mar 2019'
    },
    description: {
      es: 'Desarrollo y evolución de soluciones de nómina para mercados LATAM en entornos empresariales SaaS.',
      en: 'Development and evolution of payroll solutions for LATAM markets in enterprise SaaS environments.'
    },
    highlights: [
    {
      es: 'Desarrollo sobre PeopleNet (M4Objects, código LN4) y componentes asociados (presentaciones)',
      en: 'Development on PeopleNet (M4Objects, LN4 code) and related components (UI/presentations)'
    },
    {
      es: 'Depuración de código, análisis y seguimiento de trazas para identificar y resolver incidencias',
      en: 'Code debugging, analysis and trace investigation to identify and resolve issues'
    },
    {
      es: 'Implementación de evolutivos, cambios legales y mejoras funcionales sobre el estándar de nómina de México',
      en: 'Implementation of evolutive changes, legal updates and functional improvements on the Mexico payroll standard'
    },
    {
      es: 'Integración del producto estándar con clientes de México en modalidad SaaS',
      en: 'Integration of the standard product with Mexico customers in a SaaS model'
    },
    {
      es: 'Elaboración y mantenimiento de documentación técnica asociada al desarrollo',
      en: 'Creation and maintenance of development-related technical documentation'
    }
    ]
  },

  {
    type: 'work',
    title: 'Meta4',
    subtitle: {
      es: 'QA Funcional y Tecnológico · I+D',
      en: 'Functional & Technical QA · R&D'
    },
    location: {
      es: 'Las Rozas, Madrid, España',
      en: 'Las Rozas, Madrid, Spain'
    },
    period: {
      es: 'Sep 2017 – Jun 2018',
      en: 'Sep 2017 – Jun 2018'
    },
    description: {
      es: 'Validación funcional y técnica de nuevas implementaciones de nómina en el área de I+D LATAM.',
      en: 'Functional and technical validation of new payroll implementations within the LATAM R&D area.'
    },
    highlights: [
      {
        es: 'Diseño y ejecución de casos de prueba funcionales y técnicos',
        en: 'Design and execution of functional and technical test cases'
      },
      {
        es: 'Pruebas de caja blanca sobre nuevas implementaciones',
        en: 'White-box testing of new implementations'
      },
      {
        es: 'Automatización de smoke tests',
        en: 'Smoke test automation'
      },
      {
        es: 'Validación de datos y comportamiento contra bases de datos productivas',
        en: 'Validation of data integrity and behavior against production databases'
      }
    ]
  },

  {
    type: 'work',
    title: 'AXA Technology Services',
    subtitle: {
      es: 'Becario IT · Workplace',
      en: 'IT Intern · Workplace'
    },
    location: {
      es: 'Madrid, España',
      en: 'Madrid, Spain'
    },
    period: {
      es: 'Nov 2015 – Nov 2016',
      en: 'Nov 2015 – Nov 2016'
    },
    description: {
      es: 'Soporte IT y administración de puestos de trabajo en entorno corporativo.',
      en: 'IT support and workstation administration in a corporate environment.'
    },
    highlights: [
      {
        es: 'Gestión y resolución de incidencias con herramientas ITSM (HP CornerStone)',
        en: 'Incident management and resolution using ITSM tools (HP CornerStone)'
      },
      {
        es: 'Configuración y soporte de equipos y smartphones corporativos',
        en: 'Configuration and support of corporate workstations and smartphones'
      },
      {
        es: 'Soporte a Service Desk interno y externo',
        en: 'Support for internal and external Service Desk teams'
      },
      {
        es: 'Gestión de dispositivos móviles y correo corporativo (AirWatch)',
        en: 'Mobile device and corporate email management (AirWatch)'
      }
    ]
  },

  {
    type: 'work',
    title: 'Indra',
    subtitle: {
      es: 'Becario · Desarrollo de Software',
      en: 'Intern · Software Development'
    },
    location: {
      es: 'Alcobendas, Madrid, España',
      en: 'Alcobendas, Madrid, Spain'
    },
    period: {
      es: 'Abr 2010 – Jun 2010',
      en: 'Apr 2010 – Jun 2010'
    },
    description: {
      es: 'Participación en proyectos de automatización de procesos de gestión.',
      en: 'Participation in projects focused on the automation of management processes.'
    },
    highlights: [
      {
        es: 'Automatización de procesos de trabajo',
        en: 'Automation of operational workflows'
      },
      {
        es: 'Uso de BMC Remedy IT Service Management',
        en: 'Use of BMC Remedy IT Service Management'
      }
    ]
  },
  {
    type: 'education',
    title: 'Universidad Francisco de Vitoria',
    subtitle: {
      es: 'Grado en Ingeniería Informática · Experto en Robótica',
      en: 'Degree in Computer Engineering · Robotics Specialist'
    },
    location: {
      es: 'Pozuelo de Alarcón, Madrid, España',
      en: 'Pozuelo de Alarcón, Madrid, Spain'
    },
    period: {
      es: '2012 – 2017',
      en: '2012 – 2017'
    },
    description: {
      es: 'Graduado en Ingeniería Informática y Experto en Robótica',
      en: 'Graduate in Computer Engineering and Robotics Expert'
    },
    highlights: [
      {
        es: 'Seleccionado para el Programa de Excelencia de la universidad',
        en: 'Selected for the university’s Excellence Program'
      },
      {
        es: 'Proyecto Fin de Grado con calificación: 8 (Notable)',
        en: 'Final Degree Project graded 8/10'
      },
      {
        es: 'Desarrollo de una aplicación en Matlab basada en lógica borrosa y razonamiento por defecto',
        en: 'Top 10 % de la promoción'
      }
    ]
  },
  {
    type: 'education',
    title: 'CETYS (UFV)',
    subtitle: {
      es: 'Título superior en Administrador de Sistemas Informáticos',
      en: 'Degree in Computer Engineering · Robotics Specialist'
    },
    location: {
      es: 'Pozuelo de Alarcón, Madrid, España',
      en: 'Pozuelo de Alarcón, Madrid, Spain'
    },
    period: {
      es: '2008 – 2010',
      en: '2008 – 2010'
    },
    description: {
      es: 'Formación orientada a sistemas, redes, administración de servidores y bases de datos.',
      en: 'Education focused on systems, networks, server administration and database management.'
    },    
    highlights: [
      {
        es: 'Nota media: 9.0',
        en: 'Average rating: 9.0'
      },
      {
        es: 'Top 10 % de la promoción',
        en: 'Top 10 % de la promoción'
      }
    ]
  }

];
