"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { siteConfig } from "@/data/siteConfig";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please provide a valid email address."),
  subject: z.string().min(3, "Subject must be at least 3 characters."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type ContactInputs = z.infer<typeof contactSchema>;

export const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInputs>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactInputs) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (res.ok && result.success) {
        toast.success("Message sent successfully!");
        setIsSuccess(true);
        reset();
      } else {
        toast.error(result.message || "Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Network error. Please reach out directly via email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="mx-auto mt-24 max-w-5xl px-6 md:mt-32 pb-24 lg:px-0"
    >
      {/* Title */}
      <div>
        <span className="text-xs font-mono uppercase tracking-widest text-brand-purple">
          Let&apos;s Connect
        </span>
        <h3 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white md:text-4xl">
          Contact Me
        </h3>
      </div>

      {/* Philosophy Row */}
      <div className="mt-8 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-[1fr_2fr]">
        <div className="text-xl text-zinc-900 dark:text-white">
          <div className="font-semibold">Have a project in mind?</div>
          <div className="font-serif font-normal italic text-zinc-600 dark:text-zinc-400">
            Let&apos;s build something meaningful
          </div>
        </div>

        <div className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-base">
          I am actively exploring{" "}
          <strong>
            Junior / Entry-Level Full-Stack &amp; MERN Stack Developer
          </strong>{" "}
          roles. Whether you have a position open or would like to discuss web
          application engineering, feel free to send a message.
        </div>
      </div>

      {/* Form & Direct Channels Grid */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Direct Channels on Left */}
        <div className="lg:col-span-5 space-y-4">
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-3.5 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-brand-purple/50 transition-all group"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-brand-pink to-brand-purple p-0.5 flex items-center justify-center">
              <div className="w-full h-full rounded-[6px] bg-background flex items-center justify-center text-brand-purple">
                <Mail className="w-4 h-4" />
              </div>
            </div>
            <div>
              <span className="text-xs font-mono text-zinc-500 uppercase">
                Email
              </span>
              <p className="text-sm font-semibold text-zinc-900 dark:text-white group-hover:text-brand-purple transition-colors">
                {siteConfig.email}
              </p>
            </div>
          </a>

          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3.5 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-brand-purple/50 transition-all group"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-brand-pink to-brand-purple p-0.5 flex items-center justify-center">
              <div className="w-full h-full rounded-[6px] bg-background flex items-center justify-center text-brand-purple">
                <Linkedin className="w-4 h-4" />
              </div>
            </div>
            <div>
              <span className="text-xs font-mono text-zinc-500 uppercase">
                LinkedIn
              </span>
              <p className="text-sm font-semibold text-zinc-900 dark:text-white group-hover:text-brand-purple transition-colors">
                mohammed-meezan-afzal
              </p>
            </div>
          </a>

          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3.5 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-brand-purple/50 transition-all group"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-brand-pink to-brand-purple p-0.5 flex items-center justify-center">
              <div className="w-full h-full rounded-[6px] bg-background flex items-center justify-center text-brand-purple">
                <Github className="w-4 h-4" />
              </div>
            </div>
            <div>
              <span className="text-xs font-mono text-zinc-500 uppercase">
                GitHub
              </span>
              <p className="text-sm font-semibold text-zinc-900 dark:text-white group-hover:text-brand-purple transition-colors">
                github.com/mohammed-meezan
              </p>
            </div>
          </a>

          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <div className="w-10 h-10 rounded-lg bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-300">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-mono text-zinc-500 uppercase">
                Location
              </span>
              <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                {siteConfig.location}
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form on Right */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl bg-gradient-to-r from-brand-pink to-brand-purple p-0.5">
            <div className="rounded-[14px] bg-background p-6 sm:p-8">
              {isSuccess ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-zinc-900 dark:text-white">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 max-w-sm mx-auto">
                    Thank you for reaching out. I will review your message and
                    reply promptly.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-4 px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 text-xs font-semibold"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-zinc-600 dark:text-zinc-400 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      {...register("name")}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-900 dark:text-white focus:outline-none focus:border-brand-purple transition-colors"
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />{" "}
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-zinc-600 dark:text-zinc-400 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="john@company.com"
                      {...register("email")}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-900 dark:text-white focus:outline-none focus:border-brand-purple transition-colors"
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />{" "}
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-zinc-600 dark:text-zinc-400 mb-1">
                      Subject *
                    </label>
                    <input
                      type="text"
                      placeholder="Full-Stack Developer Opportunity"
                      {...register("subject")}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-900 dark:text-white focus:outline-none focus:border-brand-purple transition-colors"
                    />
                    {errors.subject && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />{" "}
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-zinc-600 dark:text-zinc-400 mb-1">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Write your message here..."
                      {...register("message")}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-900 dark:text-white focus:outline-none focus:border-brand-purple transition-colors resize-y"
                    />
                    {errors.message && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />{" "}
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    onClick={handleSubmit(onSubmit)}
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-brand-pink to-brand-purple hover:opacity-95 text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-lg hover:scale-[1.01] transition-transform disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
