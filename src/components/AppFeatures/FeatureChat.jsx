"use client";

import Image from 'next/image';
import { Clock, ShieldCheck, ThumbsUp } from 'lucide-react';
import styles from './FeatureChat.module.scss';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

const FeatureChat = () => {
  const { t } = useLanguage();

  const profiles = [
    {
      id: 1,
      name: 'Priya Solanki',
      role: t('verified_profile'),
      location: 'Junagadh, Gujarat',
      matchPercentage: '98%', 
      image: '/images/about-2.jpg'
    },
    {
      id: 2,
      name: 'Rahul Ram',
      role: t('verified_profile'),
      location: 'Ahmedabad, Gujarat',
      matchPercentage: '95%',
      image: '/images/about-1.png'
    },
    {
      id: 3,
      name: 'Neha Ahir',
      role: t('verified_profile'),
      location: 'Rajkot, Gujarat',
      matchPercentage: '92%',
      image: '/images/hero-shadi.png'
    }
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.layout}>

          <motion.div 
            className={styles.imageSide}
            initial={{ opacity: 0, scale: 0.9, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.phoneWrapper}>
              <Image
                src="/images/phone-3.png"
                alt="AhirMilap Chat Interface"
                width={340}
                height={680}
                className={styles.phoneImg}
              />
            </div>
          </motion.div>

          <motion.div 
            className={styles.contentSide}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className={styles.title}>{t('chat_title')}</h2>
            <p className={styles.description}>
              {t('chat_desc')}
            </p>

            <div className={styles.list}>
              {profiles.map((profile, index) => (
                <motion.div 
                  key={profile.id} 
                  className={styles.card}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.15) }}
                >
                  <div className={styles.avatar}>
                    <Image
                      src={profile.image}
                      alt={profile.name}
                      width={64}
                      height={64}
                      className={styles.avatarImg}
                    />
                  </div>

                  <div className={styles.info}>
                    <div className={styles.nameRow}>
                      <h3 className={styles.name}>{profile.name}</h3>
                      <span className={styles.roleBadge}>
                        <ShieldCheck size={14} /> {profile.role}
                      </span>
                    </div>
                    <p className={styles.location}>{profile.location}</p>
                    <div className={styles.stats}>
                      <span><Clock size={14} /> {t('active_recently')}</span>
                      <span><ThumbsUp size={14} /> {profile.matchPercentage} {t('match')}</span>
                    </div>
                  </div>

                  <div className={styles.action}>
                    <button className={styles.contactBtn}>{t('contact_now')}</button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FeatureChat;
