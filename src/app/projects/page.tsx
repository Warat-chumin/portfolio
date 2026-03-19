"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { useLanguage } from "@/components/LanguageProvider";
import { projects } from "@/constants/projects";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ProjectsPage() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <main className="grow pt-20">
        <Section className="pb-12 pt-24 md:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-noto font-bold tracking-tight mb-4">
              {t("projects.title")}
            </h1>
            <p className="text-xl text-foreground/60 max-w-2xl leading-relaxed">
              {t("projects.subtitle")}
            </p>
          </motion.div>
        </Section>

        <Section className="py-12 bg-muted/30 border-y border-border/50">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.map((project) => (
              <motion.div key={project.slug} variants={itemVariants}>
                <ProjectCard project={project} showImage={false} />
              </motion.div>
            ))}
          </motion.div>
        </Section>

        {/* Scalability Highlight */}
        <Section className="py-24">
          <div className="relative overflow-hidden rounded-3xl border border-accent/20 bg-linear-to-br from-accent/10 via-card to-background p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 group hover:border-accent/30 transition-all duration-500">
            {/* Background Glow Effect */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/10 blur-[100px] rounded-full group-hover:bg-accent/20 transition-all duration-700" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/5 blur-[100px] rounded-full group-hover:bg-accent/10 transition-all duration-700" />

            <div className="flex-1 space-y-6 text-center md:text-left relative z-10">
              <h2
                className="text-3xl md:text-5xl font-noto font-bold tracking-tight leading-tight"
                dangerouslySetInnerHTML={{
                  __html: t("projects.scalability.title"),
                }}
              />
              <p className="text-foreground/60 text-lg md:text-xl leading-relaxed max-w-xl">
                {t("projects.scalability.desc")}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 w-full md:w-auto relative z-10">
              {[
                { label: t("projects.stats.latency"), value: "-30%" },
                { label: t("projects.stats.uptime"), value: "99.9%" },
                { label: t("projects.stats.requests"), value: "10k/s" },
                { label: t("projects.stats.vehicles"), value: "50k+" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-2xl border border-border/50 bg-background/40 backdrop-blur-sm text-center hover:bg-background/60 transition-colors"
                >
                  <div className="text-2xl md:text-3xl font-bold text-accent">
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground font-bold mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
