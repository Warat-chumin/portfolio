'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Server, Layers, Globe } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/ui/Section';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { projects } from '@/constants/projects';
import { useLanguage } from '@/components/LanguageProvider';


export default function Home() {
  const { t } = useLanguage();
  const featuredProject = projects.find(p => p.slug === 'fleetlink');

  return (
    <>
      <Navbar />
      <main className="grow pt-20">
        {/* Hero Section */}
        <Section className="pb-8 pt-24 md:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 w-fit">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-bold text-accent uppercase tracking-wider">Available for new opportunities</span>
              </div>
              <p className="text-xl md:text-2xl font-bold text-foreground/80 font-noto ml-1">
                {t('hero.name')}
              </p>
            </div>
            
            <h1 
              className="text-4xl md:text-6xl lg:text-7xl font-noto font-bold tracking-tight max-w-4xl leading-[1.1]"
              dangerouslySetInnerHTML={{ __html: t('hero.title') }}
            />
            
            <p className="text-lg md:text-xl text-foreground/60 max-w-2xl leading-relaxed">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-4">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 bg-foreground text-background font-bold px-8 py-4 rounded-lg hover:bg-foreground/90 transition-colors"
              >
                {t('hero.cta.projects')} <ArrowRight size={18} />
              </Link>
              <Link 
                href="/about"
                className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-lg border border-border hover:bg-muted transition-colors"
              >
                {t('hero.cta.learnMore')}
              </Link>
            </div>
          </motion.div>
        </Section>

        {/* Highlights Section */}
        <Section className="py-12 border-y border-border/50 bg-muted/30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-card border border-border flex flex-col items-center text-center space-y-4"
            >
              <div className="p-3 rounded-xl bg-accent/10 text-accent">
                <Globe size={32} />
              </div>
              <p className="text-lg font-bold">{t('home.stats.experience')}</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border flex flex-col items-center text-center space-y-4"
            >
              <div className="p-3 rounded-xl bg-accent/10 text-accent">
                <Server size={32} />
              </div>
              <p className="text-lg font-bold">{t('home.stats.vehicles')}</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-2xl bg-card border border-border flex flex-col items-center text-center space-y-4"
            >
              <div className="p-3 rounded-xl bg-accent/10 text-accent">
                <Layers size={32} />
              </div>
              <p className="text-lg font-bold">{t('home.stats.stack')}</p>
            </motion.div>
          </div>
        </Section>

        {/* Featured Project Preview */}
        <Section id="work" className="py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-noto font-bold tracking-tight">{t('home.featuredWork.title')}</h2>
              <p className="text-foreground/60 max-w-lg leading-relaxed text-lg">
                {t('home.featuredWork.subtitle')}
              </p>
            </div>
            <Link 
              href="/projects" 
              className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-foreground/40 hover:text-accent transition-colors"
            >
              {t('home.featuredWork.allProjects')} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {featuredProject && (
            <div className="mt-8">
              <ProjectCard project={featuredProject} featured={true} />
            </div>
          )}
        </Section>

        {/* Quick CTA */}
        <Section className="py-24">
          <div className="relative overflow-hidden rounded-3xl border border-accent/20 bg-linear-to-br from-accent/10 via-card to-background p-8 md:p-16 flex flex-col items-center text-center space-y-8 group hover:border-accent/30 transition-all duration-500">
            {/* Background Glow Effect */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/10 blur-[100px] rounded-full group-hover:bg-accent/20 transition-all duration-700" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/5 blur-[100px] rounded-full group-hover:bg-accent/10 transition-all duration-700" />

            <div className="max-w-3xl space-y-6 relative z-10">
              <h2 
                className="text-3xl md:text-5xl font-noto font-bold tracking-tight leading-tight"
                dangerouslySetInnerHTML={{ __html: t('home.cta.title') }}
              />
              <p className="text-foreground/60 text-lg md:text-xl leading-relaxed">
                {t('home.cta.subtitle')}
              </p>
              <div className="pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-accent text-white font-bold px-10 py-5 rounded-xl hover:bg-accent/90 transition-all hover:scale-105 shadow-lg shadow-accent/20"
                >
                  {t('home.cta.button')} <Mail size={18} />
                </Link>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

// Helper to avoid build error until Mail is imported
function Mail({ size = 24, className, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
