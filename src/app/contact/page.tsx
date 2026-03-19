"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Phone, MessageSquare, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { useLanguage } from "@/components/LanguageProvider";

const contactMethods = [
  {
    icon: <Mail size={24} />,
    label: "Email",
    value: "warat.c@outlook.co.th",
    href: "mailto:warat.c@outlook.co.th",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: <Github size={24} />,
    label: "GitHub",
    value: "github.com/Warat-chumin",
    href: "https://github.com/Warat-chumin",
    color: "bg-slate-500/10 text-slate-500",
  },
  {
    icon: <Phone size={24} />,
    label: "Phone",
    value: "095-932-4699",
    href: "tel:0959324699",
    color: "bg-green-500/10 text-green-500",
  },
];

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Section className="py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl space-y-6"
          >
            <div className="flex items-center gap-2 text-accent">
              <MessageSquare size={24} />
              <span className="text-sm font-bold uppercase tracking-widest">
                Connect
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-noto font-bold tracking-tight">
              {t("contact.title")}
            </h1>
            <p className="text-xl text-foreground/60 leading-relaxed">
              {t("contact.subtitle")}
            </p>
          </motion.div>
        </Section>

        <Section className="pb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
              <div className="grid grid-cols-1 gap-6">
                {contactMethods.map((method) => (
                  <a
                    key={method.label}
                    href={method.href}
                    target={
                      method.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      method.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="p-8 rounded-2xl bg-card border border-border group hover:border-accent/30 transition-all hover:shadow-xl hover:shadow-accent/5"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div className={`p-4 rounded-xl ${method.color}`}>
                        {method.icon}
                      </div>
                      <ExternalLink
                        size={18}
                        className="text-foreground/20 group-hover:text-accent transition-colors"
                      />
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-bold uppercase tracking-widest text-foreground/40">
                        {method.label}
                      </p>
                      <p className="text-lg font-bold truncate">
                        {method.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="p-8 md:p-12 rounded-2xl bg-accent text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <MessageSquare size={120} />
                </div>
                <h2 className="text-2xl font-noto font-bold tracking-tight mb-4">
                  {t("contact.topics.title")}
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "System Design & Architecture",
                    "High-performance Backend (Go)",
                    "Modern Frontend (React/Next.js)",
                    "Database Optimization",
                    "Microservices Planning",
                  ].map((topic) => (
                    <li
                      key={topic}
                      className="flex items-center gap-3 text-white/80"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="p-8 rounded-2xl bg-card border border-border space-y-8">
                <h2 className="text-2xl font-noto font-bold tracking-tight">
                  {t("contact.info.title")}
                </h2>
                <div className="space-y-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-2">
                      Based In
                    </p>
                    <p className="text-lg font-bold">Bangkok, Thailand</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-2">
                      Availability
                    </p>
                    <p className="text-lg font-bold">Open for new projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
