import { useState } from 'react';
import styles from '../../style/components/DreamComponents/CreateDreamForm.module.scss';

export default function CreateDreamForm({ onDreamCreated }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);

    // Call your backend Gemini API here (replace with your fetch logic)
    const imageUrl = await generateDreamImage(description);
    onDreamCreated({
      title,
      description,
      imageUrl
    });

    setTitle('');
    setDescription('');
    setIsSubmitting(false);
  }

  // Dummy async function -- replace with your real Gemini API call
  async function generateDreamImage(prompt) {
    // Call the Gemini API, get imageUrl
    // For demo use a placeholder
    return 'https://placekitten.com/400/240';
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3>Add a New Dream</h3>
      <label>
        Title:
        <input
          className={styles.input}
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
      </label>
      <label>
        Dream Description:
        <textarea
          className={styles.textarea}
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
      </label>
      <button className={styles.button} type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Creating...' : 'Create Dream'}
      </button>
    </form>
  );
}
