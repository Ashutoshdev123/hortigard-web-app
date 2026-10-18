import React from 'react';

const steps = [
  {
    title: 'Tell us about your garden',
    description: 'Share your space, plants and sector on WhatsApp, or book a free expert visit.',
  },
  {
    title: 'Get a personalised care plan',
    description: 'We recommend the plan that fits your plants and your budget.',
  },
  {
    title: 'Relax while we care for your plants',
    description: 'Our trained mali visits on schedule and looks after the rest.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="how-it-works-section">
      <div className="how-it-works-inner">
        <header className="how-it-works-heading">
          <h2>How it works</h2>
          <p>Getting started takes three simple steps.</p>
        </header>

        <ol className="how-it-works-grid">
          {steps.map((step, index) => (
            <li key={step.title} className="how-it-works-card">
              <span className="how-it-works-number">{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
