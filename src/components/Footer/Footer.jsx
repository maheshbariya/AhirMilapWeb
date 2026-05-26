"use client";

import Link from 'next/link';
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
              Ahir <span>Milap.com</span>
            </div>
            <p className={styles.description}>
              {t('footer_desc')}
            </p>
            <div className={styles.social}>
              <Link href="#" className={styles.socialIcon}>FB</Link>
              <Link href="#" className={styles.socialIcon}>IG</Link>
              <Link href="#" className={styles.socialIcon}>TW</Link>
              <Link href="#" className={styles.socialIcon}>LI</Link>
            </div>
          </div>
          
          <div className={styles.linksColumn}>
            <h3 className={styles.title}>{t('footer_quick_links')}</h3>
            <ul className={styles.list}>
              <li><Link href="/">{t('nav_home')}</Link></li>
              <li><Link href="/about">{t('nav_about')}</Link></li>
              <li><Link href="/privacy">{t('nav_privacy')}</Link></li>
              <li><Link href="/child-safety-standards">Child Safety</Link></li>
              <li><Link href="/contact">{t('nav_contact')}</Link></li>
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
            <Link href="/privacy">{t('nav_privacy')}</Link>
            <Link href="/child-safety-standards">Child Safety Standards</Link>
            <Link href="/contact">{t('nav_contact')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
