import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('Terima kasih! Pesanmu sudah terkirim.');
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Contact</h2>
        <p className="mt-2 text-gray-600">Mari berdiskusi tentang ide atau kolaborasi.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2 text-gray-700">
            <Mail className="h-5 w-5" /> <span>Email langsung: zero@example.com</span>
          </div>
          <p className="text-gray-600">Prefer chat? Kirimkan pesan melalui form di samping. Balasan cepat di jam kerja.</p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-gray-700">Nama</label>
              <input required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none ring-indigo-200 focus:ring" placeholder="Nama kamu" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input type="email" required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none ring-indigo-200 focus:ring" placeholder="email@domain.com" />
            </div>
          </div>
          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">Pesan</label>
            <textarea required rows={5} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none ring-indigo-200 focus:ring" placeholder="Tulis pesanmu" />
          </div>
          <button type="submit" className="mt-4 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 font-medium text-white shadow-lg shadow-indigo-600/30 transition hover:-translate-y-0.5 hover:bg-indigo-700">
            <Send className="h-4 w-4" /> Kirim
          </button>
          {status && <p className="mt-3 text-sm text-green-700">{status}</p>}
        </form>
      </div>
    </section>
  );
}
