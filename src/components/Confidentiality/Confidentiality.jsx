"use client";

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, EyeOff, UserCheck } from 'lucide-react';
import styles from './Confidentiality.module.scss';

const Confidentiality = () => {
  const { t } = useLanguage();

  return (
    <section className={styles.section}>
      <div className="container">
        <motion.div 
          className={styles.card}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.contentSide}>
            <span className={styles.badge}>
              <Lock size={16} />
              {t('confidentiality_subtitle')}
            </span>
            <h2 className={styles.heading}>{t('confidentiality_heading')}</h2>
            <p className={styles.text}>
              {t('confidentiality_content')}
            </p>

            <div className={styles.pillars}>
              <div className={styles.pillar}>
                <div className={styles.pillarIcon}>
                  <EyeOff size={22} />
                </div>
                <div>
                  <h4>No Public Profiles</h4>
                  <p>Your details are never listed publicly for open web browsing.</p>
                </div>
              </div>

              <div className={styles.pillar}>
                <div className={styles.pillarIcon}>
                  <UserCheck size={22} />
                </div>
                <div>
                  <h4>Preference Matching</h4>
                  <p>Shared personally only when mutual criteria align.</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.visualSide}>
            <div className={styles.shieldWrapper}>
              <div className={styles.outerGlow}></div>
              <div className={styles.shieldCard}>
                <ShieldCheck size={72} className={styles.shieldIcon} />
                <span className={styles.shieldLabel}>100% Confidential</span>
                <span className={styles.shieldSub}>Handled with Privacy & Care</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Confidentiality;
