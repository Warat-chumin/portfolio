"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Monitor, Terminal, Database } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { experiences } from "@/constants/experience";
import { skillGroups } from "@/constants/skills";
import { useLanguage } from "@/components/LanguageProvider";
import { TechIcon } from "@/components/ui/TechIcon";

export default function AboutPage() {
  const { t, locale } = useLanguage();

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-12">
        <Section className="py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="md:col-span-2 space-y-8">
              <h1 className="text-4xl md:text-6xl font-noto font-bold tracking-tight">
                {t("about.title")}
              </h1>
              <div className="space-y-6 text-lg text-foreground/60 leading-relaxed">
                <p dangerouslySetInnerHTML={{ __html: t("about.intro.p1") }} />
                <p dangerouslySetInnerHTML={{ __html: t("about.intro.p2") }} />
                <p dangerouslySetInnerHTML={{ __html: t("about.intro.p3") }} />
              </div>

              {/* Core Philosophy Section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-8 border-y border-border/50">
                <div className="space-y-3">
                  <h3 className="text-lg font-bold font-noto">
                    Scalability First
                  </h3>
                  <p className="text-foreground/60 leading-relaxed">
                    Systems built to handle growth from day one, not as an
                    afterthought.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-bold font-noto">
                    Clean Architecture
                  </h3>
                  <p className="text-foreground/60 leading-relaxed">
                    Industrial-grade patterns ensure maintainable and testable
                    production code.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-1 sticky top-32 h-fit">
              <div className="p-8 rounded-2xl bg-card border border-border space-y-8">
                <div>
                  <h2 className="text-xl font-noto font-bold mb-4">
                    {t("about.philosophy.title")}
                  </h2>
                  <p className="text-foreground/60 text-sm leading-relaxed">
                    Empowering businesses through robust, high-performance
                    software engineering that scales alongside their ambitions.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-noto font-bold mb-4">
                    {t("about.expertise.title")}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React",
                      "Next.js",
                      "Go",
                      "Microservices",
                      "System Design",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="flex items-center gap-1.5 px-3 py-1 bg-accent/5 text-accent rounded-full text-xs font-bold border border-accent/10"
                      >
                        <TechIcon name={tag} size={12} />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Skills Visualization */}
        <Section className="py-24 bg-muted/30 border-y border-border/50">
          <div className="mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-noto font-bold tracking-tight">
              {t("about.expertise.title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillGroups.map((group) => (
              <div
                key={group.category[locale]}
                className="p-8 rounded-2xl bg-card border border-border flex flex-col space-y-6"
              >
                <h3 className="flex items-center gap-3 text-xl font-noto font-bold text-accent">
                  {group.icon === "Monitor" && (
                    <Monitor size={20} className="text-blue-500" />
                  )}
                  {group.icon === "Terminal" && (
                    <Terminal size={20} className="text-green-500" />
                  )}
                  {group.icon === "Database" && (
                    <Database size={20} className="text-indigo-500" />
                  )}
                  {group.category[locale]}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-full bg-secondary text-secondary-foreground border border-border/50 hover:border-accent/30 transition-colors"
                    >
                      <TechIcon name={skill.name} size={16} />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Experience Timeline */}
        <Section className="py-24">
          <div className="mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-noto font-bold tracking-tight">
              {t("about.experience.title")}
            </h2>
          </div>

          <div className="space-y-12">
            {experiences.map((exp) => (
              <motion.div
                key={exp.company[locale]}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group p-8 rounded-2xl bg-card border border-border transition-all hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5"
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="md:col-span-1">
                    <p className="text-sm font-bold text-accent uppercase tracking-wider">
                      {exp.period[locale]}
                    </p>
                    <h3 className="text-2xl font-noto font-bold mt-2 tracking-tight">
                      {exp.company[locale]}
                    </h3>
                  </div>

                  <div className="md:col-span-3 space-y-6">
                    <h4 className="text-xl font-bold">{exp.role[locale]}</h4>
                    <ul className="space-y-4">
                      {exp.responsibilities[locale].map((resp, idx) => (
                        <li
                          key={idx}
                          className="flex gap-3 text-foreground/60 leading-relaxed group-hover:text-foreground/80 transition-colors"
                        >
                          <ChevronRight
                            size={18}
                            className="text-accent mt-1 shrink-0 group-hover:translate-x-1 transition-transform"
                          />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
