"use client";

import { CheckCircle, Headphones, Shield, Sparkles } from 'lucide-react';
import styles from './StatsBar.module.scss';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

const StatsBar = () => {
  const { t } = useLanguage();

  const stats = [
    { 
      label: t('stats_lbl1'), 
      sublabel: t('stats_sub1'),
      icon: <CheckCircle size={20} />
    },
    { 
      label: t('stats_lbl2'), 
      sublabel: t('stats_sub2'),
      icon: <Headphones size={20} />
    },
    { 
      label: t('stats_lbl3'), 
      sublabel: t('stats_sub3'),
      icon: <Shield size={20} />
    },
    { 
      label: t('stats_lbl4'), 
      sublabel: t('stats_sub4'),
      icon: <Sparkles size={20} />
    },
  ];

  return (
    <div className={styles.statsBar}>
      <div className="container">
        <div className={styles.grid}>
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className={styles.item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.icon}>{stat.icon}</div>
              <div className={styles.info}>
                <div className={styles.label}>{stat.label}</div>
                <div className={styles.sublabel}>{stat.sublabel}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsBar;
