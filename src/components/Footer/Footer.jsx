"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';
import styles from './Footer.module.scss';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.info}>
            <div className={styles.logo}>
              <Link href="/">
                <Image 
                  src="/images/logo.png" 
                  alt="AhirMilap" 
                  width={160} 
                  height={40} 
                  className={styles.logoImg}
                />
              </Link>
            </div>
            <p className={styles.description}>
              {t('footer_tagline')}
            </p>
          </div>
          
          <div className={styles.linksColumn}>
            <h3 className={styles.title}>{t('footer_quick_links')}</h3>
            <ul className={styles.list}>
              <li><Link href="/">{t('nav_home')}</Link></li>
              <li><Link href="/about">{t('nav_about')}</Link></li>
              <li><Link href="/#how-it-works">{t('nav_how_it_works')}</Link></li>
              <li><Link href="/register">{t('nav_register')}</Link></li>
              <li><Link href="/contact">{t('nav_contact')}</Link></li>
            </ul>
          </div>

          <div className={styles.linksColumn}>
            <h3 className={styles.title}>Legal & Trust</h3>
            <ul className={styles.list}>
              <li><Link href="/privacy">{t('nav_privacy')}</Link></li>
              <li><Link href="/child-safety-standards">Child Safety Standards</Link></li>
            </ul>
          </div>
          
          <div className={styles.linksColumn}>
            <h3 className={styles.title}>{t('footer_get_in_touch')}</h3>
            <ul className={styles.contactList}>
              <li>
                <MapPin size={18} className={styles.icon} />
                <span>Ahmedabad, Gujarat, India</span>
              </li>
              <li>
                <Phone size={18} className={styles.icon} />
                <span>+91 81402 10371</span>
              </li>
              <li>
                <Mail size={18} className={styles.icon} />
                <span>mdahir8140@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <div className={styles.copyright}>
            {t('footer_copyright')}
          </div>
          <div className={styles.legal}>
            <p>{t('footer_tagline')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

