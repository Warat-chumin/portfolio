'use client';

import React from 'react';
import { Github, Mail, Phone } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';

export function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="border-t border-border mt-auto">
      <div className="container mx-auto px-6 py-12 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h3 className="font-noto font-bold text-xl tracking-tight">
              {t('home.cta.title').replace(/<[^>]*>?/gm, '')}
            </h3>
            <p className="text-foreground/60 max-w-xs leading-relaxed">
              Fullstack Software Engineer specializing in high-performance web systems and microservices.
            </p>
          </div>
          
          <div className="flex flex-col md:items-end gap-6">
            <div className="flex gap-4">
              <a 
                href="tel:0959324699" 
                className="p-3 rounded-xl bg-muted hover:bg-accent hover:text-white transition-all transform hover:-translate-y-1"
                aria-label="Phone"
              >
                <Phone size={20} />
              </a>
              <a 
                href="mailto:warat.c@outlook.co.th" 
                className="p-3 rounded-xl bg-muted hover:bg-accent hover:text-white transition-all transform hover:-translate-y-1"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://github.com/Warat-chumin" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-xl bg-muted hover:bg-accent hover:text-white transition-all transform hover:-translate-y-1"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
            <p className="text-sm text-foreground/40">
              © {new Date().getFullYear()} Warat Chumin. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
