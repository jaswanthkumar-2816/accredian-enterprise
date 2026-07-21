"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Command, Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { ThemeToggle } from "../ui/theme-toggle";
import { Button } from "../ui/button";
import { AccredianLogo } from "../ui/logo";

interface NavbarProps {
  onOpenCommand: () => void;
}

export function Navbar({ onOpenCommand }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Track Record", href: "#track-record", id: "track-record" },
    { label: "Clients", href: "#clients", id: "clients" },
    { label: "Accredian Edge", href: "#enterprise-edge", id: "enterprise-edge" },
    { label: "CAT Framework", href: "#cat-framework", id: "cat-framework" },
    { label: "Domain Expertise", href: "#domain-expertise", id: "domain-expertise" },
    { label: "Courses", href: "#courses", id: "courses" },
    { label: "Process", href: "#process", id: "process" },
    { label: "FAQs", href: "#faq", id: "faq" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = navLinks.map((link) => link.id);
      for (const sectionId of sections.reverse()) {
        const elem = document.getElementById(sectionId);
        if (elem) {
          const rect = elem.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-slate-200/80 dark:border-white/[0.08] shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left Brand Logo & Left-Aligned Navigation */}
        <div className="flex items-center gap-6 xl:gap-8">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="group cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1 shrink-0"
          >
            <AccredianLogo size="md" />
          </a>

          {/* Desktop Nav Links (Left-Aligned) */}
          <nav className="hidden xl:flex items-center gap-1 bg-slate-100/60 dark:bg-zinc-900/60 backdrop-blur-sm p-1.5 rounded-full border border-slate-200/60 dark:border-zinc-800">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-colors cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400 font-bold"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBg"
                      className="absolute inset-0 bg-white dark:bg-zinc-800 rounded-full shadow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Right Action Trigger Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Cmd+K Trigger */}
          <button
            onClick={onOpenCommand}
            aria-label="Open Command Palette (Ctrl+K)"
            className="flex items-center gap-2 px-3 py-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700/80 rounded-xl border border-slate-200 dark:border-zinc-700 transition-colors cursor-pointer"
          >
            <Command className="w-3.5 h-3.5 text-slate-400" />
            <span className="hidden md:inline font-medium">Search</span>
            <kbd className="px-1.5 py-0.5 text-[10px] bg-white dark:bg-zinc-900 rounded border border-slate-200 dark:border-zinc-700 font-mono">
              ⌘K
            </kbd>
          </button>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* CTA */}
          <Button
            variant="glow"
            size="sm"
            onClick={() => window.dispatchEvent(new CustomEvent("open-consultation"))}
            rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
          >
            Book Demo
          </Button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="flex xl:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 rounded-xl bg-slate-100 dark:bg-zinc-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-zinc-700"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white dark:bg-zinc-900 border-b border-slate-200 dark:border-zinc-800 px-4 py-4 space-y-3"
          >
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="px-3 py-2 text-left text-xs font-medium rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-zinc-800"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-zinc-800 flex items-center justify-between gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCommand();
                }}
                className="flex-1 flex items-center justify-center gap-2 py-2 text-xs bg-slate-100 dark:bg-zinc-800 rounded-xl text-slate-700 dark:text-slate-300"
              >
                <Command className="w-3.5 h-3.5" />
                <span>Command Menu (⌘K)</span>
              </button>

              <Button
                variant="glow"
                size="sm"
                className="flex-1"
                onClick={() => scrollToSection("contact")}
              >
                Book Demo
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
