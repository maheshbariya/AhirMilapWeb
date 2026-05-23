"use client";

import Image from 'next/image';
import styles from './About.module.scss';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

const About = () => {
  const { t } = useLanguage();

  return (
    <section className={styles.about}>
      <div className="container">
        <div className={styles.flex}>
          <motion.div 
            className={styles.content}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.subtitle}>{t('about_subtitle')}</span>
            <h2 className={styles.title}>{t('about_title')}</h2>
            <p className={styles.description}>
              {t('about_desc1')}
            </p>
            <p className={styles.description}>
              {t('about_desc2')}
            </p>
            <div className={styles.buttonWrapper}>
              <button className="btn btn-primary">{t('about_btn')}</button>
            </div>
          </motion.div>

          <motion.div 
            className={styles.imageGrid}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.imgWrapper1}>
              <Image
                src="/images/about-2.jpg"
                alt="Couple"
                width={380}
                height={480}
                className={styles.img}
              />
            </div>
            <div className={styles.imgWrapper2}>
              <Image
                src="/images/about-1.png"
                alt="Couple"
                width={380}
                height={480}
                className={styles.img}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
