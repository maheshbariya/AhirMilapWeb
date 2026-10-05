"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import styles from './FamilyParents.module.scss';

const FamilyParents = () => {
  const { t } = useLanguage();
  const benefits = [
    t('family_benefit1'),
    t('family_benefit2'),
    t('family_benefit3'),
    t('family_benefit4'),
  ];

  return (
    <section className={styles.section} aria-labelledby="family-parents-title">
      <div className={styles.layout}>
        <motion.div
          className={styles.imageWrap}
          initial={{ opacity: 0, scale: 1.02 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/images/family-parents.png"
            alt={t('family_image_alt')}
            fill
            sizes="(max-width: 760px) 100vw, 50vw"
            className={styles.image}
          />
          <span className={styles.imageWash} aria-hidden="true" />
        </motion.div>

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, delay: 0.1 }}
        >
          <span className={styles.eyebrow}>{t('family_eyebrow')}</span>
          <h2 className={styles.title} id="family-parents-title">{t('family_title')}</h2>
          <p className={styles.lead}>{t('family_lead')}</p>
          <p className={styles.description}>{t('family_description')}</p>

          <ul className={styles.benefits}>
            {benefits.map((benefit) => (
              <li className={styles.benefit} key={benefit}>
                <span className={styles.check}><Check size={14} strokeWidth={3} /></span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default FamilyParents;
