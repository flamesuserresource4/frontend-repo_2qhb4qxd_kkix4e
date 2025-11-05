import { Rocket, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-blue-50" />
      <div className="relative max-w-6xl mx-auto px-4 py-20 sm:py-28 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-200 bg-white/70 text-indigo-700 text-sm mb-6">
          <Star className="h-4 w-4" />
          100% free — no credit card required
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900">
          Remeni: Build and launch without paying a cent
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
          Create, deploy, and share your app website with a beautiful design and powerful features — completely free.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            id="get-started"
            href="#pricing"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-indigo-600 text-white font-medium shadow-sm hover:bg-indigo-700 transition"
          >
            <Rocket className="h-5 w-5" />
            Get started free
          </a>
          <a
            href="#features"
            className="inline-flex px-6 py-3 rounded-md border border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
          >
            See features
          </a>
        </div>
      </div>
    </section>
  );
}
