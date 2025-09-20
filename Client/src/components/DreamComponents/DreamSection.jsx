import styles from '../../style/components/DreamComponents/DreamSection.module.scss';

// Example dreams with cover images (these can be generated or fetched based on dream type)
const dreams = [
  {
    date: '2025-09-14',
    title: 'Flying Over Mountains',
    description: 'I soared above snow-capped peaks, feeling total freedom and peace.',
    type: 'Lucid Dream',
    cover: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80'
  },
  {
    date: '2025-09-16',
    title: 'Talking Animals',
    description: 'A wise old owl gave advice for my exams.',
    type: 'Advice Dream',
    cover: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80'
  }
];

export default function DreamsSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Your Dreams</h2>
      <div className={styles.grid}>
        {dreams.map((dream, i) => (
          <div className={styles.card} key={i} style={{'--index': i}}>
            <div className={styles.cover}>
              <img src={dream.cover} alt={dream.title + " cover"} style={{ width: '100%', borderRadius: '1rem', objectFit: 'cover', maxHeight: '160px' }} />
            </div>
            <div className={styles.date}>{dream.date}</div>
            <h3>{dream.title}</h3>
            <p>{dream.description}</p>
            <span className={styles.type}>{dream.type}</span>
          </div>
        ))}
      </div>
    </section>
  );
}