import { ExternalLink } from 'lucide-react';

const demoProjects = [
  {
    title: 'Interactive 3D Hero',
    desc: 'Eksperimen UI dengan 3D Spline dan animasi halus.',
    link: 'https://spline.design',
    tag: 'UI/UX',
  },
  {
    title: 'Realtime Chat',
    desc: 'Aplikasi chat minimalis dengan websockets dan tema modern.',
    link: '#',
    tag: 'Fullstack',
  },
  {
    title: 'Analytics Dashboard',
    desc: 'Dashboard performa dengan grafik responsif dan dark mode.',
    link: '#',
    tag: 'Frontend',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Project</h2>
          <p className="mt-2 text-gray-600">Beberapa karya pilihan dari Zero.</p>
        </div>
        <a href="#contact" className="hidden rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 md:block">Butuh kolaborasi?</a>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {demoProjects.map((p) => (
          <a key={p.title} href={p.link} target={p.link.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="mb-4 flex items-center justify-between">
              <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">{p.tag}</span>
              <ExternalLink className="h-4 w-4 text-gray-400 transition group-hover:text-gray-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
