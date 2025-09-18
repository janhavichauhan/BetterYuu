import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../style/components/JourneySection.scss';

const JourneySection = () => {
  const [current, setCurrent] = useState(0);
  const steps = [
    {
      title: 'Sign Up',
      description: 'Create your profile and set your growth focus.',
      points: ['1-minute onboarding', 'Choose focus areas', 'Personalized tips']
    },
    {
      title: 'Daily Check-in',
      description: 'Answer simple prompts to reflect and track mood.',
      points: ['Guided prompts', 'Mood slider', 'Streak tracking']
    },
    {
      title: 'Smart Insights',
      description: 'Get trends and patterns from your reflections.',
      points: ['Trend charts', 'Keyword themes', 'Weekly summary']
    },
    {
      title: 'Action Plans',
      description: 'Turn insights into small, meaningful actions.',
      points: ['Small tasks', 'Gentle reminders', 'Progress nudges']
    },
    {
      title: 'Celebrate Wins',
      description: 'Review progress and celebrate your growth.',
      points: ['Milestone badges', 'Share highlights', 'Look-back recaps']
    },
  ];

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent(prev => (prev + 1) % 5);
    }, 4200);
    return () => clearInterval(id);
  }, []);

  // Horizontal marquee loop for mini cards
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const horizontalLoop = (items, config = {}) => {
      items = gsap.utils.toArray(items);
      const tl = gsap.timeline({
        repeat: config.repeat,
        paused: config.paused,
        defaults: { ease: 'none' },
        onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100)
      });
      const length = items.length;
      if (!length) return tl;
      const startX = items[0].offsetLeft;
      const times = [];
      const widths = [];
      const xPercents = [];
      let curIndex = 0;
      const pixelsPerSecond = (config.speed || 1) * 100;
      const snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1);
      let totalWidth, curX, distanceToStart, distanceToLoop, item, i;
      gsap.set(items, {
        xPercent: (i, el) => {
          const w = (widths[i] = parseFloat(gsap.getProperty(el, 'width', 'px')));
          xPercents[i] = snap(
            (parseFloat(gsap.getProperty(el, 'x', 'px')) / w) * 100 + gsap.getProperty(el, 'xPercent')
          );
          return xPercents[i];
        }
      });
      gsap.set(items, { x: 0 });
      totalWidth =
        items[length - 1].offsetLeft +
        (xPercents[length - 1] / 100) * widths[length - 1] -
        startX +
        items[length - 1].offsetWidth * gsap.getProperty(items[length - 1], 'scaleX') +
        (parseFloat(config.paddingRight) || 0);
      for (i = 0; i < length; i++) {
        item = items[i];
        curX = (xPercents[i] / 100) * widths[i];
        distanceToStart = item.offsetLeft + curX - startX;
        distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, 'scaleX');
        tl.to(
          item,
          { xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100), duration: distanceToLoop / pixelsPerSecond },
          0
        )
          .fromTo(
            item,
            { xPercent: snap(((curX - distanceToLoop + totalWidth) / widths[i]) * 100) },
            {
              xPercent: xPercents[i],
              duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
              immediateRender: false
            },
            distanceToLoop / pixelsPerSecond
          )
          .add('label' + i, distanceToStart / pixelsPerSecond);
        times[i] = distanceToStart / pixelsPerSecond;
      }
      function toIndex(index, vars) {
        vars = vars || {};
        Math.abs(index - curIndex) > length / 2 && (index += index > curIndex ? -length : length);
        const newIndex = gsap.utils.wrap(0, length, index);
        let time = times[newIndex];
        if ((time > tl.time()) !== index > curIndex) {
          vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
          time += tl.duration() * (index > curIndex ? 1 : -1);
        }
        curIndex = newIndex;
        vars.overwrite = true;
        return tl.tweenTo(time, vars);
      }
      tl.next = vars => toIndex(curIndex + 1, vars);
      tl.previous = vars => toIndex(curIndex - 1, vars);
      tl.current = () => curIndex;
      tl.toIndex = (index, vars) => toIndex(index, vars);
      tl.times = times;
      tl.progress(1, true).progress(0, true);
      if (config.reversed) {
        tl.vars.onReverseComplete();
        tl.reverse();
      }
      return tl;
    };

    const items = gsap.utils.toArray('.journey-marquee .rail .mini-card');
    if (!items.length) return;
    const loop = horizontalLoop(items, { repeat: 1, paused: true });

    const st = ScrollTrigger.create({
      trigger: '.journey-marquee',
      start: 'top bottom',
      end: '+=150%',
      scrub: 0.6,
      animation: loop
    });

    return () => {
      st && st.kill();
    };
  }, []);

  const getPosClass = (index) => {
    if (index === current) return 'pos-center';
    if (index === (current + 1) % 5) return 'pos-right';
    if (index === (current + 2) % 5) return 'pos-far-right';
    if (index === (current + 4) % 5) return 'pos-left';
    return 'pos-far-left';
  };

  return (
    <section className="journey-section">
      <div className="journey-container">
        <h2 className="journey-title">Journey To The Better You Made Simple!</h2>
        <p className="journey-subtitle">
          No clutter. No confusion. Just 5 simple steps to begin your journey of growth and reflection.
        </p>

        <div className="journey-stage">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`journey-card ${getPosClass(i)} ${i === current ? 'journey-card--primary' : ''}`}
            >
              <div className="journey-card-inner">
                {i === current ? (
                  <>
                    <div className="journey-step-index">{String(i + 1).padStart(2, '0')}</div>
                    <h3 className="journey-primary-title">{step.title}</h3>
                    <p className="journey-primary-desc">{step.description}</p>
                    <ul className="journey-primary-list">
                      {step.points?.map((pt, idx) => (
                        <li key={`pt-${i}-${idx}`}>{pt}</li>
                      ))}
                    </ul>
                    <button type="button" className="journey-primary-cta">Learn more</button>
                  </>
                ) : (
                  <>
                    <div className="journey-step-index">{String(i + 1).padStart(2, '0')}</div>
                    <h3 className="journey-step-title">{step.title}</h3>
                    <p className="journey-step-desc">{step.description}</p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>  
    </section>
  );
};

export default JourneySection;


