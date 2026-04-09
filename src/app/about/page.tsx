import type { Metadata } from "next";
import { NewsletterCTA } from "@/components/NewsletterCTA";

export const metadata: Metadata = {
  title: "About — The Implementation Lane",
  description:
    "Amanda Crawford — AI Implementation Specialist. Built production AI systems from a healthcare billing desk with no dev background and no funding.",
};

const certifications = [
  "AI Fluency",
  "Claude 101",
  "Cowork",
  "Claude Code in Action",
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Amanda
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            The portfolio is the credential.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
            <p>
              I started in tech support. Spent four years running operations for
              a Microsoft partner team — managing workflows, building processes,
              solving the problems that live in the gap between &quot;the tool
              exists&quot; and &quot;the team actually uses it.&quot;
            </p>

            <p>Then I got laid off in 2023.</p>

            <p>
              Instead of looking backward, I decided to build the skills that
              actually matter. Not the ones that look good on a resume — the
              ones that produce results you can point to.
            </p>

            <p>
              I built a{" "}
              <span className="text-foreground font-medium">
                production SaaS product in 10 days
              </span>
              . A{" "}
              <span className="text-foreground font-medium">
                custom MCP server in an afternoon
              </span>
              . A{" "}
              <span className="text-foreground font-medium">
                six-agent autonomous system
              </span>{" "}
              with persistent context and self-correcting loops. Full-stack AI
              implementation — from prompt engineering to payment processing to
              production deployment.
            </p>

            <p>
              No CS degree. No funding. No team. Built between calls at a
              healthcare billing desk.
            </p>

            <p>
              That&apos;s not a limitation — it&apos;s the point. If I can build
              production AI systems in 10-minute windows with no engineering
              background, imagine what&apos;s possible when your team has
              dedicated time, existing infrastructure, and someone who&apos;s
              already done it showing them how.
            </p>

            <p>
              I don&apos;t sell AI hype. I don&apos;t talk about
              &quot;transformative potential.&quot; I build the workflows, ship
              the systems, and make the implementation stick. That&apos;s lane
              two. That&apos;s where I work.
            </p>
          </div>

          {/* Certifications */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <h2 className="text-xl font-bold text-foreground mb-6">
              Anthropic Certifications
            </h2>
            <div className="flex flex-wrap gap-3">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="bg-primary/10 text-primary font-medium text-sm px-4 py-2 rounded-lg"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <NewsletterCTA />
    </>
  );
}
