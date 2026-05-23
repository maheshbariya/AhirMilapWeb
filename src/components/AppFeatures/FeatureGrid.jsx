"use client";

import Image from 'next/image';
import { Briefcase, MessageCircle, ShieldCheck, UserCheck, ArrowRight } from 'lucide-react';
import styles from './FeatureGrid.module.scss';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

const FeatureGrid = () => {
  const { t } = useLanguage();

  const features = [
    {
      id: 1,
      title: t('feature1_title'),
      description: t('feature1_desc'),
      icon: <Briefcase size={24} className={styles.iconSVG} />,
    },
    {
      id: 2,
      title: t('feature2_title'),
      description: t('feature2_desc'),
      icon: <MessageCircle size={24} className={styles.iconSVG} />,
    },
    {
      id: 3,
      title: t('feature3_title'),
      description: t('feature3_desc'),
      icon: <ShieldCheck size={24} className={styles.iconSVG} />,
    },
    {
      id: 4,
      title: t('feature4_title'),
      description: t('feature4_desc'),
      icon: <UserCheck size={24} className={styles.iconSVG} />,
    },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.layout}>
          <motion.div 
            className={styles.contentSide}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.title}>{t('feature_title')}</h2>
            <p className={styles.description}>
              {t('feature_desc')}
            </p>

            <div className={styles.grid}>
              {features.map((feature, index) => (
                <motion.div 
                  key={feature.id} 
                  className={styles.card}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                >
                  <div className={styles.iconBox}>
                    {feature.icon}
                  </div>
                  <h3 className={styles.cardTitle}>{feature.title}</h3>
                  <p className={styles.cardDesc}>{feature.description}</p>
                  <a href="#" className={styles.learnMore}>
                    {t('learn_more')} <ArrowRight size={16} />
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className={styles.imageSide}
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className={styles.phoneWrapper}>
              <Image
                src="/images/chat.png"
                alt="AhirMilap App Features"
                width={340}
                height={680}
                className={styles.phoneImg}
              />
              <motion.div 
                className={styles.floatingBadge}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <MessageCircle size={28} />
                <span>Instant Chat</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
