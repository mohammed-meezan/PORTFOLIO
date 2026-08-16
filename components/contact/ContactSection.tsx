"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { siteConfig } from "@/data/siteConfig";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
} from "lucide-react";
import { motion } from "framer-motion";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().min(3, "Subject must be at least 3 characters."),
  message: z.string().min(10, "Message must be at least 10 characters long."),
});

type ContactFormInputs = z.infer<typeof contactFormSchema>;

export const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccessfully, setSubmittedSuccessfully] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormInputs) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast.success("Message sent successfully! I'll reply promptly.");
        setSubmittedSuccessfully(true);
        reset();
      } else {
        toast.error(result.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Network error. Please reach out directly via email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText="Get In Touch"
          title="Have a project in mind?"
          subtitle="Let's build something meaningful together. Whether you are recruiting for an entry-level / junior full-stack developer role or exploring collaborations, I'd love to connect."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Left Column: Direct Contact Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Direct Channels
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Feel free to send an email, message on LinkedIn, or fill out the contact form. I typically respond within 24 hours.
              </p>

              <div className="space-y-4">
                {/* Email Card */}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-surface-100/70 border border-white/10 hover:border-cyan-500/40 hover:bg-surface-50 transition-all group"
                >
                  <div className="w-11 h-11 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-mono">
                      Email
                    </span>
                    <p className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {siteConfig.email}
                    </p>
                  </div>
                </a>

                {/* LinkedIn Card */}
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-surface-100/70 border border-white/10 hover:border-cyan-500/40 hover:bg-surface-50 transition-all group"
                >
                  <div className="w-11 h-11 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-mono">
                      LinkedIn
                    </span>
                    <p className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      mohammed-meezan-afzal
                    </p>
                  </div>
                </a>

                {/* GitHub Card */}
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-surface-100/70 border border-white/10 hover:border-cyan-500/40 hover:bg-surface-50 transition-all group"
                >
                  <div className="w-11 h-11 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-slate-300 group-hover:scale-105 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-mono">
                      GitHub
                    </span>
                    <p className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      github.com/meezan-afzal
                    </p>
                  </div>
                </a>

                {/* Location Info */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-100/40 border border-white/5">
                  <div className="w-11 h-11 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-mono">
                      Location
                    </span>
                    <p className="text-sm font-semibold text-slate-300">
                      {siteConfig.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 mt-6">
              <span className="text-xs text-cyan-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                Available for full-time junior / entry-level roles starting 2026.
              </span>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <Card className="p-6 sm:p-8 bg-surface-100/90 border-white/10">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-bold text-white">
                  Send a Direct Message
                </h3>
              </div>

              {submittedSuccessfully ? (
                <div className="p-8 text-center bg-surface-200/60 rounded-xl border border-emerald-500/30">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    Message Sent!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 mb-6 max-w-sm mx-auto">
                    Thank you for reaching out. Your message has been received and I will reply to you as soon as possible.
                  </p>
                  <Button
                    onClick={() => setSubmittedSuccessfully(false)}
                    variant="outline"
                    size="sm"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name Field */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5"
                      >
                        Your Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        {...register("name")}
                        className={`w-full px-4 py-2.5 rounded-lg bg-surface-200 border text-white text-sm placeholder:text-slate-500 focus:outline-none transition-colors ${
                          errors.name
                            ? "border-red-500/60 focus:border-red-500"
                            : "border-white/10 focus:border-cyan-400/80 focus:ring-1 focus:ring-cyan-400"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5"
                      >
                        Email Address <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        {...register("email")}
                        className={`w-full px-4 py-2.5 rounded-lg bg-surface-200 border text-white text-sm placeholder:text-slate-500 focus:outline-none transition-colors ${
                          errors.email
                            ? "border-red-500/60 focus:border-red-500"
                            : "border-white/10 focus:border-cyan-400/80 focus:ring-1 focus:ring-cyan-400"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5"
                    >
                      Subject <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="Opportunity / Project inquiry"
                      {...register("subject")}
                      className={`w-full px-4 py-2.5 rounded-lg bg-surface-200 border text-white text-sm placeholder:text-slate-500 focus:outline-none transition-colors ${
                        errors.subject
                          ? "border-red-500/60 focus:border-red-500"
                          : "border-white/10 focus:border-cyan-400/80 focus:ring-1 focus:ring-cyan-400"
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5"
                    >
                      Message <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Write your message here..."
                      {...register("message")}
                      className={`w-full px-4 py-2.5 rounded-lg bg-surface-200 border text-white text-sm placeholder:text-slate-500 focus:outline-none transition-colors resize-y ${
                        errors.message
                          ? "border-red-500/60 focus:border-red-500"
                          : "border-white/10 focus:border-cyan-400/80 focus:ring-1 focus:ring-cyan-400"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      icon={Send}
                      iconPosition="right"
                      isLoading={isSubmitting}
                      className="w-full justify-center font-semibold"
                    >
                      {isSubmitting ? "Sending Message..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
