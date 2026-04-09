import Link from "next/link";
import { NewsletterCTA } from "@/components/NewsletterCTA";

const stats = [
  { value: "12/12", label: "ClawCamp projects shipped" },
  { value: "10 days", label: "Concept to production SaaS" },
  { value: "6", label: "Autonomous agents deployed" },
  { value: "4+", label: "Years ops leadership" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            The people who make AI{" "}
            <span className="gradient-text">actually work.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            I&apos;m the bridge between what AI can do and how real
            organizations use it. Not the person building the models — the
            person who ships the workflows, manages the context, and makes the
            whole thing stick.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/portfolio"
              className="bg-primary hover:bg-primary-light text-white font-semibold px-8 py-3 rounded-lg transition-colors glow-primary"
            >
              See my work
            </Link>
            <a
              href="https://newsletter.theimplementationlane.com/subscribe"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-accent/40 text-accent hover:bg-accent/10 font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Subscribe to the newsletter
            </a>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-dark-card border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* The Lane Two Problem */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            The Lane Two Problem
          </h2>
          <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
            <p>
              The AI market has two lanes. Lane one is building AI — the models,
              the research, the platforms. It&apos;s well-funded, well-staffed,
              and well-covered.
            </p>
            <p>
              Lane two is making AI work — the implementation. Shipping the
              workflows. Managing the adoption. Closing the gap between
              &quot;we bought AI&quot; and &quot;it&apos;s actually working.&quot;
            </p>
            <p>
              Most organizations are stuck in lane two with no help. The PM told
              to &quot;figure out AI&quot; with no budget. The ops lead watching
              their team resist every new tool. The department head who bought
              three AI products and can&apos;t show ROI on any of them.
            </p>
            <p className="text-foreground font-medium">
              That&apos;s where I work. I&apos;m a lane two specialist.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <NewsletterCTA />
    </>
  );
}
