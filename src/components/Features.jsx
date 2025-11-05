import { Star, Shield, Zap, Cloud } from 'lucide-react';

const features = [
  {
    icon: Star,
    title: 'Beautiful by default',
    desc: 'Clean, modern design with thoughtful typography and spacing that looks great on any device.',
  },
  {
    icon: Shield,
    title: 'Secure & reliable',
    desc: 'Best practices baked in so your site feels fast, safe, and dependable.',
  },
  {
    icon: Zap,
    title: 'Fast performance',
    desc: 'Blazing-fast load times powered by a modern frontend stack.',
  },
  {
    icon: Cloud,
    title: 'Deploy anywhere',
    desc: 'Export and host wherever you like. You’re in control — with zero lock-in.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Everything you need</h2>
          <p className="mt-3 text-slate-600">Focused, practical features to get your site live quickly — for free.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-slate-200 p-6 bg-slate-50">
              <div className="h-10 w-10 rounded-lg bg-indigo-600/10 text-indigo-700 flex items-center justify-center mb-4">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-slate-900 text-lg">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
