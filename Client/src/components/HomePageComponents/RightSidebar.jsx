import React from "react";
// import "../../style/components/HomeComponent/RightSidebar.module.scss";
import styles from "../../style/components/HomeComponent/RightSidebar.module.scss";
import Icon from "./icons";
const RightSidebar = ({ scheduleItems, onAddTask, activeDay, onDayClick }) => {
    const batchmates = [
        { name: 'Rinsen Jey', role: 'UI/UX Designer', avatar: 'https://i.pravatar.cc/40?img=7' },
        { name: 'Kim jeeyong', role: 'UI/UX Designer', avatar: 'https://i.pravatar.cc/40?img=8' },
        { name: 'Kim Jeeyong', role: 'UI/UX Designer', avatar: 'https://i.pravatar.cc/40?img=9' },
    ];

    return (
        <aside className={styles.rightSidebar}>
            {/* User Profile Card */}
            <div className={styles.profileCard}>
                <img src="https://i.pravatar.cc/48?img=11" alt="Kim Namjoon" className={styles.profileCardAvatar} />
                <h3 className={styles.profileCardName}>Kim Namjoon</h3>
                <p className={styles.profileCardRole}>UI/UX Designer</p>
            </div>
            
            {/* Schedule Card */}
            <div className={styles.scheduleCard}>
                <div className={styles.scheduleCardHeader}>
                    <h4>March</h4>
                    <button className={styles.scheduleCardAddBtn} onClick={onAddTask}>
                        <Icon name="plus" size={16} /> Add Task
                    </button>
                </div>
                <div className={styles.scheduleCardCalendar}>
                    {['mon', 'tue', 'wed', 'thu', 'fri', 'sat'].map((day, i) => (
                        <div key={day} className={`${styles.day} ${activeDay === i ? styles.active : ''}`} onClick={() => onDayClick(i)}>
                            <span>{day.charAt(0).toUpperCase() + day.slice(1, 3)}</span>
                            <span>{6 + i}</span>
                        </div>
                    ))}
                </div>
                <div className={styles.scheduleCardTimeline}>
                    {['09:00', '10:00', '11:00', '12:00', '01:00'].map(time => (
                        <div key={time} className={styles.timeMarker}><span>{time}</span></div>
                    ))}
                    {scheduleItems.map((item, index) => (
                        <div key={index} className={`${styles.scheduleItem} ${styles[item.color]}`} style={{ top: item.top, height: item.height }}>
                            <div className={styles.scheduleItemDetails}>
                                <p>{item.title}</p>
                                <small>{item.time}</small>
                            </div>
                            <button><Icon name="ellipsis" size={20} /></button>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Batchmates Card */}
            <div className={styles.batchmatesCard}>
                <h3 className={styles.cardTitle}>Batchmates</h3>
                <ul>
                    {batchmates.map((mate, index) => (
                        <li key={index}>
                            <img src={mate.avatar} alt={mate.name} />
                            <div>
                                <p>{mate.name}</p>
                                <small>{mate.role}</small>
                            </div>
                        </li>
                    ))}
                </ul>
                <button className={styles.batchmatesCardSeeAll}>See All</button>
            </div>
        </aside>
    );
};
export default RightSidebar;