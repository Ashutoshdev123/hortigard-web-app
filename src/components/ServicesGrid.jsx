import React from 'react';

const projects = [
  { title: 'House balcony and terrace', image: "https://res.cloudinary.com/flbkzhid/image/upload/v1792316890/House_balcony_and_terrace.png" },
  { title: 'Lawn area', image: "https://res.cloudinary.com/flbkzhid/image/upload/v1792317157/Lawn_area.png" },
  { title: 'Corporate office and workspaces', image: "https://res.cloudinary.com/flbkzhid/image/upload/v1792316540/Corporate_office_and_workspaces.png" },
  { title: 'Luxury residences', image: "https://res.cloudinary.com/flbkzhid/image/upload/v1792317656/Luxury_residences.png" },
  { title: 'Educational institutions and public spaces', image: "https://res.cloudinary.com/flbkzhid/image/upload/v1792316892/Educational_institutions_and_public_spaces.png" },
  { title: 'Healthcare and wellness spaces', image: "https://res.cloudinary.com/flbkzhid/image/upload/v1792316891/Healthcare_and_wellness_spaces.png" },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="scroll-mt-28 bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <header className="mb-7 sm:mb-8">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-700">Where we bring spaces to life</span>
          <h2 className="mt-1 font-serif text-3xl font-bold leading-tight text-[#07552e] sm:text-4xl">Our work</h2>
          <p className="mt-2 text-base leading-7 text-slate-600">We care for green spaces of every size and kind.</p>
        </header>

        <div className="grid grid-cols-1 gap-3.5 min-[480px]:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="group relative isolate h-56 overflow-hidden rounded-xl bg-emerald-950 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:h-64">
              <img src={project.image} alt={project.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent transition group-hover:from-black/85" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="max-w-[18rem] text-base font-bold leading-snug text-white drop-shadow sm:text-[17px]">{project.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
