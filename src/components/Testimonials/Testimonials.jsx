"use client";

import { Quote } from 'lucide-react';
import styles from './Testimonials.module.scss';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const { t } = useLanguage();

  return (
    <section className={styles.testimonials}>
      <div className="container">
        <motion.div 
          className={styles.card}
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.imageSide}>
            <div className={styles.imagePlaceholder}></div>
            <div className={styles.label}>{t('test_label')}</div>
          </div>
          <div className={styles.contentSide}>
            <div className={styles.quoteIcon}>
              <Quote size={48} fill="#7E1D2B" color="#7E1D2B" />
            </div>
            <p className={styles.text}>
              {t('test_quote')}
            </p>
            <div className={styles.author}>
              <strong>{t('test_author')}</strong>
              <span>{t('test_date')}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
