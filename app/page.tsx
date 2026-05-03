export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          Accessibility-First
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Hear Your Code,{" "}
          <span className="text-[#58a6ff]">Understand Everything</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Code Narrator uses AI to convert code structure, logic flow, and diffs into rich audio descriptions and spatial navigation — built for visually impaired developers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors focus-visible:ring-2 focus-visible:ring-[#58a6ff]"
            aria-label="Start your free trial of Code Narrator"
          >
            Start Free Trial
          </a>
          <a
            href="#faq"
            className="inline-block px-8 py-3 rounded-lg border border-[#30363d] text-[#c9d1d9] font-semibold text-base hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            Learn More
          </a>
        </div>
        <ul className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-[#8b949e]" aria-label="Key features">
          <li className="flex items-center gap-2"><span className="text-[#58a6ff]" aria-hidden="true">&#10003;</span>AI code structure narration</li>
          <li className="flex items-center gap-2"><span className="text-[#58a6ff]" aria-hidden="true">&#10003;</span>Spatial audio navigation</li>
          <li className="flex items-center gap-2"><span className="text-[#58a6ff]" aria-hidden="true">&#10003;</span>GitHub diff descriptions</li>
          <li className="flex items-center gap-2"><span className="text-[#58a6ff]" aria-hidden="true">&#10003;</span>Screen reader optimized</li>
        </ul>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20" aria-labelledby="pricing-heading">
        <h2 id="pricing-heading" className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="rounded-2xl border border-[#58a6ff] bg-[#161b22] p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <p className="text-sm font-semibold text-[#58a6ff] uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-extrabold text-white mb-1">$29</p>
          <p className="text-[#8b949e] text-sm mb-6">per month, cancel anytime</p>
          <ul className="text-left space-y-3 mb-8 text-sm" aria-label="Plan features">
            {[
              "Unlimited code narrations",
              "GitHub repo integration",
              "Spatial audio navigation",
              "Real-time diff descriptions",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5" aria-hidden="true">&#10003;</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold hover:bg-[#79b8ff] transition-colors"
            aria-label="Subscribe to Code Narrator Pro for $29 per month"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24" aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <dl className="space-y-6">
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <dt className="font-semibold text-white mb-2">How does Code Narrator work with my existing tools?</dt>
            <dd className="text-[#8b949e] text-sm leading-relaxed">Connect your GitHub account or upload files directly. Our AI analyzes your code and generates detailed audio descriptions compatible with all major screen readers and assistive technologies.</dd>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <dt className="font-semibold text-white mb-2">What programming languages are supported?</dt>
            <dd className="text-[#8b949e] text-sm leading-relaxed">Code Narrator supports all major languages including JavaScript, TypeScript, Python, Rust, Go, Java, C/C++, and more. The AI understands syntax and semantics across ecosystems.</dd>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <dt className="font-semibold text-white mb-2">Can I cancel my subscription at any time?</dt>
            <dd className="text-[#8b949e] text-sm leading-relaxed">Yes. Cancel anytime from your account dashboard with no penalties or hidden fees. You retain access until the end of your billing period.</dd>
          </div>
        </dl>
      </section>

      <footer className="border-t border-[#21262d] py-8 text-center text-xs text-[#484f58]">
        <p>&copy; {new Date().getFullYear()} Code Narrator. All rights reserved.</p>
      </footer>
    </main>
  );
}
