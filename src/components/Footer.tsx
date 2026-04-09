import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-dark-bg text-gray-400 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Newsletter CTA */}
        <div className="text-center mb-12 pb-12 border-b border-white/10">
          <h3 className="text-xl font-bold text-white mb-2">
            Get the newsletter
          </h3>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
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

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Pages</h4>
            <div className="space-y-2">
              <Link
                href="/"
                className="block text-sm hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                href="/consulting"
                className="block text-sm hover:text-white transition-colors"
              >
                Consulting
              </Link>
              <Link
                href="/about"
                className="block text-sm hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="/portfolio"
                className="block text-sm hover:text-white transition-colors"
              >
                Portfolio
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Connect</h4>
            <div className="space-y-2">
              <a
                href="https://linkedin.com/in/amandacrawfordops"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="mailto:amanda@theimplementationlane.com"
                className="block text-sm hover:text-white transition-colors"
              >
                Email
              </a>
              <a
                href="https://newsletter.theimplementationlane.com/subscribe"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm hover:text-white transition-colors"
              >
                Newsletter
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500">
          &copy; 2026 The Implementation Lane. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
