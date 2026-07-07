import type { Metadata } from "next";
import { NewsletterCTA } from "@/components/NewsletterCTA";

export const metadata: Metadata = {
  title: "Consulting â€” The Implementation Lane",
  description:
    "The AI Implementation Audit: a two-week diagnostic that tells your team what to implement, in what order, and why. Three actionable fixes in 30 days or you don't pay.",
};

const weeks = [
  {
    title: "Week 1: diagnosis",
    description:
      "An intake form, three to four stakeholder interviews (30 minutes each, async-friendly), and a review of your workflow documentation. At the end of the week you get a Compliance-Decay Scorecard: where your current processes will quietly fall apart under AI, and where they'll hold.",
  },
  {
    title: "Week 2: the plan",
    description:
      "A decision-ready implementation plan and a 90-day roadmap, sequenced and justified. Plus a one-pager written for your boss, because a plan only counts if the person with the budget reads it.",
  },
];

const steps = [
  {
    num: "01",
    title: "Book a discovery call",
    description:
      "30 minutes, no pressure, no pitch deck. If the audit isn't a fit, I'll tell you.",
  },
  {
    num: "02",
    title: "We scope the audit",
    description:
      "A statement of work with the guarantee in writing, tied to your named workflows and tools.",
  },
  {
    num: "03",
    title: "Two weeks later, you have the plan",
    description:
      "Scorecard, implementation plan, 90-day roadmap, and the one-pager for your boss.",
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
            You bought the AI tools. Nobody redesigned the work.
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            The AI Implementation Audit is a two-week diagnostic for teams told
            to &ldquo;figure out AI.&rdquo; I interview your team, map how work
            actually gets done, and tell you exactly what to implement, in what
            order, and why. If it doesn&apos;t hand you three fixes you can act
            on within 30 days, you don&apos;t pay.
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

      {/* The situation */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            The situation you&apos;re in
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Someone above you bought licenses. Someone else forwarded a
              &ldquo;10 AI tools your team should be using&rdquo; listicle. Now
              you&apos;re the one expected to produce an AI strategy, with no
              budget line, no dev team, and a boss who keeps asking &ldquo;where
              are we on AI.&rdquo;
            </p>
            <p>
              Every vendor demo looks great. None of those vendors have seen how
              your work actually happens at 4pm on a Thursday, when the
              documented process and the real process stop resembling each
              other. That gap is where AI rollouts die, and it&apos;s the one
              thing no tool can see from the outside.
            </p>
          </div>
        </div>
      </section>

      {/* What the audit is */}
      <section className="bg-dark-bg py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            What the audit is
          </h2>
          <p className="text-gray-400 mb-10">
            Two weeks. About two hours of your team&apos;s time.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {weeks.map((week) => (
              <div
                key={week.title}
                className="bg-white/5 rounded-xl p-8 border border-white/10"
              >
                <h3 className="text-xl font-bold text-white mb-4">
                  {week.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {week.description}
                </p>
              </div>
            ))}
          </div>
          <p className="text-gray-400 mt-8">
            Every audit includes a 30-day check-in call. And if you book an
            Implementation Sprint within 60 days, the full audit fee credits
            toward it.
          </p>
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Who it&apos;s for
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Ops leads, PMs, team leads, workflow designers. The people told to
              make AI happen without being given anything to make it happen
              with. Thirty days from now you&apos;re the credible AI voice in
              the room, executing a plan you can defend line by line, instead of
              drowning in tool sprawl and option overwhelm.
            </p>
            <p>
              Two honest exclusions: I don&apos;t take healthcare engagements,
              and this isn&apos;t a dev shop. The audit tells you what to build
              and in what order; the Sprint helps your team build the first one.
            </p>
          </div>
        </div>
      </section>

      {/* Objection */}
      <section className="bg-dark-bg py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            &ldquo;Why would I pay for something AI should do for me?&rdquo;
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Fair question. Try it first: ask your favorite model for an AI
              roadmap for your team. You&apos;ll get something plausible and
              generic.
            </p>
            <p>
              Here&apos;s what it can&apos;t do. It can&apos;t interview your
              team. It can&apos;t see the distance between the workflow doc and
              what people actually do under deadline. And it will happily write
              you a confident, wrong roadmap; I keep a public lab notebook of
              implementation failures, and Entry 002 is exactly this. The
              failure modes killing AI rollouts are produced by AI. You
              don&apos;t ask the fox to audit the henhouse.
            </p>
          </div>
        </div>
      </section>

      {/* The math */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            The math behind the scorecard
          </h2>
          <p className="text-gray-600 leading-relaxed">
            A model, not a measurement of your team: assume people follow each
            soft rule in a process about 90% of the time under pressure
            (generous). A process with six such rules runs fully clean roughly
            53% of the time. Thirty rules: about 4%. No single rule is being
            ignored; what collapses is the chance that any one run follows all
            of them. The scorecard finds where your workflows lean on that kind
            of compliance, because those are the exact places AI adoption
            quietly fails.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-dark-bg py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12">
            Pricing
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-1">The Audit</h3>
              <p className="text-accent text-3xl font-bold mb-4">$3,500</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                The two-week diagnostic: Compliance-Decay Scorecard in week 1;
                implementation plan, 90-day roadmap, and boss one-pager in week
                2. About two hours of your team&apos;s time.
              </p>
            </div>
            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-1">
                Audit + Sprint
              </h3>
              <p className="text-accent text-3xl font-bold mb-4">$7,500</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                The audit rolls directly into building your #1 workflow with
                your team (2&ndash;4 weeks). About $9,000 booked separately.
              </p>
            </div>
          </div>
          <div className="bg-accent/10 border border-accent/30 rounded-xl p-8 mb-8">
            <p className="text-white font-bold mb-2">
              Founding rate: $2,500 for the first three audit clients.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              No fake scarcity: you&apos;re early, you take a small risk on me,
              you get the discount and priority scheduling. I get a case study.
              After three, the price is the price.
            </p>
          </div>
          <p className="text-gray-400 text-sm">
            An advisory retainer is available after an engagement, for teams
            that want ongoing help executing the roadmap.
          </p>
        </div>
      </section>

      {/* Guarantee */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            The guarantee
          </h2>
          <p className="text-xl md:text-2xl font-bold text-foreground mb-6">
            At least three actionable fixes within 30 days, or you don&apos;t
            pay.
          </p>
          <p className="text-gray-600 leading-relaxed">
            &ldquo;Actionable&rdquo; is defined in the statement of work, not in
            marketing language: specific to your named workflows and tools, and
            executable by your existing team without new hires or new spend. If
            the audit doesn&apos;t clear that bar, the invoice is void.
          </p>
        </div>
      </section>

      {/* Why me */}
      <section className="bg-dark-bg py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Why me
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              I&apos;ve done this before, at scale, without a budget. I led a
              knowledge-management overhaul at Mural: 14 months, 150+ employees,
              8 departments, $0 spend, 99% adoption. The tools were different;
              the adoption problem was identical.
            </p>
            <p>
              On the AI side: I built and run Content Loop, a production SaaS
              content system that shipped 7 of 7 planned episodes and 41
              published pieces. I&apos;ve shipped a custom MCP server, public on
              GitHub. I hold 4 Anthropic certifications. And I run my own
              business on the same methodology I audit against, documented in a
              22-entry Implementation Lab Notebook you can read in the
              newsletter.
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
            Ready to stop guessing?
          </h2>
          <p className="text-gray-400 mb-8">
            30 minutes, no pressure, no pitch deck. We&apos;ll figure out
            whether the audit fits your situation; if it doesn&apos;t,
            I&apos;ll tell you. Three founding-rate slots exist; when
            they&apos;re gone, they&apos;re gone.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent hover:bg-accent-light text-dark-bg font-bold px-10 py-4 rounded-lg transition-colors text-lg glow-accent"
          >
            Book a Discovery Call
          </a>
          <p className="text-gray-500 text-sm mt-6">
            Prefer email? amanda@theimplementationlane.com &mdash; one sentence
            about your team and what &ldquo;figure out AI&rdquo; looks like from
            your seat.
          </p>
        </div>
      </section>

      <NewsletterCTA />
    </>
  );
}
