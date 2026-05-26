"use client";

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import {
  ShieldAlert,
  Eye,
  Flag,
  ShieldCheck,
  AlertOctagon,
  Mail,
  Globe,
  Users,
  CheckCircle2,
  Scale,
  Ban,
  Shield,
  ArrowRight
} from 'lucide-react';
import styles from './ChildSafetyPage.module.scss';

export default function ChildSafetyStandardsPage() {
  const [activeSection, setActiveSection] = useState('introduction');

  // List of sections for Table of Contents
  const sections = useMemo(() => [
    { id: 'introduction', label: '1. Introduction' },
    { id: 'safety-measures', label: '2. Safety Measures' },
    { id: 'age-restriction', label: '3. Age Policy' },
    { id: 'reporting-support', label: '4. Reporting & Support' },
    { id: 'compliance', label: '5. Compliance' },
    { id: 'contact-info', label: '6. Contact' }
  ], []);

  // Track active section on scroll using IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -55% 0px', // Sweet spot viewport trigger
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
  }, [sections]);

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
    <main className={styles.safetyPage}>
      <div className="container">

        {/* Breadcrumbs */}
        <div className={styles.breadcrumbs}>
          <Link href="/">Home</Link>
          <span className={styles.separator}>/</span>
          <span className={styles.current}>Child Safety Standards</span>
        </div>

        {/* Hero Section with custom premium SVG Illustration */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <span className={styles.datePill}>Last Updated: May 2026</span>
            <h1>Child Safety Standards</h1>
            <p>
              At AhirMilap.com, we are committed to providing a safe, secure, and respectful matrimonial environment.
              We maintain absolute zero tolerance for child exploitation, abuse, or any harmful behaviors.
            </p>
            <a
              href="#reporting-support"
              className={styles.reportCta}
              onClick={(e) => handleScrollTo(e, 'reporting-support')}
            >
              <ShieldAlert size={20} />
              <span>Report a Concern</span>
            </a>
          </div>

          <div className={styles.heroIllustration}>
            {/* Custom SVG Shield Graphic — enlarged and polished */}
            <svg width="220" height="240" viewBox="0 0 220 240" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#C49B24" />
                </linearGradient>
                <linearGradient id="shieldFill" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.02" />
                </linearGradient>
              </defs>
              {/* Outer Shield Shape */}
              <path d="M110 14L180 46V114C180 166 150 210 110 224C70 210 40 166 40 114V46L110 14Z" fill="url(#shieldFill)" stroke="url(#shieldGrad)" strokeWidth="3.5" strokeLinejoin="round" />
              {/* Inner Shield Dashed Line */}
              <path d="M110 28L170 55V114C170 159 144 197 110 210C76 197 50 159 50 114V55L110 28Z" stroke="url(#shieldGrad)" strokeWidth="1" strokeDasharray="6 4" opacity="0.5" />
              {/* Central Circle */}
              <circle cx="110" cy="118" r="42" fill="#7E1D2B" fillOpacity="0.85" stroke="url(#shieldGrad)" strokeWidth="2.5" />
              {/* Decorative Ring */}
              <circle cx="110" cy="118" r="52" stroke="url(#shieldGrad)" strokeWidth="1" strokeDasharray="3 5" opacity="0.35" />
              {/* Lock Shackle */}
              <path d="M96 96C96 87 102.3 80 110 80C117.7 80 124 87 124 96" stroke="#D4AF37" strokeWidth="3.5" strokeLinecap="round" />
              {/* Lock Body */}
              <rect x="94" y="96" width="32" height="24" rx="4" fill="none" stroke="#D4AF37" strokeWidth="2.5" opacity="0.6" />
              {/* Checkmark */}
              <path d="M100 120L107 127L120 113" stroke="#D4AF37" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </section>

        {/* Responsive 2-Column Grid */}
        <div className={styles.layoutGrid}>

          {/* Left Column: Sticky Table of Contents Sidebar */}
          <aside className={styles.sidebar}>
            <h3 className={styles.sidebarTitle}>Navigation</h3>
            <nav className={styles.sidebarMenu} aria-label="Safety Policy Menu">
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

          {/* Right Column: Content Sections */}
          <div className={styles.contentArea}>

            {/* 1. Introduction */}
            <section id="introduction" className={styles.section}>
              <h2>
                <Shield size={24} />
                <span>1. Introduction</span>
              </h2>
              <p>
                AhirMilap.com is fully dedicated to fostering a safe, respectful, and genuine matchmaking experience
                exclusively for the Ahir community. We operate on a foundation of absolute trust, dignity, and user safety.
                Consequently, we enforce strict guidelines to safeguard our platform.
              </p>
              <p>
                We have **absolute zero tolerance** for child sexual abuse, exploitation, or any behavior that threatens the
                safety of minors. Any child sexual abuse material (CSAM) or child sexual abuse and exploitation (CSAE) content,
                behavior, activity, or grooming attempt is strictly prohibited and met with immediate, permanent expulsion
                from our platform without prior warning.
              </p>

              <div className={styles.zeroToleranceAlert}>
                <div className={styles.alertHeader}>
                  <AlertOctagon size={20} />
                  <span>CRITICAL NOTICE & ZERO TOLERANCE POLICY</span>
                </div>
                <p>
                  Any user who uploads, shares, distributes, or attempts to transmit any form of Child Sexual Abuse Material (CSAM)
                  or engages in Child Sexual Abuse and Exploitation (CSAE) behaviors will have their account immediately suspended,
                  all personal identifiers banned, and their details reported to the National Center for Missing & Exploited Children (NCMEC)
                  and local Indian law enforcement agencies.
                </p>
              </div>
            </section>

            {/* 2. Safety Measures */}
            <section id="safety-measures" className={styles.section}>
              <h2>
                <ShieldCheck size={24} />
                <span>2. Safety Measures</span>
              </h2>
              <p>
                To maintain a secure and trustworthy matchmaking environment, AhirMilap.com implements continuous proactive and
                reactive security protocols designed to prevent, detect, and mitigate any harmful activity:
              </p>

              <div className={styles.cardsGrid}>

                <div className={styles.safetyCard}>
                  <div className={styles.cardIcon}>
                    <Eye size={20} />
                  </div>
                  <h3 className={styles.cardTitle}>User Profile Monitoring</h3>
                  <p className={styles.cardDesc}>
                    We utilize advanced automated text and image scanning to screen profile descriptions and media uploads
                    for inappropriate or unauthorized content before they become visible to other members.
                  </p>
                </div>

                <div className={styles.safetyCard}>
                  <div className={styles.cardIcon}>
                    <Flag size={20} />
                  </div>
                  <h3 className={styles.cardTitle}>Report & Block Features</h3>
                  <p className={styles.cardDesc}>
                    Every member profile includes prominent, easy-to-use "Report" and "Block" controls, empowering our users
                    to instantly flag suspicious activities, profiles, or communications directly.
                  </p>
                </div>

                <div className={styles.safetyCard}>
                  <div className={styles.cardIcon}>
                    <Users size={20} />
                  </div>
                  <h3 className={styles.cardTitle}>Manual Review System</h3>
                  <p className={styles.cardDesc}>
                    Every single registration request, photo update, and document verification is checked manually by our
                    trained support and security staff to ensure authenticity and complete adherence to community guidelines.
                  </p>
                </div>

                <div className={styles.safetyCard}>
                  <div className={styles.cardIcon}>
                    <CheckCircle2 size={20} />
                  </div>
                  <h3 className={styles.cardTitle}>Content Moderation</h3>
                  <p className={styles.cardDesc}>
                    We maintain round-the-clock manual and automated content review queues, auditing verified details, uploaded
                    identity certificates, and user interactions to weed out bad actors.
                  </p>
                </div>

                <div className={styles.safetyCard}>
                  <div className={styles.cardIcon}>
                    <Ban size={20} />
                  </div>
                  <h3 className={styles.cardTitle}>Immediate Account Actions</h3>
                  <p className={styles.cardDesc}>
                    Violators of safety guidelines or community standards face swift penalties, including absolute device-level
                    and mobile number bans, permanent blacklisting, and removal of matching access.
                  </p>
                </div>

                <div className={styles.safetyCard}>
                  <div className={styles.cardIcon}>
                    <Scale size={20} />
                  </div>
                  <h3 className={styles.cardTitle}>Law Enforcement Cooperation</h3>
                  <p className={styles.cardDesc}>
                    We proactively share verified logs, bad-actor metadata, and device descriptors with cyber-crime departments
                    and law enforcement authorities globally when critical violations or safety threats occur.
                  </p>
                </div>

              </div>
            </section>

            {/* 3. Age Restriction Policy */}
            <section id="age-restriction" className={styles.section}>
              <h2>
                <Ban size={24} />
                <span>3. Age Restriction Policy</span>
              </h2>
              <p>
                AhirMilap.com is strictly a family-focused matrimonial search service designed exclusively for mature adults
                who are legally eligible for marriage:
              </p>

              <div className={styles.agePolicyBox}>
                <div className={styles.ageIconWrapper}>
                  18+
                </div>
                <div className={styles.ageDetails}>
                  <h3>Strict Age Limitation</h3>
                  <p>
                    All active users must be **18 years of age or older** to create an account, browse profiles, or communicate
                    with matches on our web platform or mobile applications.
                  </p>
                  <p>
                    Identity verification is mandatory during registration. If we identify, discover, or suspect any account
                    belonging to an individual under the age of 18, that profile is immediately suspended and permanently deleted
                    from our servers without exception.
                  </p>
                </div>
              </div>
            </section>

            {/* 4. Reporting & Support */}
            <section id="reporting-support" className={styles.section}>
              <h2>
                <ShieldAlert size={24} />
                <span>4. Reporting & Support</span>
              </h2>
              <p>
                Safety is a collective responsibility. If you notice any profile displaying inappropriate text, suspicious age details,
                violative photos, or grooming behaviors, please report it immediately:
              </p>

              <div className={styles.reportingPanel}>
                <h3>
                  <ShieldCheck size={22} />
                  <span>How to Report a Concern</span>
                </h3>
                <p>
                  You can tap the **"Report Profile"** button visible on the candidate's detailed profile view to instantly alert
                  our systems. Alternatively, you can reach out directly to our dedicated safety response desk with descriptions,
                  screenshots, or profile names:
                </p>

                <div className={styles.reportingGrid}>

                  <div className={styles.reportMethod}>
                    <div className={styles.methodIcon}>
                      <Mail size={18} />
                    </div>
                    <div className={styles.methodInfo}>
                      <h4>Direct Safety Email</h4>
                      <a href="mailto:mdahir8140@gmail.com">mdahir8140@gmail.com</a>
                      <span>Monitored 24/7 for safety violations</span>
                    </div>
                  </div>

                  <div className={styles.reportMethod}>
                    <div className={styles.methodIcon}>
                      <Globe size={18} />
                    </div>
                    <div className={styles.methodInfo}>
                      <h4>Support Web Desk</h4>
                      <a href="https://ahirmilap.com/contact" target="_blank" rel="noopener noreferrer">ahirmilap.com/contact</a>
                      <span>Official ticketing system</span>
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* 5. Compliance Statement */}
            <section id="compliance" className={styles.section}>
              <h2>
                <ShieldCheck size={24} />
                <span>5. Compliance Statement</span>
              </h2>
              <p>
                AhirMilap.com operates in complete alignment with global and regional mobile app distribution policies:
              </p>

              <div className={styles.complianceCard}>
                <div className={styles.complianceLogo}>
                  <Shield size={28} />
                </div>
                <div className={styles.complianceText}>
                  <h3>Google Play Console Policy Compliance</h3>
                  <p>
                    AhirMilap.com strictly complies with the **Google Play Child Safety Standards Policy** for social and matchmaking platforms.
                    We are dedicated to working continuously, upgrading our monitoring technologies, and working hand-in-hand with authorities
                    to maintain a safe, wholesome, and completely secure community environment.
                  </p>
                </div>
              </div>
            </section>

            {/* 6. Contact Information */}
            <section id="contact-info" className={styles.section}>
              <h2>
                <Mail size={24} />
                <span>6. Contact Information</span>
              </h2>
              <p>
                If you have questions, feedback, or need clarification regarding our safety standards, CSAE policy, or data
                moderation guidelines, please reach out to us at:
              </p>

              <div className={styles.contactDetails}>
                <strong>Email:</strong> <a href="mailto:mdahir8140@gmail.com" style={{ color: '#7E1D2B', fontWeight: 700 }}>mdahir8140@gmail.com</a><br />
                <strong>Website:</strong> <a href="https://ahirmilap.com" target="_blank" rel="noopener noreferrer" style={{ color: '#7E1D2B', fontWeight: 700 }}>https://ahirmilap.com</a><br />
                <strong>Primary Contact:</strong> Ahmedabad, Gujarat, India
              </div>

              <p className={styles.copyright}>
                © 2026 AhirMilap.com. All rights reserved. Last Updated: May 2026.
              </p>
            </section>

          </div>

        </div>

      </div>
    </main>
  );
}
