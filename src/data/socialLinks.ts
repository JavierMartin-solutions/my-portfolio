export type SocialLinks = {
  id: 'email' | 'linkedin' | 'github' | 'cv';
  label: string;
  href: string;
  primary?: boolean;
};

export const socialLinks = [
  {
    id: 'cv',
    label: 'CV',
    href: '/cv/Javier_Martin_Pozo_CV.pdf',
    primary: true
  },
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:javier90.martin@gmail.com'
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/javier-mart%C3%ADn-pozo-906852110'
  },
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/JavierMartin-solutions'
  }
];
