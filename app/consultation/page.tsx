"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowLeft,
  Calendar as CalendarIcon,
  Clock,
  User,
  Building,
  Mail,
  Phone,
  CheckCircle,
  ShieldCheck,
  Award,
  Send,
  Video,
  FileCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { AccredianLogo } from "@/components/ui/logo";
import { toast } from "@/hooks/use-toast";
import confetti from "canvas-confetti";

export default function ConsultationPage() {
  const [selectedDomain, setSelectedDomain] = useState("Generative AI & LLM Architecture");
  const [selectedAdvisor, setSelectedAdvisor] = useState("Dr. Sarah Lin (Chief AI Architect)");
  const [selectedDate, setSelectedDate] = useState("2026-07-25");
  const [selectedTime, setSelectedTime] = useState("10:00 AM EST");

  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    companyName: "",
    teamSize: "50-200 Employees",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  const domains = [
    "Generative AI & LLM Architecture",
    "Product Management & Innovation",
    "Data Engineering & Cloud Analytics",
    "Executive Leadership & Tech Scale",
  ];

  const advisors = [
    {
      name: "Dr. Sarah Lin",
      role: "Chief AI Architect",
      exp: "Ex-Google DeepMind • 12+ Yrs",
      imageBg: "from-blue-600 to-indigo-600",
    },
    {
      name: "Marcus Vance",
      role: "VP Enterprise Engineering",
      exp: "Ex-Amazon Web Services • 15+ Yrs",
      imageBg: "from-indigo-600 to-purple-600",
    },
    {
      name: "Elena Rostova",
      role: "Global L&D Director",
      exp: "Fortune 500 Workforce Strategist",
      imageBg: "from-emerald-600 to-teal-600",
    },
  ];

  const timeSlots = [
    "09:00 AM EST",
    "10:00 AM EST",
    "01:30 PM EST",
    "03:00 PM EST",
    "04:30 PM EST",
  ];

  const dates = [
    { day: "Thu", date: "Jul 23", full: "2026-07-23" },
    { day: "Fri", date: "Jul 24", full: "2026-07-24" },
    { day: "Mon", date: "Jul 27", full: "2026-07-27" },
    { day: "Tue", date: "Jul 28", full: "2026-07-28" },
    { day: "Wed", date: "Jul 29", full: "2026-07-29" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.workEmail || !formData.companyName) {
      toast({
        title: "Required Fields Missing",
        description: "Please fill in your name, work email, and company name.",
        type: "error",
      });
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsBooked(true);
      try {
        confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
      } catch {
        // fallback
      }
      toast({
        title: "Enterprise Advisory Consultation Booked!",
        description: `Calendar invite sent to ${formData.workEmail}`,
        type: "success",
      });
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-slate-900 dark:text-white transition-colors duration-300">
      {/* Header Bar */}
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-slate-200 dark:border-zinc-800 py-4 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <AccredianLogo size="sm" />

          <div className="hidden sm:flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Live Advisor Availability</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {isBooked ? (
          /* Confirmation State */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center space-y-6 py-12"
          >
            <Card className="p-8 sm:p-12 space-y-6 bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 shadow-2xl">
              <div className="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center shadow-lg">
                <CheckCircle className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <Badge variant="success">CONFIRMATION #ACC-92841</Badge>
                <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
                  Enterprise Consultation Scheduled!
                </h1>
                <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md mx-auto">
                  Thank you, <strong className="text-slate-900 dark:text-white">{formData.fullName}</strong>. A calendar invitation with Google Meet & Teams credentials has been sent to <strong className="text-blue-600 dark:text-blue-400">{formData.workEmail}</strong>.
                </p>
              </div>

              {/* Booking Summary Box */}
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700 text-left space-y-3 text-sm">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-zinc-700">
                  <span className="text-xs uppercase font-bold text-slate-400">Assigned Solution Architect</span>
                  <span className="font-bold text-slate-900 dark:text-white">{selectedAdvisor}</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-zinc-700">
                  <span className="text-xs uppercase font-bold text-slate-400">Selected Track</span>
                  <span className="font-semibold text-blue-600 dark:text-blue-400">{selectedDomain}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-bold text-slate-400">Date & Time</span>
                  <span className="font-bold text-slate-900 dark:text-white">{selectedDate} @ {selectedTime}</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="glow" onClick={() => window.print()}>
                  Download Calendar Pass (.ics)
                </Button>
                <Link href="/">
                  <Button variant="outline">Return to Homepage</Button>
                </Link>
              </div>
            </Card>
          </motion.div>
        ) : (
          /* Main Form View */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <Badge variant="gradient">1-ON-1 ENTERPRISE CONSULTATION</Badge>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                  Schedule Your <span className="text-gradient">Custom Enterprise Roadmap</span>
                </h1>
                <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  Book a 30-minute strategic consultation with an Accredian Solution Architect to design tailored curricula, custom sandboxes, and skills assessment for your organization.
                </p>
              </div>

              {/* What to expect checklist */}
              <div className="space-y-4 pt-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  What Your Session Includes
                </h3>
                <div className="space-y-3">
                  <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 flex items-start gap-3 shadow-xs">
                    <FileCheck className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">Custom Skill Gap Audit</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Analysis of your engineering & product teams current capabilities.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 flex items-start gap-3 shadow-xs">
                    <Video className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">Live Sandbox Walkthrough</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Interactive demo of CAT Framework capstone environments.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 flex items-start gap-3 shadow-xs">
                    <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">SOC-2 & Enterprise Pricing Proposal</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Tailored corporate volume pricing & LMS integration terms.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Booking Form Column */}
            <div className="lg:col-span-7">
              <Card className="p-6 sm:p-10 bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 shadow-xl space-y-8">
                {/* Step 1: Domain Track */}
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
                    <span>1. Select Transformation Domain</span>
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">{selectedDomain.split("&")[0]}</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {domains.map((dom) => (
                      <button
                        key={dom}
                        type="button"
                        onClick={() => setSelectedDomain(dom)}
                        className={`p-3 text-left rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          selectedDomain === dom
                            ? "bg-blue-600 text-white shadow-md shadow-blue-500/20 ring-2 ring-blue-500/30"
                            : "bg-slate-100 dark:bg-zinc-800 text-slate-900 dark:text-white border border-slate-300 dark:border-zinc-700 hover:bg-blue-50 dark:hover:bg-zinc-700/80 hover:text-blue-600 dark:hover:text-blue-400"
                        }`}
                      >
                        {dom}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Advisor Selection */}
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    2. Choose Solution Architect Advisor
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {advisors.map((adv) => {
                      const isSelected = selectedAdvisor.includes(adv.name);
                      const initials = adv.name
                        .replace(/^Dr\.\s*/, "")
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase();

                      return (
                        <button
                          key={adv.name}
                          type="button"
                          onClick={() => setSelectedAdvisor(`${adv.name} (${adv.role})`)}
                          className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                            isSelected
                              ? "bg-blue-50 dark:bg-blue-950/80 border-blue-500 ring-2 ring-blue-500/20 shadow-sm"
                              : "bg-slate-100 dark:bg-zinc-800/80 border-slate-200 dark:border-zinc-700 hover:border-slate-300"
                          }`}
                        >
                          <div className={`w-9 h-9 rounded-xl bg-gradient-to-tr ${adv.imageBg} text-white font-extrabold flex items-center justify-center text-xs mb-2.5 shadow-sm`}>
                            {initials}
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900 dark:text-white leading-tight">{adv.name}</div>
                            <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 font-medium">{adv.role}</div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 3: Date & Time Picker */}
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    3. Select Date & Time Slot
                  </label>
                  <div className="space-y-3">
                    {/* Date Selector */}
                    <div className="flex gap-2 overflow-x-auto pb-1">
                      {dates.map((d) => (
                        <button
                          key={d.full}
                          type="button"
                          onClick={() => setSelectedDate(d.full)}
                          className={`flex-1 min-w-[70px] p-2.5 rounded-xl text-center border transition-all cursor-pointer ${
                            selectedDate === d.full
                              ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                              : "bg-slate-50 dark:bg-zinc-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-zinc-700"
                          }`}
                        >
                          <div className="text-[10px] font-semibold uppercase opacity-80">{d.day}</div>
                          <div className="text-xs font-bold">{d.date}</div>
                        </button>
                      ))}
                    </div>

                    {/* Time Slots */}
                    <div className="flex flex-wrap gap-2">
                      {timeSlots.map((ts) => (
                        <button
                          key={ts}
                          type="button"
                          onClick={() => setSelectedTime(ts)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                            selectedTime === ts
                              ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900"
                              : "bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
                          }`}
                        >
                          {ts}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Step 4: Contact Details Form */}
                <form onSubmit={handleSubmit} className="space-y-4 pt-2 border-t border-slate-100 dark:border-zinc-800">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase text-slate-700 dark:text-slate-300">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase text-slate-700 dark:text-slate-300">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase text-slate-700 dark:text-slate-300">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="Global Enterprises Inc."
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase text-slate-700 dark:text-slate-300">
                        Team Size *
                      </label>
                      <select
                        value={formData.teamSize}
                        onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="10-50 Employees">10-50 Employees</option>
                        <option value="50-200 Employees">50-200 Employees</option>
                        <option value="200-1000 Employees">200-1,000 Employees</option>
                        <option value="1000+ Enterprise">1,000+ Enterprise</option>
                      </select>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="glow"
                    size="lg"
                    isLoading={isSubmitting}
                    rightIcon={<Send className="w-4 h-4" />}
                    className="w-full mt-4"
                  >
                    Confirm & Schedule Advisory Consultation
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
