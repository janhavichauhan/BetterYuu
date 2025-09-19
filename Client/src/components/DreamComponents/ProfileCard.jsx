import styles from '../../style/components/DreamComponents/ProfileCard.module.scss';

export default function ProfileCard() {
  return (
    <aside className={styles.profile}>
      <div className={styles.headerRow}>
        <h4>My Profile</h4>
        <span className={styles.badge}>Pro</span>
      </div>
      <div className={styles.userRow}>
        <img className={styles.avatar} src="https://i.pravatar.cc/140?img=68" alt="User avatar" />
        <div>
          <div className={styles.name}>Janhavi</div>
          <div className={styles.role}>Dreamer</div>
        </div>
      </div>
      <div className={styles.kpis}>
        <div className={styles.kpi}><span>Dreams added</span><strong>42</strong></div>
        <div className={styles.kpi}><span>Your dream analysis</span><strong>18</strong></div>
        <div className={styles.kpi}><span>Your blogs</span><strong>7</strong></div>
      </div>
    </aside>
  );
}


