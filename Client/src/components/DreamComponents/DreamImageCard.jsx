// DreamImageCard.jsx
import styles from '../../style/components/DreamComponents/DreamImageCard.module.scss';

export default function DreamImageCard({ title, description, imageUrl }) {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={title} className={styles.image} />
      <div className={styles.content}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}
