export default function Footer() {
  return (
    <footer className="py-10 border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
        <p>© {new Date().getFullYear()} Remeni. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#features" className="hover:text-slate-900">Features</a>
          <a href="#pricing" className="hover:text-slate-900">Pricing</a>
          <a href="#faq" className="hover:text-slate-900">FAQ</a>
        </div>
      </div>
    </footer>
  );
}
