import React, { useEffect, useRef } from 'react';
import '../style/components/FeaturesSection.scss';

const features = [
  {
    icon: '🧭',
    title: 'Smart Roadmaps',
    description: 'Generate sprint-ready plans in seconds with assistive AI.',
    bullets: ['AI backlog grooming', 'Capacity-aware planning', 'Scope risk alerts'],
    tags: ['Docs', 'Demo', 'Pricing'],
  },
  {
    icon: '📊',
    title: 'Team Insights',
    description: 'Live visibility into workload, velocity, and blockers.',
    bullets: ['Cycle/lead time', 'WIP limits', 'On-call load'],
    tags: ['Reports', 'Dashboards', 'Setup'],
  },
  {
    icon: '🎯',
    title: 'Focus Mode',
    description: 'Cut noise with priority-first work queues.',
    bullets: ['Priority queues', 'Meeting guardrails', 'Deep-work slots'],
    tags: ['Guide', 'Shortcuts', 'FAQ'],
  },
  {
    icon: '📈',
    title: 'Goal Tracking',
    description: 'Connect daily tasks to quarterly outcomes.',
    bullets: ['OKRs ↔ tasks', 'Outcome rollups', 'Progress nudges'],
    tags: ['OKR Setup', 'Examples', 'Templates'],
  },
  {
    icon: '🔗',
    title: 'Docs Sync',
    description: 'Keep specs and tasks always in sync.',
    bullets: ['Two-way links', 'Change summaries', 'Review gates'],
    tags: ['Spec Style', 'Playbook', 'API'],
  },
  {
    icon: '⚡',
    title: '1‑click Reviews',
    description: 'Frictionless PR checks with smart summaries.',
    bullets: ['Diff summaries', 'Risk hotspots', 'Auto-checklists'],
    tags: ['PR Policy', 'Examples', 'Security'],
  },
];

const FeaturesSection = () => {
  const headlineRef = useRef(null);

  useEffect(() => {
    const element = headlineRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.add('is-visible');
            observer.unobserve(element);
          }
        });
      },
      { root: null, threshold: 0.35 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="features-section">
      <div className="features-container">
        <div className="section-divider"></div>
        <h2 className="features-headline" ref={headlineRef}>Features That Power Your Growth</h2>

        <div className="marquee">
          <div className="marquee__track">
            {[...features, ...features].map((feature, index) => (
              <div className="feature-card" key={`feature-${index}`} aria-label={feature.title}>
                <div className="feature-card__icon" aria-hidden="true">{feature.icon}</div>
                <h3 className="feature-card__title">{feature.title}</h3>
                <p className="feature-card__desc">{feature.description}</p>
                <ul className="feature-card__list">
                  {feature.bullets.map((item, i) => (
                    <li key={`bullet-${index}-${i}`}>{item}</li>
                  ))}
                </ul>
                <div className="feature-card__tags">
                  {feature.tags.map((tag, i) => (
                    <span className="tag" key={`tag-${index}-${i}`}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
