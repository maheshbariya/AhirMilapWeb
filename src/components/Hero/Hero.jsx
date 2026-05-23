"use client";

import styles from './Hero.module.scss';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className={styles.title}>{t('hero_title')}</h1>
          <p className={styles.subtitle}>{t('hero_subtitle')}</p>

          {/* <div className={styles.searchBox}>
            <div className={styles.searchTitle}>Quick Match Search</div>
            <div className={styles.form}>
              <div className={styles.fieldGroup}>
                <div className={styles.field}>
                  <label>I am</label>
                  <select defaultValue="Male">
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
                <div className={styles.field}>
                  <label>Looking for</label>
                  <select defaultValue="Female">
                    <option>Female</option>
                    <option>Male</option>
                  </select>
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <div className={styles.field}>
                  <label>Region</label>
                  <select defaultValue="Any">
                    <option>Any</option>
                    <option>Gujarat</option>
                    <option>Maharashtra</option>
                    <option>Delhi</option>
                  </select>
                </div>
                <div className={styles.field}>
                  <label>City</label>
                  <select defaultValue="All Cities">
                    <option>All Cities</option>
                    <option>Rajkot</option>
                    <option>Mumbai</option>
                    <option>Ahmedabad</option>
                  </select>
                </div>
              </div>

              <button className={styles.submitBtn}>Show Matches</button>
            </div>
            <div className={styles.searchFooter}>Honoring Ahir traditions and heritage</div>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
