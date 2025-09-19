import styles from '../../style/components/DreamComponents/Navbar.module.scss';
export default function Navbar() {
  return (
    <header className={styles.navbar}>

      <div className={styles.navRight}>
        <div className={styles.notifyDot}>
          <i className="fa-regular fa-bell"></i>
        </div>
        <button className={styles.modeBtn} title="Toggle theme">
          <i className="fa-solid fa-moon"></i>
        </button>
        <div className={styles.profileIcon} title="Profile">
          <i className="fa-regular fa-user"></i>
        </div>
      </div>
    </header>
  );
}
