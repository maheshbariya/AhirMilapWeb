"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Header.module.scss';

const Header = () => {
  const { lang, toggleLanguage, t } = useLanguage();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

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

  const isActive = (path) => pathname === path ? styles.active : '';

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.pillContainer}>
        <div className={styles.logo}>
          <Link href="/">
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
              <li><Link href="/" className={isActive('/')}>{t('nav_home')}</Link></li>
              <li><Link href="/about" className={isActive('/about')}>{t('nav_about')}</Link></li>
              <li><Link href="/privacy" className={isActive('/privacy')}>{t('nav_privacy')}</Link></li>
              <li><Link href="/contact" className={isActive('/contact')}>{t('nav_contact')}</Link></li>
            </ul>
          </nav>

          <button className={styles.langToggle} onClick={toggleLanguage} aria-label="Toggle Language">
            <Globe size={18} />
            <span>{lang === 'EN' ? t('lang_en') : t('lang_gu')}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
