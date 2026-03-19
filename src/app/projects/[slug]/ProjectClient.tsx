'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Zap, Shield } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/ui/Section';
import { SystemDesign } from '@/components/ui/SystemDesign';
import { useLanguage } from '@/components/LanguageProvider';
import { TechIcon } from '@/components/ui/TechIcon';
import { Project } from '@/constants/projects';

interface ProjectClientProps {
  project: Project;
}

export default function ProjectClient({ project }: ProjectClientProps) {
  const { t, locale } = useLanguage();

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Section className="pb-12 pt-24 md:pt-32">
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 text-sm font-bold text-accent uppercase tracking-widest hover:gap-3 transition-all mb-8"
          >
            <ArrowLeft size={16} /> {locale === 'th' ? 'กลับไปยังผลงาน' : 'Back to Projects'}
          </Link>
          
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-noto font-bold tracking-tight">
              {project.title[locale]}
            </h1>
            <p className="text-xl md:text-2xl text-foreground/60 max-w-3xl leading-relaxed">
              {project.longDescription[locale]}
            </p>
            
            <div className="flex flex-wrap gap-3 mt-4">
              {project.techStack.map((tech: { name: string }) => (
                <span 
                  key={tech.name} 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent/5 text-accent border border-accent/10 text-sm font-bold"
                >
                  <TechIcon name={tech.name} size={18} />
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </Section>

        <Section className="py-24 border-t border-border/50 bg-muted/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="md:col-span-2 space-y-12">
              <section className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-noto font-bold tracking-tight">
                  {t('project.overview')}
                </h2>
                <p className="text-lg text-foreground/60 leading-relaxed">
                  {project.longDescription[locale]}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.features[locale].map((feature: string, idx: number) => (
                    <div key={idx} className="flex gap-3 p-4 rounded-xl bg-muted/50 border border-border/50">
                      <CheckCircle2 className="text-accent shrink-0" size={20} />
                      <span className="text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-noto font-bold tracking-tight">
                  {t('project.impact')}
                </h2>
                <div className="space-y-4">
                  {project.impact[locale].map((item: string, idx: number) => (
                    <div key={idx} className="flex gap-4 p-6 rounded-2xl bg-accent/5 border border-accent/10">
                      <div className="p-2 h-fit rounded-lg bg-accent text-white">
                        <Zap size={20} />
                      </div>
                      <p className="text-lg font-medium text-foreground/80">{item}</p>
                    </div>
                  ))}
                </div>
              </section>

              {project.systemDesign && (
                <section className="space-y-8">
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="text-2xl md:text-3xl font-noto font-bold tracking-tight">
                      {t('project.architecture')}
                    </h2>
                    <div className="hidden sm:block h-1 grow bg-muted rounded-full" />
                    <span className="px-4 py-1.5 rounded-full bg-accent text-white text-xs font-bold uppercase tracking-widest whitespace-nowrap">
                      FleetLink Core
                    </span>
                  </div>
                  <SystemDesign />
                </section>
              )}

              <section className="space-y-8">
                <h2 className="text-2xl md:text-3xl font-noto font-bold tracking-tight">
                  {t('project.challenges')}
                </h2>
                <div className="grid grid-cols-1 gap-6">
                  <div className="p-8 rounded-2xl bg-card border border-border space-y-4">
                    <div className="flex items-center gap-3 text-foreground">
                      <Shield className="text-accent" size={24} />
                      <h3 className="text-xl font-noto font-bold">{t('project.challenge.label')}</h3>
                    </div>
                    <p className="text-foreground/60 leading-relaxed">
                      {project.challenges[locale]}
                    </p>
                  </div>
                  <div className="p-8 rounded-2xl bg-card border border-border space-y-4">
                    <div className="flex items-center gap-3 text-foreground">
                      <Zap className="text-accent" size={24} />
                      <h3 className="text-xl font-noto font-bold">{t('project.solution.label')}</h3>
                    </div>
                    <p className="text-foreground/60 leading-relaxed">
                      {project.solutions[locale]}
                    </p>
                  </div>
                </div>
              </section>
            </div>

            <aside className="md:col-span-1 space-y-8">
              <div className="p-8 rounded-2xl bg-card border border-border sticky top-32">
                <h3 className="text-xl font-noto font-bold mb-6">{t('project.techStack')}</h3>
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech: { name: string }) => (
                    <span 
                      key={tech.name} 
                      className="inline-flex items-center gap-2 px-4 py-2 bg-muted text-foreground/70 rounded-lg text-sm font-bold border border-border"
                    >
                      <TechIcon name={tech.name} size={18} />
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </Section>

        {/* Bottom CTA */}
        <Section className="py-24">
          <div className="p-12 rounded-3xl bg-linear-to-r from-accent to-accent/80 text-white text-center space-y-8 shadow-2xl shadow-accent/20">
            <h2 className="text-3xl md:text-5xl font-noto font-bold">Interested in similar results?</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Let&apos;s discuss how we can build something scalable and high-performance together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-white text-accent rounded-full font-bold hover:bg-opacity-90 transition-all shadow-lg"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
