'use client';

import * as React from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import { motion } from 'framer-motion';

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center bg-muted/50 rounded-lg p-1 border border-border">
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setLocale('th')}
        className={`px-3 py-1 text-xs font-bold rounded-md transition-colors ${
          locale === 'th' ? 'bg-background text-foreground shadow-sm' : 'text-foreground/40 hover:text-foreground'
        }`}
      >
        TH
      </motion.button>
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setLocale('en')}
        className={`px-3 py-1 text-xs font-bold rounded-md transition-colors ${
          locale === 'en' ? 'bg-background text-foreground shadow-sm' : 'text-foreground/40 hover:text-foreground'
        }`}
      >
        EN
      </motion.button>
    </div>
  );
}
