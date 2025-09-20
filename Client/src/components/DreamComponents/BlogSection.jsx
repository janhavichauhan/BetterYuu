// BlogsSection.jsx
import styles from '../../style/components/DreamComponents/BlogSection.module.scss';

const blogs = [
  {
    date: '2025-09-15',
    title: 'How Dreams Reflect Your Mind',
    excerpt: 'Explore how dreams can reveal your hopes, fears, and creativity, and how to use dream journaling to your advantage.',
    author: 'Dr. Soma Analyst',
    image: 'https://picsum.photos/seed/dream1/600/360'
  },
  {
    date: '2025-09-08',
    title: 'Most Common Dreams and Meanings',
    excerpt: 'Decoding the top symbols: falling, flying, being chased, and what they might mean for you.',
    author: 'Janhavi',
    image: 'https://picsum.photos/seed/dream2/600/360'
  },
  {
    date: '2025-09-01',
    title: 'Lucid Dreaming: A Starter Guide',
    excerpt: 'Practical steps to recognize dreams and steer the storyline while you sleep.',
    author: 'Team BetterYou',
    image: 'https://picsum.photos/seed/dream3/600/360'
  }
];

export default function BlogsSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Latest from the blog</h2>
      <p className={styles.subheading}>Hand‑picked stories, guides and insights from the dream journal.</p>
      <div className={styles.list}>
        {blogs.map((b, i) => (
          <article className={styles.item} key={i} style={{'--index': i}} 
                   data-aos="fade-up" data-aos-delay={i * 100}>
            <a className={styles.thumbnail} href="/blogs">
              <img src={b.image} alt={b.title} loading="lazy" />
            </a>
            <div className={styles.content}>
              <div className={styles.metaRow}>
                <span className={styles.author}>{b.author}</span>
                <span className={styles.dot}>·</span>
                <span className={styles.date}>{b.date}</span>
              </div>
              <a className={styles.titleLink} href="/blogs"><h3>{b.title}</h3></a>
              <p className={styles.excerpt}>{b.excerpt}</p>
              <div className={styles.bottomRow}>
                <a className={styles.readBtn} href="/blogs">Read more</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
