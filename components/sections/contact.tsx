"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { toast } from "@/hooks/use-toast";
import { LeadFormData } from "@/types";
import { Mail, MapPin, Globe, Send, CheckCircle, AlertCircle, Phone, Building, Users, BookOpen } from "lucide-react";
import confetti from "canvas-confetti";

export function ContactSection() {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: "",
    companyName: "",
    workEmail: "",
    phoneNumber: "",
    numberOfEmployees: "50-200 Employees",
    trainingRequirement: "Generative AI & LLM Implementation",
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error on change
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const validateLocal = (): boolean => {
    const errors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errors.fullName = "Full Name is required.";
    }

    if (!formData.companyName.trim()) {
      errors.companyName = "Company Name is required.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.workEmail || !emailRegex.test(formData.workEmail)) {
      errors.workEmail = "Please enter a valid work email address.";
    }

    if (!formData.phoneNumber || formData.phoneNumber.trim().length < 7) {
      errors.phoneNumber = "Please enter a valid phone number (min 7 digits).";
    }

    if (!formData.numberOfEmployees) {
      errors.numberOfEmployees = "Please select the number of employees.";
    }

    if (!formData.trainingRequirement || formData.trainingRequirement.trim().length < 4) {
      errors.trainingRequirement = "Please specify your team's training requirement.";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateLocal()) {
      toast({
        title: "Validation Error",
        description: "Please fix the highlighted errors in the form.",
        type: "error",
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setIsSubmitted(true);
        try {
          confetti({ particleCount: 100, spread: 80, origin: { y: 0.7 } });
        } catch {
          // fallback
        }

        toast({
          title: "Advisory Request Submitted!",
          description: "An Accredian L&D Director will contact your team within 24 hours.",
          type: "success",
        });
      } else {
        if (resData.errors) {
          setFieldErrors(resData.errors);
        }
        toast({
          title: "Submission Failed",
          description: resData.message || "Please correct the form errors.",
          type: "error",
        });
      }
    } catch {
      toast({
        title: "Network Error",
        description: "Could not reach the server. Please check your connection and try again.",
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50/70 dark:bg-zinc-950/60 border-b border-slate-200/80 dark:border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact info & perks */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <Badge variant="gradient">SPEAK WITH OUR ENTERPRISE ADVISORS</Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Get Expert Guidance for Your Team
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Connect directly with our enterprise solution architects to build a customized workforce training roadmap.
              </p>
            </div>

            {/* Information Cards */}
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase text-slate-400">Enterprise Email</div>
                  <a
                    href="mailto:enterprise@accredian.com"
                    className="text-sm font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    enterprise@accredian.com
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase text-slate-400">Headquarters Address</div>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, India
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase text-slate-400">Global Cohort Delivery</div>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    North America &bull; EMEA &bull; APAC
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-7">
            <Card className="p-8 sm:p-10 bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 shadow-xl">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Advisory Request Submitted!
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    Thank you, {formData.fullName}. An Accredian L&D Director will contact your team at <strong className="text-slate-900 dark:text-white">{formData.workEmail}</strong> within 24 hours.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: "",
                        companyName: "",
                        workEmail: "",
                        phoneNumber: "",
                        numberOfEmployees: "50-200 Employees",
                        trainingRequirement: "Generative AI & LLM Implementation",
                      });
                      setFieldErrors({});
                    }}
                  >
                    Submit Another Request
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white pb-2 border-b border-slate-100 dark:border-zinc-800 flex items-center justify-between">
                    <span>Lead Capture & Advisory Request</span>
                    <span className="text-xs font-medium text-slate-500">* Required Fields</span>
                  </h3>

                  {/* Full Name & Company Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Alex Morgan"
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-zinc-800/60 border text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                          fieldErrors.fullName
                            ? "border-rose-500 dark:border-rose-500 bg-rose-50/30 dark:bg-rose-950/20"
                            : "border-slate-200 dark:border-zinc-700"
                        }`}
                      />
                      {fieldErrors.fullName && (
                        <p className="text-xs text-rose-500 flex items-center gap-1 mt-0.5 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{fieldErrors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="e.g. Global Tech Solutions"
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-zinc-800/60 border text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                          fieldErrors.companyName
                            ? "border-rose-500 dark:border-rose-500 bg-rose-50/30 dark:bg-rose-950/20"
                            : "border-slate-200 dark:border-zinc-700"
                        }`}
                      />
                      {fieldErrors.companyName && (
                        <p className="text-xs text-rose-500 flex items-center gap-1 mt-0.5 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{fieldErrors.companyName}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Work Email & Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        name="workEmail"
                        value={formData.workEmail}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-zinc-800/60 border text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                          fieldErrors.workEmail
                            ? "border-rose-500 dark:border-rose-500 bg-rose-50/30 dark:bg-rose-950/20"
                            : "border-slate-200 dark:border-zinc-700"
                        }`}
                      />
                      {fieldErrors.workEmail && (
                        <p className="text-xs text-rose-500 flex items-center gap-1 mt-0.5 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{fieldErrors.workEmail}</span>
                        </p>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-zinc-800/60 border text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                          fieldErrors.phoneNumber
                            ? "border-rose-500 dark:border-rose-500 bg-rose-50/30 dark:bg-rose-950/20"
                            : "border-slate-200 dark:border-zinc-700"
                        }`}
                      />
                      {fieldErrors.phoneNumber && (
                        <p className="text-xs text-rose-500 flex items-center gap-1 mt-0.5 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{fieldErrors.phoneNumber}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Number of Employees & Training Requirement */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase">
                        Number of Employees *
                      </label>
                      <select
                        name="numberOfEmployees"
                        value={formData.numberOfEmployees}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="10-50 Employees">10-50 Employees</option>
                        <option value="50-200 Employees">50-200 Employees</option>
                        <option value="200-1000 Employees">200-1,000 Employees</option>
                        <option value="1000+ Enterprise">1,000+ Enterprise</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase">
                        Training Requirement *
                      </label>
                      <input
                        type="text"
                        name="trainingRequirement"
                        value={formData.trainingRequirement}
                        onChange={handleChange}
                        placeholder="e.g. GenAI & Product Architecture"
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-zinc-800/60 border text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                          fieldErrors.trainingRequirement
                            ? "border-rose-500 dark:border-rose-500 bg-rose-50/30 dark:bg-rose-950/20"
                            : "border-slate-200 dark:border-zinc-700"
                        }`}
                      />
                      {fieldErrors.trainingRequirement && (
                        <p className="text-xs text-rose-500 flex items-center gap-1 mt-0.5 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{fieldErrors.trainingRequirement}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="glow"
                    size="lg"
                    isLoading={isLoading}
                    rightIcon={<Send className="w-4 h-4" />}
                    className="w-full mt-2"
                  >
                    {isLoading ? "Submitting Advisory Request..." : "Submit Lead & Book Demo"}
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
