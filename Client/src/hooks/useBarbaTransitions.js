import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import barba from '@barba/core';
import { gsap } from 'gsap';

/**
 * Custom hook to integrate Barba.js with React Router
 * This ensures that Barba.js transitions work properly with React Router navigation
 */
const useBarbaTransitions = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => { 
    // Prevent Barba from handling initial page load
    let isInitialPageLoad = true;
    // Make sure Barba is initialized only once
    if (!barba.initialized) {
      // Initialize Barba with React Router integration
      barba.init({
        preventRunning: true,
        transitions: [
        {
          name: 'default-transition',
          leave(data) {
            return gsap.to(data.current.container, {
              opacity: 0,
              y: -50,
              duration: 0.5,
              ease: 'power2.inOut'
            });
          },
          enter(data) {
            return gsap.from(data.next.container, {
              opacity: 0,
              y: 50,
              duration: 0.5,
              ease: 'power2.inOut',
              onComplete: () => {
                window.scrollTo(0, 0);
              }
            });
          }
        },
        // Home page transition
        {
          name: 'home-transition',
          to: { namespace: ['home'] },
          leave(data) {
            return gsap.to(data.current.container, {
              opacity: 0,
              scale: 0.9,
              duration: 0.5,
              ease: 'power2.inOut'
            });
          },
          enter(data) {
            return gsap.from(data.next.container, {
              opacity: 0,
              scale: 1.1,
              duration: 0.5,
              ease: 'power2.inOut'
            });
          }
        },
        // Dream page transition
        {
          name: 'dream-transition',
          to: { namespace: ['dream'] },
          leave(data) {
            return gsap.to(data.current.container, {
              opacity: 0,
              x: -100,
              duration: 0.5,
              ease: 'power2.inOut'
            });
          },
          enter(data) {
            return gsap.from(data.next.container, {
              opacity: 0,
              x: 100,
              duration: 0.5,
              ease: 'power2.inOut'
            });
          }
        }
      ],
        views: [],
        debug: false,
      });

    // Override Barba's default behavior to work with React Router
    barba.hooks.before(() => {
      if (isInitialPageLoad) {
        isInitialPageLoad = false;
        return;
      }
    });

    // Handle link clicks to use React Router navigation
    barba.hooks.after(({ next }) => {
      const path = next.url.path;
      if (path && path !== location.pathname) {
        navigate(path);
      }
    });

    // Cleanup function
    return () => {
      barba.destroy();
    };
  }
},
  [navigate, location]);
};

export default useBarbaTransitions;