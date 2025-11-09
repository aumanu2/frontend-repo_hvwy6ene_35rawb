export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Tentang Saya</h2>
        <p className="mt-2 text-gray-600">Kenal lebih dekat dengan Zero.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900">Profil Singkat</h3>
          <p className="mt-3 text-gray-600">
            Halo! Saya <span className="font-semibold">Zero</span>, seorang developer yang senang membangun produk web interaktif dengan
            performa tinggi. Saya fokus pada arsitektur bersih, UX yang menyenangkan, dan detail visual.
          </p>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-gray-600">
            <li>Frontend modern: React, Tailwind, Framer Motion</li>
            <li>Backend API: FastAPI, Node</li>
            <li>Kolaborasi & komunikasi yang efektif</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900">Keahlian</h3>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
            {['React','TailwindCSS','FastAPI','MongoDB','Framer Motion','TypeScript'].map((s) => (
              <span key={s} className="rounded-full border border-gray-200 px-3 py-2 text-gray-700">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
