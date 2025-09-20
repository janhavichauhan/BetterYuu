import barba from '@barba/core';
import { gsap } from 'gsap';

// Define animation durations
const animationDuration = 0.5;

// Page transition animations
const pageTransitions = () => {
  // Hide initial page content until Barba is ready
  gsap.set('main', { opacity: 0 });

  // Initialize Barba
  barba.init({
    transitions: [
      {
        name: 'default-transition',
        leave(data) {
          return gsap.to(data.current.container, {
            opacity: 0,
            y: -50,
            duration: animationDuration,
            ease: 'power2.inOut'
          });
        },
        enter(data) {
          return gsap.from(data.next.container, {
            opacity: 0,
            y: 50,
            duration: animationDuration,
            ease: 'power2.inOut',
            onComplete: () => {
              // Scroll to top of page after transition
              window.scrollTo(0, 0);
            }
          });
        }
      },
      // Specific transition for the home page
      {
        name: 'home-transition',
        to: { namespace: ['home'] },
        leave(data) {
          return gsap.to(data.current.container, {
            opacity: 0,
            scale: 0.9,
            duration: animationDuration,
            ease: 'power2.inOut'
          });
        },
        enter(data) {
          return gsap.from(data.next.container, {
            opacity: 0,
            scale: 1.1,
            duration: animationDuration,
            ease: 'power2.inOut'
          });
        }
      },
      // Dream page transition with a different animation
      {
        name: 'dream-transition',
        to: { namespace: ['dream'] },
        leave(data) {
          return gsap.to(data.current.container, {
            opacity: 0,
            x: -100,
            duration: animationDuration,
            ease: 'power2.inOut'
          });
        },
        enter(data) {
          return gsap.from(data.next.container, {
            opacity: 0,
            x: 100,
            duration: animationDuration,
            ease: 'power2.inOut'
          });
        }
      }
    ]
  });

  // Show content after Barba is initialized
  gsap.to('main', { opacity: 1, duration: 0.5 });
};

export default pageTransitions;