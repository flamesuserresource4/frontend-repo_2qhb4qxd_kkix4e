export default function FAQ() {
  const faqs = [
    {
      q: 'Is Remeni really free?',
      a: 'Yes. You can create, customize, and publish your site without paying anything. No trials, no credit card required.',
    },
    {
      q: 'Can I use my own domain?',
      a: 'Absolutely. Connect a custom domain whenever you are ready, at no cost from us.',
    },
    {
      q: 'Do I need to code?',
      a: 'No. Everything is designed to be simple and approachable. If you know HTML/CSS or React, you can go even further.',
    },
    {
      q: 'Can I export my site?',
      a: 'Yes, you can export and host your site wherever you prefer. There is no vendor lock-in.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Frequently asked questions</h2>
          <p className="mt-3 text-slate-600">Quick answers to common questions.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((item) => (
            <details key={item.q} className="group rounded-lg border border-slate-200 p-5">
              <summary className="cursor-pointer list-none flex items-center justify-between">
                <span className="font-medium text-slate-900">{item.q}</span>
                <span className="text-slate-400 group-open:rotate-180 transition-transform">▾</span>
              </summary>
              <p className="mt-3 text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
