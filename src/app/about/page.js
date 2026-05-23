"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Heart, 
  ShieldCheck, 
  Award, 
  GraduationCap, 
  Users, 
  Sliders, 
  Lock, 
  Sparkles, 
  PhoneCall, 
  Check, 
  ChevronRight,
  Shield,
  Briefcase
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import styles from './AboutPage.module.scss';

export default function AboutPage() {
  const { t } = useLanguage();

  // Animation configurations for direct element spreading {...fadeInUp}
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  // Structured variants for Stagger child animation
  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <main className={styles.aboutPage}>
      
      {/* 1. HERO SECTION */}
      <section className={styles.heroSection}>
        <div className="container">
          
          {/* Breadcrumbs */}
          <div className={styles.breadcrumbs}>
            <Link href="/">{t('about_breadcrumb_home')}</Link>
            <span className={styles.separator}><ChevronRight size={14} /></span>
            <span className={styles.current}>{t('about_breadcrumb_about')}</span>
          </div>

          <div className={styles.heroGrid}>
            <motion.div 
              className={styles.heroContent}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className={styles.heroTitle}>
                {t('about_hero_title')}
              </h1>
              <p className={styles.heroSubtitle}>
                {t('about_hero_subtitle')}
              </p>
            </motion.div>

            <motion.div 
              className={styles.heroImageContainer}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <div className={styles.heroImageWrapper}>
                <div className={styles.goldRing}></div>
                <Image 
                  src="/images/hero-shadi.png" 
                  alt="Ahir Matrimony Couple" 
                  width={400} 
                  height={420} 
                  priority
                  className={styles.heroImage} 
                />
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 2. OUR STORY SECTION */}
      <section className={styles.storySection}>
        <div className="container">
          <div className={styles.storyGrid}>
            
            <motion.div 
              className={styles.storyImageWrapper}
              {...fadeInUp}
            >
              <div className={styles.imageCard1}>
                <Image 
                  src="/images/about-1.png" 
                  alt="Ahir Community Gathering" 
                  width={500} 
                  height={460}
                  className={styles.heroImage}
                />
              </div>
              <div className={styles.imageBadge}>
                <Heart className="text-white" size={24} fill="#D4AF37" stroke="#D4AF37" />
                <div className={styles.badgeText}>
                  <span className={styles.badgeTitle}>Est. 2026</span>
                  <span className={styles.badgeSubtitle}>Trust & Heritage</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className={styles.storyContent}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <span className={styles.sectionLabel}>{t('nav_about')}</span>
              <h2 className={styles.sectionTitle}>{t('about_story_title')}</h2>
              <p className={styles.storyText}>
                {t('about_story_content')}
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. MISSION SECTION */}
      <section className={styles.missionSection}>
        <div className="container">
          
          <motion.div 
            className={styles.centerHeader}
            {...fadeInUp}
          >
            <span className={styles.sectionLabel}>OUR FOCUS</span>
            <h2 className={styles.sectionTitle}>{t('about_mission_title')}</h2>
          </motion.div>

          <motion.div 
            className={styles.missionGrid}
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Card 1 */}
            <motion.div className={styles.missionCard} variants={cardVariants}>
              <div className={styles.iconWrapper}>
                <Heart size={28} />
              </div>
              <h3 className={styles.missionCardTitle}>{t('about_mission_point1_title')}</h3>
              <p className={styles.missionText}>{t('about_mission_point1_desc')}</p>
            </motion.div>

            {/* Card 2 */}
            <motion.div className={styles.missionCard} variants={cardVariants}>
              <div className={styles.iconWrapper}>
                <ShieldCheck size={28} />
              </div>
              <h3 className={styles.missionCardTitle}>{t('about_mission_point2_title')}</h3>
              <p className={styles.missionText}>{t('about_mission_point2_desc')}</p>
            </motion.div>

            {/* Card 3 */}
            <motion.div className={styles.missionCard} variants={cardVariants}>
              <div className={styles.iconWrapper}>
                <Award size={28} />
              </div>
              <h3 className={styles.missionCardTitle}>{t('about_mission_point3_title')}</h3>
              <p className={styles.missionText}>{t('about_mission_point3_desc')}</p>
            </motion.div>

            {/* Card 4 */}
            <motion.div className={styles.missionCard} variants={cardVariants}>
              <div className={styles.iconWrapper}>
                <GraduationCap size={28} />
              </div>
              <h3 className={styles.missionCardTitle}>{t('about_mission_point4_title')}</h3>
              <p className={styles.missionText}>{t('about_mission_point4_desc')}</p>
            </motion.div>

            {/* Card 5 */}
            <motion.div className={styles.missionCard} variants={cardVariants}>
              <div className={styles.iconWrapper}>
                <Users size={28} />
              </div>
              <h3 className={styles.missionCardTitle}>{t('about_mission_point5_title')}</h3>
              <p className={styles.missionText}>{t('about_mission_point5_desc')}</p>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* 4. PREMIUM PROFILES SECTION */}
      <section className={styles.profilesSection}>
        <div className="container">
          <div className={styles.profilesGrid}>
            
            <motion.div 
              className={styles.profilesContent}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <span className={styles.sectionLabel}>ELITE PROFILES</span>
              <h2 className={styles.sectionTitle}>{t('about_profiles_title')}</h2>
              <p className={styles.description}>
                {t('about_profiles_content')}
              </p>

              <div className={styles.statsGrid}>
                {/* Stat 1 */}
                <div className={styles.statCard}>
                  <span className={styles.statNumber}>{t('about_stat_verified_val')}</span>
                  <span className={styles.statLabel}>{t('about_stat_verified_lbl')}</span>
                </div>
                {/* Stat 2 */}
                <div className={styles.statCard}>
                  <span className={styles.statNumber}>{t('about_stat_families_val')}</span>
                  <span className={styles.statLabel}>{t('about_stat_families_lbl')}</span>
                </div>
                {/* Stat 3 */}
                <div className={styles.statCard}>
                  <span className={styles.statNumber}>{t('about_stat_secure_val')}</span>
                  <span className={styles.statLabel}>{t('about_stat_secure_lbl')}</span>
                </div>
                {/* Stat 4 */}
                <div className={styles.statCard}>
                  <span className={styles.statNumber}>{t('about_stat_community_val')}</span>
                  <span className={styles.statLabel}>{t('about_stat_community_lbl')}</span>
                </div>
              </div>
            </motion.div>

            {/* Visual profiles showcase with blurred premium cards */}
            <motion.div 
              className={styles.profilesVisual}
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className={styles.visualBg}></div>
              
              {/* Profile Card 1 - Doctor */}
              <motion.div className={styles.profileBlurCard} variants={cardVariants}>
                <div className={styles.avatarPlaceholder}>
                  <span>D</span>
                  <div className={styles.badge}><Check size={12} strokeWidth={3} /></div>
                </div>
                <h4 className={styles.cardTitle}>Dr. Aarti Ahir</h4>
                <span className={styles.cardSubtitle}>M.B.B.S, M.D. Doctor</span>
                <div className={styles.detailsMock}>
                  <div className={styles.mockLine}></div>
                  <div className={styles.mockLine}></div>
                </div>
              </motion.div>

              {/* Profile Card 2 - Engineer */}
              <motion.div className={styles.profileBlurCard} variants={cardVariants}>
                <div className={styles.avatarPlaceholder}>
                  <span>R</span>
                  <div className={styles.badge}><Check size={12} strokeWidth={3} /></div>
                </div>
                <h4 className={styles.cardTitle}>Rohit Ahir</h4>
                <span className={styles.cardSubtitle}>Software Engineer, MNC</span>
                <div className={styles.detailsMock}>
                  <div className={styles.mockLine}></div>
                  <div className={styles.mockLine}></div>
                </div>
              </motion.div>

              {/* Profile Card 3 - Govt Employee */}
              <motion.div className={styles.profileBlurCard} variants={cardVariants}>
                <div className={styles.avatarPlaceholder}>
                  <span>P</span>
                  <div className={styles.badge}><Check size={12} strokeWidth={3} /></div>
                </div>
                <h4 className={styles.cardTitle}>Pooja Ahir</h4>
                <span className={styles.cardSubtitle}>Govt. Officer, Class I</span>
                <div className={styles.detailsMock}>
                  <div className={styles.mockLine}></div>
                  <div className={styles.mockLine}></div>
                </div>
              </motion.div>

              {/* Profile Card 4 - Business Owner */}
              <motion.div className={styles.profileBlurCard} variants={cardVariants}>
                <div className={styles.avatarPlaceholder}>
                  <span>K</span>
                  <div className={styles.badge}><Check size={12} strokeWidth={3} /></div>
                </div>
                <h4 className={styles.cardTitle}>Krunal Ahir</h4>
                <span className={styles.cardSubtitle}>Business Owner, Rajkot</span>
                <div className={styles.detailsMock}>
                  <div className={styles.mockLine}></div>
                  <div className={styles.mockLine}></div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE SECTION */}
      <section className={styles.chooseSection}>
        <div className="container">
          
          <motion.div 
            className={styles.centerHeader}
            {...fadeInUp}
          >
            <span className={styles.sectionLabel}>THE DIFFERENCE</span>
            <h2 className={styles.sectionTitle}>{t('about_choose_title')}</h2>
          </motion.div>

          <motion.div 
            className={styles.chooseGrid}
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Feature 1 */}
            <motion.div className={styles.featureCard} variants={cardVariants}>
              <span className={styles.cardNumber}>01</span>
              <div className={styles.featureIcon}>
                <Users size={26} />
              </div>
              <h3 className={styles.featureTitle}>{t('about_choose_f1_title')}</h3>
              <p className={styles.featureDesc}>{t('about_choose_f1_desc')}</p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div className={styles.featureCard} variants={cardVariants}>
              <span className={styles.cardNumber}>02</span>
              <div className={styles.featureIcon}>
                <Sliders size={26} />
              </div>
              <h3 className={styles.featureTitle}>{t('about_choose_f2_title')}</h3>
              <p className={styles.featureDesc}>{t('about_choose_f2_desc')}</p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div className={styles.featureCard} variants={cardVariants}>
              <span className={styles.cardNumber}>03</span>
              <div className={styles.featureIcon}>
                <Shield size={26} />
              </div>
              <h3 className={styles.featureTitle}>{t('about_choose_f3_title')}</h3>
              <p className={styles.featureDesc}>{t('about_choose_f3_desc')}</p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div className={styles.featureCard} variants={cardVariants}>
              <span className={styles.cardNumber}>04</span>
              <div className={styles.featureIcon}>
                <Lock size={26} />
              </div>
              <h3 className={styles.featureTitle}>{t('about_choose_f4_title')}</h3>
              <p className={styles.featureDesc}>{t('about_choose_f4_desc')}</p>
            </motion.div>

            {/* Feature 5 */}
            <motion.div className={styles.featureCard} variants={cardVariants}>
              <span className={styles.cardNumber}>05</span>
              <div className={styles.featureIcon}>
                <Sparkles size={26} />
              </div>
              <h3 className={styles.featureTitle}>{t('about_choose_f5_title')}</h3>
              <p className={styles.featureDesc}>{t('about_choose_f5_desc')}</p>
            </motion.div>

            {/* Feature 6 */}
            <motion.div className={styles.featureCard} variants={cardVariants}>
              <span className={styles.cardNumber}>06</span>
              <div className={styles.featureIcon}>
                <PhoneCall size={26} />
              </div>
              <h3 className={styles.featureTitle}>{t('about_choose_f6_title')}</h3>
              <p className={styles.featureDesc}>{t('about_choose_f6_desc')}</p>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* 6. VISION SECTION */}
      <section className={styles.visionSection}>
        <div className="container">
          <motion.div 
            className={styles.visionContainer}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className={styles.visionLabel}>OUR VISION</span>
            <h2 className={styles.visionTitle}>{t('about_vision_title')}</h2>
            <p className={styles.visionText}>
              {t('about_vision_content')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section className={styles.ctaSection}>
        <div className="container">
          <motion.div 
            className={styles.ctaCard}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className={styles.ctaLabel}>JOIN US TODAY</span>
            <h2 className={styles.ctaTitle}>{t('about_cta_title')}</h2>
            <p className={styles.ctaSubtitle}>
              {t('about_cta_subtitle')}
            </p>

            <div className={styles.ctaButtons}>
              <Link href="/">
                <button className={styles.ctaBtnPrimary}>
                  {t('about_cta_btn1')}
                </button>
              </Link>
              <Link href="/contact">
                <button className={styles.ctaBtnSecondary}>
                  {t('about_cta_btn2')}
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
