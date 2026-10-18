import React from 'react';

const plans = [
  {
    name: 'Sprout',
    subtitle: 'Starter care',
    priceAmount: '899',
    price: '₹899',
    pots: 'Less than 10',
    visits: '1 per week',
    time: '30–45 mins per visit',
    features: [
      'Watering as per plant needs',
      'Removal of dry leaves and flowers',
      'Cleaning of pots and trays',
      'Basic pest and disease check',
    ],
  },
  {
    name: 'Bloom',
    subtitle: 'Regular care',
    priceAmount: '1,499',
    price: '₹1,499',
    pots: '10–30',
    visits: '1 per week',
    time: '60–75 mins per visit',
    features: [
      'Everything in Sprout',
      'Light pruning and deadheading',
      'Regular plant health monitoring',
      'Nutrients applied when required',
    ],
  },
  {
    name: 'Thrive',
    subtitle: 'Premium care',
    priceAmount: '1,999',
    price: '₹1,999',
    pots: '30–60',
    visits: '1 per week',
    time: '80–95 mins per visit',
    featured: true,
    features: [
      'Everything in Bloom',
      'Detailed plant health assessment',
      'Customised fertiliser management',
      'Pest and disease treatment when required',
      'Monthly plant health report',
    ],
  },
  {
    name: 'Evergreen',
    subtitle: 'Advance care',
    priceAmount: '2,499',
    price: '₹2,499',
    pots: '60–100',
    visits: '1 per week',
    time: '100–120 mins per visit',
    features: [
      'Everything in Thrive',
      'Seasonal pruning and plant shaping',
      'Lawn and hedge maintenance, if applicable',
      'Soil improvement and repotting as agreed',
      'Priority scheduling',
    ],
  },
  {
    name: 'Custom plan',
    subtitle: 'For larger spaces',
    custom: true,
    pots: '100+',
    features: ['Visits, time and services designed around your space'],
  },
];

export default function PricingPlans({ onOpenBooking }) {
  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-inner">
        <header className="pricing-heading">
          <h2>Service plans</h2>
          <p>
            Monthly subscription plans, based on the number of pots in your space.
          </p>
        </header>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`pricing-card${plan.featured ? ' pricing-card-featured' : ''}`}
            >
              <div>
                <h3>{plan.name}</h3>
                <p className="pricing-subtitle">{plan.subtitle}</p>

                {plan.custom ? (
                  <h4 className="pricing-custom-label">Made for you</h4>
                ) : (
                  <p className="pricing-price">
                    <span>₹{plan.priceAmount}</span>
                    <small>/ month</small>
                  </p>
                )}

                <dl className="pricing-meta">
                  <div className="flex gap-2">
                    <dt>Pots</dt>
                    <dd>{plan.pots}</dd>
                  </div>
                  {!plan.custom && <>
                    <div><dt>Visits</dt><dd>{plan.visits}</dd></div>
                    <div><dt>Time</dt><dd>{plan.time}</dd></div>
                  </>}
                </dl>

                <ul className="pricing-features">
                  {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
                </ul>
              </div>

              <button
                type="button"
                onClick={() => onOpenBooking(
                  plan.custom
                    ? 'Hi, I am interested in a custom plan. Please share a quote.'
                    : `Hi, I am interested in the ${plan.name} plan (₹${plan.priceAmount}/month).`
                )}
                className="pricing-button"
              >
                {plan.custom ? 'Get a quote' : `Choose ${plan.name}`}
              </button>
            </article>
          ))}
        </div>

        <p className="pricing-note">
          Plants, fertilisers, chemicals, soil, repotting materials and major maintenance are either included or charged separately, as specified in your plan.
        </p>
      </div>
    </section>
  );
}
