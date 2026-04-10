import type { Metadata } from "next";
import { NewsletterCTA } from "@/components/NewsletterCTA";

export const metadata: Metadata = {
  title: "Portfolio — The Implementation Lane",
  description:
    "Production AI systems built from scratch: SaaS products, MCP servers, autonomous agent systems, and operations programs.",
};

const projects = [
  {
    title: "Content Loop",
    category: "Product",
    oneLiner:
      "AI-powered content repurposing engine for podcasters.",
    description:
      "Upload an episode URL, get five social posts, an SEO blog, and show notes — done for you, without touching a dashboard. Built concept-to-production in ten days. Full funnel: Stripe checkout, free trial lifecycle, email capture, engagement tracking, recovery sequences.",
    tags: ["SaaS", "Prompt Engineering", "Go-to-Market"],
    link: "https://contentloopos.polsia.app",
  },
  {
    title: "Custom MCP Server",
    category: "Engineering",
    oneLiner:
      "Live sports odds API connected to Claude Cowork via MCP protocol.",
    description:
      "Read the-odds-api.com V4 documentation. Scaffolded a TypeScript MCP server with six tools. Connected live to Claude Cowork pulling odds from 9+ US bookmakers across 92 sports. Built in a single afternoon between calls at work. No developer background.",
    tags: ["TypeScript", "MCP Protocol", "API Integration"],
    link: "https://github.com/axc9000/odds-api-mcp-server",
  },
  {
    title: "Life Coach OS",
    category: "Systems",
    oneLiner:
      "Six-agent autonomous system spanning Notion and Claude.",
    description:
      "Persistent context, MCP integrations connecting to Gmail, Google Calendar, Slack, and Notion. Self-improving loop across six life domains. Selected for Agent Madness competition (1 of 64 entries, advanced to Round 3).",
    tags: ["Agentic Workflows", "Context Engineering", "MCP Integrations"],
  },
  {
    title: "Nesting Program",
    category: "Operations",
    oneLiner:
      "Structured onboarding system for a Microsoft partner team.",
    description:
      "New hires at a Microsoft partner were dropped into teams after training with no structure. Built the nesting program: day-by-day onboarding guide, structured team rotation, 90-day support framework. Cut first-90-day turnover. Classic ops problem, solved by building the system everyone assumed already existed.",
    tags: ["Process Design", "Change Management", "Retention"],
  },
];

export default function Portfolio() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Portfolio
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Production systems, not prototypes. Every project here shipped and
            works.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-50 rounded-xl p-8 border border-gray-100 card-hover"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                <h2 className="text-xl font-bold text-foreground">
                  {project.title}
                </h2>
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  {project.category}
                </span>
              </div>
              <p className="text-foreground font-medium mb-3">
                {project.oneLiner}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                {project.description}
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-dark-bg/5 text-gray-500 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto text-sm text-primary hover:text-primary-light font-medium transition-colors"
                  >
                    View project &rarr;
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <NewsletterCTA />
    </>
  );
}
