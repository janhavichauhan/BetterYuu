import React, { useState, useEffect } from 'react';
import styles from '../../style/components/DreamComponents/ViewDreams.module.scss';
import StarBackground from './StarBackground'; // Import the StarBackground component
import { format } from 'date-fns';

// Mock data remains the same
const mockDreams = [
  {
    id: 'd1',
    title: 'Flying over a City',
    date: new Date('2025-09-18T10:00:00Z'),
    text: 'I was soaring high above a bustling city, the wind rushing past me. I could see all the tiny cars and people below, and it felt incredibly peaceful and freeing.'
  },
  {
    id: 'd2',
    title: 'The Talking Forest',
    date: new Date('2025-09-15T03:30:00Z'),
    text: 'I found myself in a dark, enchanted forest where the trees whispered secrets to me. I wasn\'t scared, but curious about what they had to say. The air smelled of damp earth and magic.'
  },
  {
    id: 'd3',
    title: 'Lost in a Library',
    date: new Date('2025-09-12T01:15:00Z'),
    text: 'I was in a giant, endless library. The books didn\'t have words, but pictures that moved like movies. I couldn\'t find a way out, but I didn\'t want to. It was a fascinating maze.'
  },
  {
    id: 'd4',
    title: 'Chasing a Cat',
    date: new Date('2025-09-10T23:45:00Z'),
    text: 'I was in a park trying to catch a fluffy white cat. It kept running just out of my reach, and when I got close, it would turn into a pile of confetti and disappear. It was a frustrating but funny dream.'
  }
];

export default function ViewDreams() {
  const [dreams, setDreams] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect to simulate fetching dreams when the component loads
  useEffect(() => {
    // Simulate a network delay
    setTimeout(() => {
      setDreams(mockDreams);
      setIsLoading(false);
    }, 1000);
  }, []); // Empty dependency array ensures this runs only once

  // The loading state should also have the background
  if (isLoading) {
    return (
      <div className={styles.container}>
        <StarBackground />
        <div className={styles.loading}>Loading your dreams...</div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* Place the StarBackground component here */}
      <StarBackground />

      {/* Your dream content wrapped to sit on top of the background */}
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>Your Dream Journal 📓</h2>
        <p className={styles.subtitle}>
          A collection of all the dreams you've saved.
        </p>
        
        {dreams.length === 0 ? (
          <div className={styles.noDreams}>
            <p>You haven't added any dreams yet.</p>
            <a href="/add-dream">Start your dream journal now!</a>
          </div>
        ) : (
          <div className={styles.dreamList}>
            {dreams.map(dream => (
              <div key={dream.id} className={styles.dreamCard}>
                <h3 className={styles.dreamTitle}>{dream.title}</h3>
                <p className={styles.dreamDate}>
                  {format(dream.date, 'MMMM d, yyyy')}
                </p>
                <p className={styles.dreamText}>{dream.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}