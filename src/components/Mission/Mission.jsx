import styles from './Mission.module.scss';

const Mission = () => {
  return (
    <section className={styles.mission}>
      <div className="container">
        <div className={styles.card}>
          <div className={styles.content}>
            <span className={styles.subtitle}>OUR MISSION</span>
            <h2 className={styles.title}>Honoring Traditions, Empowering Futures</h2>
            <p className={styles.description}>
              We believe that every Ahir deserves a partner who understands their background, shares their dreams, and respects their heritage.
            </p>
            <div className={styles.grid}>
              <div className={styles.item}>
                <h3>Trusted</h3>
                <p>Built with community integrity.</p>
              </div>
              <div className={styles.item}>
                <h3>Secure</h3>
                <p>Top-tier data protection.</p>
              </div>
              <div className={styles.item}>
                <h3>Inclusive</h3>
                <p>For every Ahir family.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
