"use client";

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, EyeOff, Phone, Image, Share2 } from 'lucide-react';
import styles from './Confidentiality.module.scss';

const Confidentiality = () => {
  const { t } = useLanguage();
  const protections = [
    {
      id: 1,
      title: t('confidentiality_point1_title'),
      description: t('confidentiality_point1_desc'),
      icon: <EyeOff size={21} strokeWidth={1.8} />,
    },
    {
      id: 2,
      title: t('confidentiality_point2_title'),
      description: t('confidentiality_point2_desc'),
      icon: <Phone size={21} strokeWidth={1.8} />,
    },
    {
      id: 3,
      title: t('confidentiality_point3_title'),
      description: t('confidentiality_point3_desc'),
      icon: <Image size={21} strokeWidth={1.8} />,
    },
    {
      id: 4,
      title: t('confidentiality_point4_title'),
      description: t('confidentiality_point4_desc'),
      icon: <Share2 size={21} strokeWidth={1.8} />,
    },
  ];

  return (
    <section className={styles.section} aria-labelledby="confidentiality-heading">
      <div className={`container ${styles.container}`}>
        <motion.div
          className={styles.layout}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65 }}
        >
          <div className={styles.visual} aria-hidden="true">
            <div className={styles.visualGlow} />
            <div className={styles.shieldFrame}>
              <ShieldCheck className={styles.shieldIcon} size={102} strokeWidth={1.2} />
              <span className={styles.lockMark}><Lock size={26} strokeWidth={1.8} /></span>
            </div>
          </div>

          <div className={styles.intro}>
            <h2 className={styles.heading} id="confidentiality-heading">
              {t('confidentiality_heading')}
            </h2>
            <h3 className={styles.lead}>{t('confidentiality_lead')}</h3>
            <p className={styles.text}>{t('confidentiality_content')}</p>
          </div>

          <div className={styles.divider} aria-hidden="true" />

          <div className={styles.pillars}>
            {protections.map((protection) => (
              <article className={styles.pillar} key={protection.id}>
                <span className={styles.pillarIcon}>{protection.icon}</span>
                <div className={styles.pillarCopy}>
                  <h3>{protection.title}</h3>
                  <p>{protection.description}</p>
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Confidentiality;
