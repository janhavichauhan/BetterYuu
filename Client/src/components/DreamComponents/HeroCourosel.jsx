import styles from '../../style/components/DreamComponents/HeroCarousel.module.scss';
import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import ProfileCard from './ProfileCard';
import Blackhole from '../../assets/Blackhole.jpg';

const cards = [
  {
    heading: 'Welcome back Janhavi!!',
    sub: ['Ready to explore your dreams? Reflect, record & grow. Every dream is a journey.'],
    button: { text: 'Add your dream', link: '/add-dream' },
  },
  {
    heading: 'Want to view your dream?',
    sub: ['Your dream archive awaits. Unlock nightly revelations. See patterns emerge.'],
    buttons: [
      { text: 'View your dreams', link: '/your-dreams' },
      { text: 'Watch dream analysis', link: '/analysis' },
    ],
  },
  {
    heading: 'See what other people are dreaming',
    sub: ['Community dreams at a glance. Share, learn, and connect. Find inspiration in the stars.'],
    button: { text: 'To Blogs', link: '/blogs' },
  },
];

export default function HeroCarousel() {
  const [idx, setIdx] = useState(0);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intvl = setInterval(() => setIdx((i) => (i + 1) % cards.length), 5000);
    return () => clearInterval(intvl);
  }, []);

  const card = cards[idx];
  return (
    <>
      <img src={Blackhole} alt="A swirling galaxy or blackhole" className={styles.blackhole} />
      <section className={styles.hero}>
        <div className={styles.leftCol}>
          <div className={styles.card}>
            <h2>{card.heading}</h2>
            {card.sub.map((s, i) => (
              <p key={i}>{s}</p>
            ))}
            {card.button ? (
              <a href={card.button.link} className={styles.cta}>{card.button.text}</a>
            ) : (
              <div className={styles.btnRow}>
                {card.buttons.map((btn, i) => (
                  <a href={btn.link} className={styles.cta} key={i}>{btn.text}</a>
                ))}
              </div>
            )}
          </div>
          <div className={styles.profileBox}>
            <ProfileCard />
          </div>
        </div>

        <div className={styles.rail}>
          <div className={styles.assistantCta}>
            <div>
              <h4>Talk to AI Assistant</h4>
              <p>Get insights and personalized tips from your dreams.</p>
            </div>
            <a className={styles.ctaSecondary} href="/ai-analyzer">Start</a>
          </div>
          <div className={styles.calendar}>
            <Calendar onChange={setDate} value={date} />
          </div>
        </div>
      </section>
    </>
  );
}