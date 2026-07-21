"use client";

import React, { useState } from "react";
import { Sparkles, ArrowRight, Mail, CheckCircle2, Globe, Share2, MessageSquare } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { AccredianLogo } from "../ui/logo";

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes("@")) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid business email address.",
        type: "error",
      });
      return;
    }

    toast({
      title: "Subscribed to L&D Briefing!",
      description: "You'll receive our monthly enterprise AI & tech talent reports.",
      type: "success",
    });

    setNewsletterEmail("");
  };

  const footerNav = {
    platform: [
      { label: "Track Record", href: "#track-record" },
      { label: "Corporate Clients", href: "#clients" },
      { label: "Accredian Edge", href: "#enterprise-edge" },
      { label: "CAT Framework", href: "#cat-framework" },
    ],
    solutions: [
      { label: "Gen-AI Mastery", href: "#domain-expertise" },
      { label: "Product & Innovation", href: "#domain-expertise" },
      { label: "Tech & Data Stack", href: "#domain-expertise" },
      { label: "Executive Acceleration", href: "#courses" },
    ],
    resources: [
      { label: "Course Directory", href: "#courses" },
      { label: "Training Methodology", href: "#process" },
      { label: "Client Case Studies", href: "#testimonials" },
      { label: "Enterprise FAQs", href: "#faq" },
    ],
  };

  const scrollTo = (id: string) => {
    const elem = document.querySelector(id);
    if (elem) elem.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 dark:bg-zinc-950 text-slate-400 text-sm border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Newsletter */}
          <div className="lg:col-span-4 space-y-6">
            <AccredianLogo size="md" />

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              The premier enterprise workforce transformation platform. Architected for Fortune 500 organizations and tech powerhouses worldwide.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2 max-w-sm">
              <label className="text-xs font-semibold uppercase text-slate-300">
                Subscribe to Executive L&D Insights
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors shrink-0 cursor-pointer"
                >
                  Join
                </button>
              </div>
            </form>
          </div>

          {/* Nav Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
                Platform
              </h4>
              <ul className="space-y-2.5 text-xs">
                {footerNav.platform.map((item, i) => (
                  <li key={i}>
                    <button
                      onClick={() => scrollTo(item.href)}
                      className="hover:text-blue-400 transition-colors cursor-pointer"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
                Enterprise Domains
              </h4>
              <ul className="space-y-2.5 text-xs">
                {footerNav.solutions.map((item, i) => (
                  <li key={i}>
                    <button
                      onClick={() => scrollTo(item.href)}
                      className="hover:text-blue-400 transition-colors cursor-pointer"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
                Resources & FAQs
              </h4>
              <ul className="space-y-2.5 text-xs">
                {footerNav.resources.map((item, i) => (
                  <li key={i}>
                    <button
                      onClick={() => scrollTo(item.href)}
                      className="hover:text-blue-400 transition-colors cursor-pointer"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & System Pill */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-slate-300 font-medium">All Learning Services Operational</span>
          </div>

          <div>
            &copy; {new Date().getFullYear()} Accredian Enterprise (FullStack Education Pvt Ltd). All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Global Presence">
              <Globe className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Share">
              <Share2 className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Community">
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
