"use client";

import { createContext, useContext, useState, useEffect } from 'react';
import { en } from '../locales/en';
import { gu } from '../locales/gu';

const LanguageContext = createContext();

const translations = {
  EN: en,
  GU: gu
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('EN');

  // Load saved language from localStorage on mount
  useEffect(() => {
    const savedLang = localStorage.getItem('ahirmilap_lang');
    if (savedLang && (savedLang === 'EN' || savedLang === 'GU')) {
      setLang(savedLang);
    }
  }, []);

  const toggleLanguage = () => {
    setLang(prev => {
      const newLang = prev === 'EN' ? 'GU' : 'EN';
      localStorage.setItem('ahirmilap_lang', newLang);
      return newLang;
    });
  };

  const t = (key) => {
    return translations[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
