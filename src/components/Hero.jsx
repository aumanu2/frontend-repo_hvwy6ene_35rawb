import Spline from '@splinetool/react-spline';
import { Rocket, Github, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-indigo-600">Zero — Portfolio</p>
        <h1 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl md:text-6xl">
          Bangun hal menakjubkan
          <span className="block bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-cyan-500 bg-clip-text text-transparent">dengan sentuhan modern & playful</span>
        </h1>
        <p className="mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
          Saya Zero, developer kreatif yang fokus pada pengalaman interaktif, performa, dan desain yang rapi.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-3 text-white shadow-lg shadow-indigo-600/30 transition hover:translate-y-[-2px] hover:bg-indigo-700">
            <Rocket className="h-5 w-5" /> Lihat Project
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-3 text-gray-800 transition hover:border-gray-400 hover:shadow">
            <Mail className="h-5 w-5" /> Kontak Saya
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-3 text-gray-800 transition hover:border-gray-400 hover:shadow">
            <Github className="h-5 w-5" /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
