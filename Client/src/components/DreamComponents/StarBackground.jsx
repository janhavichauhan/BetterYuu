import React, { useEffect, useRef } from 'react';
import styles from '../../style/components/DreamComponents/StarBackground.module.scss';

export default function StarBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = () => container.clientWidth || window.innerWidth;
    const height = () => container.clientHeight || window.innerHeight;

    const STAR_COUNT = 26; 
    const MIN_SPEED = 0.08;
    const MAX_SPEED = 0.45;
    const starState = [];

    function createStar() {
      const el = document.createElement('div');
      el.className = styles.star;
      const depth = Math.random(); 
      const size = depth > 1 ? 3 : depth > 1 ? 2 : 1;
      el.style.width = `${size}px`;
      el.style.height = `${size}px`;

      let x = Math.random() * width();
      let y = Math.random() * height();

      const angle = Math.random() * Math.PI * 2;
      let speed = MIN_SPEED + Math.random() * (MAX_SPEED - MIN_SPEED);
      speed *= 0.5 + depth * 1.2;
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed;

      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
      el.style.opacity = `${0.4 + Math.random() * 0.6}`;

      container.appendChild(el);
      return { el, x, y, vx, vy };
    }

    for (let i = 0; i < STAR_COUNT; i++) {
      starState.push(createStar());
    }

    let rafId;
    const animate = () => {
      for (const s of starState) {
        s.x += s.vx;
        s.y += s.vy;

        // wrap around edges
        if (s.x < -10) s.x = width() + 10;
        if (s.x > width() + 10) s.x = -10;
        if (s.y < -10) s.y = height() + 10;
        if (s.y > height() + 10) s.y = -10;

        s.el.style.left = `${s.x}px`;
        s.el.style.top = `${s.y}px`;
      }
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    // Shooting stars
    function spawnShootingStar() {
      const el = document.createElement('div');
      el.className = styles.shootingStar;
      const startX = Math.random() * width() * 0.8; 
      const startY = Math.random() * height() * 0.5; 
      const tx = 400 + Math.random() * 300; 
      const ty = 120 + Math.random() * 160;
      el.style.setProperty('--tx', `${tx}px`);
      el.style.setProperty('--ty', `${ty}px`);
      el.style.left = `${startX}px`;
      el.style.top = `${startY}px`;
      el.style.animationDuration = `${1.2 + Math.random() * 0.8}s`;
      container.appendChild(el);
      el.addEventListener('animationend', () => {
        if (el.parentNode === container) container.removeChild(el);
      });
    }

    function scheduleNextShoot() {
      const delay = 1800 + Math.random() * 4200;
      setTimeout(() => {
        spawnShootingStar();
        scheduleNextShoot();
      }, delay);
    }
    scheduleNextShoot();

    // Clean up
    return () => {
      cancelAnimationFrame(rafId);
      for (const s of starState) {
        if (s.el && s.el.parentNode === container) container.removeChild(s.el);
      }
      // any remaining shooting stars
      container.querySelectorAll(`.${styles.shootingStar}`).forEach((n) => n.parentNode && n.parentNode.removeChild(n));
    };
  }, []);

  return <div ref={containerRef} className={styles.background}></div>;
}
