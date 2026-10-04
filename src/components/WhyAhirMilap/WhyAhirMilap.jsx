"use client";

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Lock, Sliders, Headset, CheckCircle2, Users2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import styles from './WhyAhirMilap.module.scss';

const WhyAhirMilap = () => {
  const { t } = useLanguage();

  const points = [
    {
      id: 1,
      title: t('why_p1_title'),
      desc: t('why_p1_desc'),
      icon: <Lock size={26} />
    },
    {
      id: 2,
      title: t('why_p2_title'),
      desc: t('why_p2_desc'),
      icon: <Sliders size={26} />
    },
    {
      id: 3,
      title: t('why_p3_title'),
      desc: t('why_p3_desc'),
      icon: <Headset size={26} />
    },
    {
      id: 4,
      title: t('why_p4_title'),
      desc: t('why_p4_desc'),
      icon: <CheckCircle2 size={26} />
    },
    {
      id: 5,
      title: t('why_p5_title'),
      desc: t('why_p5_desc'),
      icon: <Users2 size={26} />
    }
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.subtitle}>{t('why_subtitle')}</span>
          <h2 className={styles.title}>{t('why_title')}</h2>
        </motion.div>

        <div className={styles.grid}>
          {points.map((point, index) => (
            <motion.div 
              key={point.id}
              className={`${styles.card} ${index === 0 ? styles.featuredCard : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.number}>0{point.id}</span>
                <div className={styles.iconBox}>{point.icon}</div>
              </div>
              <h3 className={styles.cardTitle}>{point.title}</h3>
              <p className={styles.cardDesc}>{point.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className={styles.ctaWrapper}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href="/register" className={styles.ctaBtn}>
            <span>Register Now for Matchmaking</span>
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyAhirMilap;
