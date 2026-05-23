"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Globe, Menu, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Header.module.scss';

const Header = () => {
  const { lang, toggleLanguage, t } = useLanguage();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: t('nav_home') },
    { href: '/about', label: t('nav_about') },
    { href: '/privacy', label: t('nav_privacy') },
    { href: '/contact', label: t('nav_contact') },
  ];

  // Track window scroll to toggle sticky state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Run once on load to initialize correctly
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  const isActive = (path) => pathname === path ? styles.active : '';
  const languageLabel = lang === 'EN' ? t('lang_en') : t('lang_gu');

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''} ${isMenuOpen ? styles.menuOpen : ''}`}>
      {isMenuOpen && (
        <button
          className={styles.backdrop}
          type="button"
          aria-label="Close navigation menu"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <div className={styles.pillContainer}>
        <div className={styles.logo}>
          <Link href="/" aria-label="AhirMilap home">
            <Image 
              src="/images/logo.png" 
              alt="AhirMilap" 
              width={180} 
              height={45} 
              className={styles.logoImg}
              priority
            />
          </Link>
        </div>
        
        <div className={styles.navContainer}>
          <nav className={styles.nav}>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={isActive(link.href)}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button className={styles.langToggle} onClick={toggleLanguage} aria-label="Toggle Language">
            <Globe size={18} />
            <span>{languageLabel}</span>
          </button>
        </div>

        <button
          className={styles.menuToggle}
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div
          id="mobile-navigation"
          className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}
        >
          <nav aria-label="Mobile navigation">
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={isActive(link.href)}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button className={styles.mobileLangToggle} onClick={toggleLanguage} aria-label="Toggle Language">
            <Globe size={18} />
            <span>{languageLabel}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
