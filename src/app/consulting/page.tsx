import type { Metadata } from "next";
import { NewsletterCTA } from "@/components/NewsletterCTA";

export const metadata: Metadata = {
  title: "Consulting — The Implementation Lane",
  description:
    "AI implementation consulting: audits, implementation sprints, and advisory retainers for organizations making AI work.",
};

const services = [
  {
    title: "AI Implementation Audit",
    tagline:
      "Find out where AI can actually save your team time — and where it's just noise.",
    description:
      "Assessment of your org's AI readiness, data environment, workflow gaps, vendor evaluation, and staff adoption barriers. You get a written report with prioritized recommendations — not a slide deck full of buzzwords.",
  },
  {
    title: "Implementation Sprint",
    tagline: "We build it with you.",
    description:
      "Hands-on, 2–4 week engagement where I work alongside your team to implement AI workflows in your actual environment. Real tools, real data, real workflows — shipped and working before I leave.",
  },
  {
    title: "Advisory Retainer",
    tagline: "Ongoing support after the initial build.",
    description:
      "Monthly check-ins, workflow optimization, new use case identification, and team coaching. Because implementation isn't a one-time event — it's an ongoing practice.",
  },
];

const steps = [
  {
    num: "01",
    title: "Book a discovery call",
    description: "30 minutes to understand your situation and goals.",
  },
  {
    num: "02",
    title: "We scope the engagement",
    description: "Clear deliverables, timeline, and expectations.",
  },
  {
    num: "03",
    title: "Implementation begins",
    description: "Hands-on work that ships real results.",
  },
];

const BOOKING_URL =
  "https://outlook.office.com/bookwithme/user/e4a7ac9b17104e1f888198601857643b@theimplementationlane.com?anonymous&ep=plink";

export default function Consulting() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI implementation consulting
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            For organizations that have bought the tools but need help making
            them work. No models to build — just workflows to ship and teams to
            bring along.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-gray-50 rounded-xl p-8 card-hover border border-gray-100"
              >
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-primary font-medium text-sm mb-4">
                  {service.tagline}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="bg-dark-bg py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Who this is for
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              PMs, ops leads, team leads, and department heads at organizations
              that have bought AI tools but aren&apos;t seeing results.
            </p>
            <p>
              Mid-market companies, 50–500 employees. Healthcare, professional
              services, operations-heavy industries.
            </p>
            <p>
              You don&apos;t need someone to build you a model. You need someone
              who knows how to make the tools you already have actually work in
              your environment, with your team, on your timeline.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12 text-center">
            How it works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="text-center">
                <div className="text-4xl font-bold text-primary/30 mb-3">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="bg-dark-bg py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to make AI work?
          </h2>
          <p className="text-gray-400 mb-8">
            Book a free discovery call. 30 minutes, no pressure, no pitch deck.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent hover:bg-accent-light text-dark-bg font-bold px-10 py-4 rounded-lg transition-colors text-lg glow-accent"
          >
            Book a Discovery Call
          </a>
        </div>
      </section>

      <NewsletterCTA />
    </>
  );
}
