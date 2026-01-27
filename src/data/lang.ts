export const getLang = () => {
  return localStorage.getItem('lang') || 'es';
};

export const setLang = (lang: 'es' | 'en') => {
  localStorage.setItem('lang', lang);
  window.dispatchEvent(new CustomEvent('language-changed'));
};
