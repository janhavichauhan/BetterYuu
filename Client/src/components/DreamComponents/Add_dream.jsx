import React, { useState } from 'react';
import styles from '../../style/components/DreamComponents/AddDreams.module.scss';
// Remove the import of StarBackground since we're copying its CSS
// import StarBackground from './StarBackground';

export default function AddDreams() {
  const [dreamText, setDreamText] = useState('');

  const handleInputChange = (event) => {
    setDreamText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Dream to be saved:', dreamText);
    setDreamText('');
  };

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>Add a New Dream ✍️</h2>
        <p className={styles.subtitle}>
          Record your dreams as soon as you wake up to capture all the details.
        </p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <textarea
            value={dreamText}
            onChange={handleInputChange}
            placeholder="Describe your dream here..."
            className={styles.textarea}
            rows="10"
          />
          <button type="submit" className={styles.button}>
            Save Dream
          </button>
        </form>
      </div>
    </div>
  );
}