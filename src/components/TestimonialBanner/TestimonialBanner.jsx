"use client";

import { Play } from 'lucide-react';
import styles from './TestimonialBanner.module.scss';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

const TestimonialBanner = () => {
  const { t } = useLanguage();

  return (
    <section className={styles.banner}>
      <div className={styles.overlay}></div>
      <div className={`container ${styles.container}`}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.subtitle}>{t('tb_stats')}</span>
          <h2 className={styles.title}>
            {t('tb_title')}
          </h2>
          {/* <div className={styles.playButton}>
            <Play fill="white" size={32} />
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialBanner;
