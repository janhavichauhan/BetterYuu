import React, { useState, useEffect, useRef } from 'react';
import styles from '../../style/components/HomeComponent/Header.module.scss';
import { gsap } from 'gsap';
import Icon from './icons';

const Header = () => {
    const [isSwitching, setIsSwitching] = useState(false);
    const headerRef = useRef(null);

    // Use GSAP to animate the fade-out effect more smoothly
    useEffect(() => {
        if (isSwitching) {
            gsap.to(headerRef.current, {
                opacity: 0,
                y: -20,
                duration: 0.8,
                ease: 'power2.inOut',
                onComplete: () => {
                    window.location.href = "/dreampage";
                },
            });
        }
    }, [isSwitching]);

    const handleSwitch = () => {
        setIsSwitching(true);
    };

    return (
        <header ref={headerRef} className={styles.header}>
            <div className={styles.headerInfo}>
                <h1 className={styles.headerTitle}>Hi, Janhavi Chauhan 👋</h1>
                <p className={styles.headerSubtitle}>Let's finish your task today!</p>
            </div>
            <div className={styles.headerActions}>
                <button className={styles.headerIconBtn}>
                    <Icon name="bell" size={24} />
                </button>
                <button
                    className={styles.headerSwitchBtn}
                    onClick={handleSwitch}
                >
                    Switch to Unconscious
                </button>
            </div>
        </header>
    );
};

export default Header;