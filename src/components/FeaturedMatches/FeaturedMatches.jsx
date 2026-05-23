import styles from './FeaturedMatches.module.scss';

const matches = [
  { id: 1, name: 'Priya S.', age: 27, location: 'Mumbai, Maharashtra', role: 'Marketing Manager', verified: true },
  { id: 2, name: 'Sneha K.', age: 25, location: 'Pune, Maharashtra', role: 'Software Engineer', verified: true },
  { id: 3, name: 'Rahul M.', age: 29, location: 'Delhi, NCR', role: 'Business Analyst', verified: true },
  { id: 4, name: 'Anjali R.', age: 26, location: 'Ahmedabad, Gujarat', role: 'Doctor', verified: true },
];

const FeaturedMatches = () => {
  return (
    <section className={styles.matches}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Featured Matches</h2>
          <p className={styles.description}>
            Discover your soulmate from our curated list of profiles.
          </p>
        </div>
        
        <div className={styles.grid}>
          {matches.map((match) => (
            <div key={match.id} className={styles.card}>
              <div className={styles.imagePlaceholder}>
                {match.verified && <span className={styles.badge}>Verified</span>}
              </div>
              <div className={styles.info}>
                <div className={styles.nameRow}>
                  <h3>{match.name}</h3>
                  <span className={styles.age}>{match.age}</span>
                </div>
                <div className={styles.details}>
                  <p>{match.location}</p>
                  <p>{match.role}</p>
                </div>
                <div className={styles.actions}>
                  <button className={styles.viewBtn}>View</button>
                  <button className={styles.interestBtn}>Interests</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.footer}>
          <button className={styles.viewAllBtn}>View All</button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMatches;
