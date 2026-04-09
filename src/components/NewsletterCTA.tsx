export function NewsletterCTA() {
  return (
    <section className="bg-dark-bg py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Get the newsletter
        </h2>
        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
          One implementation insight per week. No hype, no theory — just what
          actually works when you ship AI in real organizations.
        </p>
        <a
          href="https://newsletter.theimplementationlane.com/subscribe"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary hover:bg-primary-light text-white font-semibold px-8 py-3 rounded-lg transition-colors glow-primary"
        >
          Subscribe to The Implementation Lane
        </a>
      </div>
    </section>
  );
}
