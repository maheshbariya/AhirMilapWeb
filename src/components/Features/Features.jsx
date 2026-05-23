import { Users, Shield, CheckCircle, Sparkles, Heart, Lock } from 'lucide-react';
import styles from './Features.module.scss';

const features = [
  {
    title: 'Community Focused',
    description: 'Built exclusively for the Ahir community — a dedicated space where your identity and heritage are understood.',
    icon: <Users size={20} />
  },
  {
    title: 'Safe & Secure',
    description: 'Your privacy is our first commitment. Industry-standard security protects every profile and interaction.',
    icon: <Shield size={20} />
  },
  {
    title: 'Verified Profiles',
    description: 'Trust-first approach: every profile goes through a verification process so you meet genuine people.',
    icon: <CheckCircle size={20} />
  },
  {
    title: 'Modern Matchmaking',
    description: 'Smart technology meets timeless tradition. Thoughtful algorithms that respect cultural values.',
    icon: <Sparkles size={20} />
  },
  {
    title: 'Cultural Values',
    description: 'We celebrate Ahir traditions and ensure that culture remains at the heart of every connection made.',
    icon: <Heart size={20} />
  },
  {
    title: 'Privacy First',
    description: "Control your own story. Granular privacy settings so you share only what you're comfortable sharing.",
    icon: <Lock size={20} />
  }
];

const Features = () => {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.subtitle}>OUR PROMISE</span>
          <h2 className={styles.title}>Why Choose AhirMilap?</h2>
          <p className={styles.description}>
            Every feature is built around what matters most — genuine, trusted connections rooted in community values.
          </p>
        </div>
        
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                <div className={styles.icon}>{feature.icon}</div>
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
