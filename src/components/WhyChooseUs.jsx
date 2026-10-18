import React from 'react';

const benefits = [
  'Professional and trained mali service',
  '24×7 customer support',
  'Regular visits by horticulturists',
  'Complete plant maintenance',
  'Order plants at your doorstep',
  'Plant health monitoring',
  'Expert guidance for better gardening',
  'One-time setup facilities also provided',
];

const teamWork = [
  { title: 'Field work, planting and plant care', image: "https://res.cloudinary.com/flbkzhid/image/upload/v1792317035/image1.png" },
  { title: 'Our trained mali team', image: "https://res.cloudinary.com/flbkzhid/image/upload/v1792317034/image2.png" },
  { title: 'Garden and hedge maintenance', image: "https://res.cloudinary.com/flbkzhid/image/upload/v1792317035/image3.png" },
  { title: 'Lawn mowing and garden care', image: "https://res.cloudinary.com/flbkzhid/image/upload/v1792317190/image4.png" },
];

function WorkIllustration({ scene }) {
  return (
    <svg className={`team-work-art team-work-art-${scene}`} viewBox="0 0 520 360" role="img" aria-label={`${scene} gardening work illustration`}>
      <defs>
        <linearGradient id={`work-sky-${scene}`} x2="0" y2="1"><stop stopColor="#b9dd9a" /><stop offset="1" stopColor="#315f32" /></linearGradient>
        <linearGradient id={`work-shirt-${scene}`} x2="0" y2="1"><stop stopColor="#087047" /><stop offset="1" stopColor="#043c2a" /></linearGradient>
        <linearGradient id="work-shade" x2="0" y2="1"><stop stopColor="#07180e" stopOpacity="0" /><stop offset="1" stopColor="#07180e" stopOpacity=".9" /></linearGradient>
      </defs>
      <rect width="520" height="360" fill={`url(#work-sky-${scene})`} />
      <path d="M0 220Q125 145 245 224T520 190V360H0Z" fill="#4e8a3e" />
      <path d="M0 286Q140 235 270 282T520 252V360H0Z" fill="#28643a" />
      {[35, 90, 448, 492].map((x, i) => <g key={x} opacity=".9"><path d={`M${x} 256v-92`} stroke="#5b4930" strokeWidth="12" /><circle cx={x} cy={145 + i % 2 * 18} r="54" fill={i % 2 ? '#276d38' : '#398346'} /><circle cx={x - 22} cy="166" r="32" fill="#65a64b" /></g>)}
      <g transform={scene === 'team' ? 'translate(260 30)' : scene === 'pruning' ? 'translate(245 72) rotate(-8)' : 'translate(230 60) rotate(8)'}>
        <path d="M-34 83Q0 53 34 83L54 205H-54Z" fill={`url(#work-shirt-${scene})`} />
        <circle cy="52" r="36" fill="#c8875c" />
        <path d="M-43 47Q-40 5 0 8T43 47Q0 31-43 47Z" fill="#064f35" />
        <path d="M-25 89h50" stroke="#d5e9d8" strokeWidth="4" />
        <path d="M-40 105l-47 84m112-84 42 75" fill="none" stroke="#c8875c" strokeWidth="17" strokeLinecap="round" />
        {scene === 'care' ? <path d="M68 180l70-17" stroke="#d3e8ee" strokeWidth="5" strokeDasharray="4 7" /> : null}
        {scene === 'pruning' ? <path d="M63 182l84 8m-81-9 33-30" stroke="#d6e2d4" strokeWidth="5" /> : null}
        <path d="M-22 218l-9 91m50-91 14 91" stroke="#263f2c" strokeWidth="19" strokeLinecap="round" />
        <path d="M-44 315h31m49 0h30" stroke="#27352a" strokeWidth="12" strokeLinecap="round" />
      </g>
      <rect y="280" width="520" height="80" fill="url(#work-shade)" opacity=".5" />
    </svg>
  );
}

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="why-us-section">
      <div className="why-us-inner">
        <header className="why-us-intro">
          <span className="why-us-eyebrow">Plant care, made easier</span>
          <h2>Why choose Hortigard?</h2>
          <p>
            Hortigard is a professional plant care and gardening service. We believe every plant deserves expert care and every home deserves a beautiful, healthy green space. We make gardening easy, convenient and enjoyable by bringing professional plant care and garden maintenance to your doorstep.
          </p>
        </header>

        <ul className="why-us-benefits" aria-label="Why choose Hortigard">
          {benefits.map((benefit) => (
            <li key={benefit} className="why-us-benefit">{benefit}</li>
          ))}
        </ul>

        <div className="why-us-values">
          <article className="why-us-value">
            <h3>Our mission</h3>
            <p>To make every space greener with expert plant care, affordable gardening and professional service.</p>
          </article>
          <article className="why-us-value">
            <h3>Our promise</h3>
            <p>At Hortigard, we don’t just maintain plants. We help you build a greener, healthier and more beautiful living environment.</p>
          </article>
        </div>

        <section className="team-work-section" aria-labelledby="team-work-title">
          <header className="team-work-heading">
             <h3 id="team-work-title">Our team at work</h3>
            <p>Every Hortigard mali is trained, in uniform and equipped with the right tools for your plants.</p>
           
          </header>
          <div className="team-work-grid">
            {teamWork.map((item) => (
              <article className="team-work-card" key={item.image}>
                <div
                  className="team-work-backdrop"
                  style={{ backgroundImage: `url(${item.image})` }}
                  aria-hidden="true"
                />
                <img src={item.image} alt={item.title} loading="lazy" className="team-work-art team-work-image" />
                <div className="team-work-caption">{item.title}</div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
