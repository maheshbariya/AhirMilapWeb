"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import styles from './PrivacyPage.module.scss';

export default function PrivacyPage() {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState('introduction');

  // List of sections for Table of Contents
  const sections = [
    { id: 'introduction', label: t('privacy_introduction_title') },
    { id: 'collection', label: t('privacy_collect_title') },
    { id: 'usage', label: t('privacy_usage_title') },
    { id: 'verification', label: t('privacy_verification_title') },
    { id: 'protection', label: t('privacy_protection_title') },
    { id: 'nri', label: t('privacy_nri_title') },
    { id: 'grievance', label: t('privacy_grievance_title') },
    { id: 'deletion', label: t('privacy_deletion_title') },
    { id: 'contact', label: t('privacy_contact_title') }
  ];

  // Track active section on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // Sweet spot trigger
      threshold: 0
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sections.forEach(sec => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach(sec => {
        const el = document.getElementById(sec.id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Smooth scroll handler
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  return (
    <main className={styles.privacyPage}>
      <div className="container">
        
        {/* Breadcrumbs */}
        <div className={styles.breadcrumbs}>
          <Link href="/">{t('about_breadcrumb_home')}</Link>
          <span className={styles.separator}>/</span>
          <span className={styles.current}>{t('nav_privacy')}</span>
        </div>

        {/* Page Title & Revision Pill */}
        <h1 className={styles.title}>{t('privacy_title')}</h1>
        <p className={styles.lastUpdate}>{t('privacy_last_update')}</p>

        {/* Responsive 2-Column Grid */}
        <div className={styles.layoutGrid}>
          
          {/* Left Column: Sticky, Transparent Table of Contents Sidebar */}
          <aside className={styles.sidebar}>
            <h3 className={styles.sidebarTitle}>Table of Contents</h3>
            <nav className={styles.sidebarMenu} aria-label="Privacy Menu">
              {sections.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  onClick={(e) => handleScrollTo(e, sec.id)}
                  className={`${styles.sidebarLink} ${activeSection === sec.id ? styles.active : ''}`}
                >
                  {sec.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Right Column: Normal Cardless Sections */}
          <div className={styles.contentArea}>
            
            {/* 1. Introduction */}
            <section id="introduction" className={styles.section}>
              <h2>{t('privacy_introduction_title')}</h2>
              <p>{t('privacy_introduction_content1')}</p>
              <p>{t('privacy_introduction_content2')}</p>
            </section>

            {/* 2. Information We Collect */}
            <section id="collection" className={styles.section}>
              <h2>{t('privacy_collect_title')}</h2>
              
              <h3>{t('privacy_collect_reg_subtitle')}</h3>
              <p>{t('privacy_collect_reg_content')}</p>
              <ul>
                <li>{t('privacy_collect_reg_point1')}</li>
                <li>{t('privacy_collect_reg_point2')}</li>
                <li>{t('privacy_collect_reg_point3')}</li>
                <li>{t('privacy_collect_reg_point4')}</li>
              </ul>

              <h3>{t('privacy_collect_tech_subtitle')}</h3>
              <p>{t('privacy_collect_tech_content')}</p>
            </section>

            {/* 3. How We Use Information */}
            <section id="usage" className={styles.section}>
              <h2>{t('privacy_usage_title')}</h2>
              <p>{t('privacy_usage_content')}</p>
              <ul>
                <li>{t('privacy_usage_point1')}</li>
                <li>{t('privacy_usage_point2')}</li>
                <li>{t('privacy_usage_point3')}</li>
                <li>{t('privacy_usage_point4')}</li>
              </ul>
            </section>

            {/* 4. Identity Verification */}
            <section id="verification" className={styles.section}>
              <h2>{t('privacy_verification_title')}</h2>
              <p>{t('privacy_verification_content')}</p>
            </section>

            {/* 5. Data Protection */}
            <section id="protection" className={styles.section}>
              <h2>{t('privacy_protection_title')}</h2>
              <p>{t('privacy_protection_content')}</p>
            </section>

            {/* 6. NRI & International Members */}
            <section id="nri" className={styles.section}>
              <h2>{t('privacy_nri_title')}</h2>
              <p>{t('privacy_nri_content')}</p>
            </section>

            {/* 7. Grievance Redressal */}
            <section id="grievance" className={styles.section}>
              <h2>{t('privacy_grievance_title')}</h2>
              <p>{t('privacy_grievance_content')}</p>
            </section>

            {/* 8. Account Deletion */}
            <section id="deletion" className={styles.section}>
              <h2>{t('privacy_deletion_title')}</h2>
              <p>{t('privacy_deletion_content')}</p>
            </section>

            {/* 9. Contact Us */}
            <section id="contact" className={styles.section}>
              <h2>{t('privacy_contact_title')}</h2>
              <p>{t('privacy_contact_content')}</p>
              <div className={styles.contactDetails}>
                <strong>{t('privacy_contact_email')}</strong><br />
                <strong>{t('privacy_contact_phone')}</strong><br />
                <strong>{t('privacy_contact_address')}</strong>
              </div>
              
              <p className={styles.copyright}>© 2026 AhirMilap. All rights reserved.</p>
            </section>

          </div>

        </div>

      </div>
    </main>
  );
}
