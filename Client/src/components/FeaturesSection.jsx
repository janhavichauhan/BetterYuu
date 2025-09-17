import React from 'react';
import '../style/components/FeaturesSection.scss';

const features = [
  {
    icon: '🧭',
    title: 'Smart Roadmaps',
    description: 'Auto-generate sprint-ready plans with AI.',
    bullets: ['AI backlog grooming', 'Capacity-aware planning', 'Scope risk alerts'],
    tags: ['Docs', 'Demo', 'Pricing'],
  },
  {
    icon: '📊',
    title: 'Team Insights',
    description: 'See workload, velocity, and blockers at a glance.',
    bullets: ['Cycle/lead time', 'WIP limits', 'On-call load'],
    tags: ['Reports', 'Dashboards', 'Setup'],
  },
  {
    icon: '🎯',
    title: 'Focus Mode',
    description: 'Reduce noise with priority-first work queues.',
    bullets: ['Priority queues', 'Meeting guardrails', 'Deep-work slots'],
    tags: ['Guide', 'Shortcuts', 'FAQ'],
  },
  {
    icon: '📈',
    title: 'Goal Tracking',
    description: 'Link daily tasks to quarterly outcomes.',
    bullets: ['OKRs ↔ tasks', 'Outcome rollups', 'Progress nudges'],
    tags: ['OKR Setup', 'Examples', 'Templates'],
  },
  {
    icon: '🔗',
    title: 'Docs Sync',
    description: 'Keep specs and tasks in perfect alignment.',
    bullets: ['Two-way links', 'Change summaries', 'Review gates'],
    tags: ['Spec Style', 'Playbook', 'API'],
  },
  {
    icon: '⚡',
    title: '1-click Reviews',
    description: 'Frictionless PR reviews with smart summaries.',
    bullets: ['Diff summaries', 'Risk hotspots', 'Auto-checklists'],
    tags: ['PR Policy', 'Examples', 'Security'],
  },
];

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        <div className="section-divider"></div>
        <h2 className="features-headline">Features That Power Your Growth</h2>

        <div className="marquee">
          <div className="marquee__track">
            {[...features, ...features].map((feature, index) => (
              <div className="feature-card" key={`feature-${index}`}>
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
