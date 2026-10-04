"use client";

import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';
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

          <div className={styles.ctaGroup}>
            <Link href="/register" className={styles.primaryCta}>
              <span>{t('hero_cta_register')}</span>
              <ArrowRight size={18} />
            </Link>
            <a href="#how-it-works" className={styles.secondaryCta}>
              <span>{t('hero_cta_how')}</span>
              <ChevronDown size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

