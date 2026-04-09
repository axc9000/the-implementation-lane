import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Implementation Lane — AI Implementation Consulting",
  description:
    "The people who make AI actually work. AI implementation consulting for organizations that have bought the tools but need help shipping the workflows.",
  openGraph: {
    title: "The Implementation Lane",
    description:
      "AI implementation consulting — shipping workflows, managing adoption, closing the gap between 'we bought AI' and 'it's working.'",
    url: "https://theimplementationlane.com",
    siteName: "The Implementation Lane",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-foreground">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
