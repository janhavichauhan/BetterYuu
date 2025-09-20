import styles from '../../style/components/DreamComponents/Navbar.module.scss';
export default function Navbar() {
  return (
    <header className={styles.navbar}>

      <div className={styles.navRight}>
        <div className={styles.notifyDot}>
          <i className="fa-regular fa-bell"></i>
        </div>

        <div className={styles.profileIcon} title="Profile">
          <i className="fa-regular fa-user"></i>
        </div>
      </div>
    </header>
  );
}
