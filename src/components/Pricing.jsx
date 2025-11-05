import { Check } from 'lucide-react';

const perks = [
  'Unlimited projects',
  'Custom domains',
  'SEO friendly',
  'Analytics ready',
  'Community support',
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Simple, honest pricing</h2>
          <p className="mt-3 text-slate-600">No trials. No hidden fees. Free forever.</p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            <div className="px-6 sm:px-10 py-8">
              <div className="flex items-end gap-2">
                <span className="text-5xl font-extrabold tracking-tight text-slate-900">$0</span>
                <span className="text-slate-600 mb-2">forever</span>
              </div>
              <p className="mt-2 text-slate-600">Everything you need to launch and grow your site.</p>
              <ul className="mt-6 space-y-3">
                {perks.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-slate-700">
                    <span className="h-6 w-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center mt-0.5">
                      <Check className="h-4 w-4" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a
                  href="#get-started"
                  className="w-full inline-flex justify-center px-6 py-3 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700"
                >
                  Start for free
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
