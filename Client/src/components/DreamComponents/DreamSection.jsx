// DreamsSection.jsx
import styles from '../../style/components/DreamComponents/DreamSection.module.scss';

const dreams = [
  {
    date: '2025-09-14',
    title: 'Flying Over Mountains',
    description: 'I soared above snow-capped peaks, feeling total freedom and peace.',
    type: 'Lucid Dream'
  },
  {
    date: '2025-09-16',
    title: 'Talking Animals',
    description: 'A wise old owl gave advice for my exams.',
    type: 'Advice Dream'
  }
];

export default function DreamsSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Your Dreams</h2>
      <div className={styles.grid}>
        {dreams.map((dream, i) => (
          <div className={styles.card} key={i} style={{'--index': i}}>
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
