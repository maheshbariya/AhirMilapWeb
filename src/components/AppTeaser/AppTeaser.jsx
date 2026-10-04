"use client";

import styles from './AppTeaser.module.scss';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { FileText, Compass, Send, HeartHandshake } from 'lucide-react';

const AppTeaser = () => {
  const { t } = useLanguage();

  const steps = [
    {
      number: "01",
      title: t('step1_title'),
      desc: t('step1_desc'),
      icon: <FileText size={24} />
    },
    {
      number: "02",
      title: t('step2_title'),
      desc: t('step2_desc'),
      icon: <Compass size={24} />
    },
    {
      number: "03",
      title: t('step3_title'),
      desc: t('step3_desc'),
      icon: <Send size={24} />
    },
    {
      number: "04",
      title: t('step4_title'),
      desc: t('step4_desc'),
      icon: <HeartHandshake size={24} />
    }
  ];

  return (
    <section id="how-it-works" className={styles.teaser}>
      <div className="container">
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.subtitle}>{t('how_subtitle')}</span>
          <h2 className={styles.title}>{t('how_title')}</h2>
        </motion.div>
        
        <div className={styles.stepsGrid}>
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              className={styles.stepCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.number}>{step.number}</span>
                <div className={styles.iconBox}>{step.icon}</div>
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppTeaser;

