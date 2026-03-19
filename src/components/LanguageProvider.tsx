"use client";

import React, { createContext, useContext, useState } from "react";

type Locale = "th" | "en";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const translations: Record<Locale, Record<string, string>> = {
  th: {
    "nav.home": "หน้าแรก",
    "nav.projects": "ผลงาน",
    "nav.about": "เกี่ยวกับ",
    "nav.contact": "ติดต่อ",
    "hero.name": "วรัชญ์ ชุมอินทร์ (ไวส์)",
    "hero.title":
      'ช่วยออกแบบและพัฒนา <span class="text-gradient">ระบบที่รองรับการขยายตัว</span> เพื่อแก้ปัญหาความซับซ้อนของธุรกิจ',
    "hero.subtitle":
      "Fullstack Software Engineer ผู้ช่วยวางระบบ Microservices ประสิทธิภาพสูง พร้อมประสบการณ์กับยานพาหนะกว่า 50,000 คัน",
    "hero.cta.projects": "ดูผลงาน",
    "hero.cta.learnMore": "เรียนรู้เพิ่มเติม",
    "hero.cta.contact": "พูดคุยกัน",
    "home.stats.experience": "ประสบการณ์ 5+ ปี",
    "home.stats.vehicles": "รองรับรถ 50,000+ คัน",
    "home.stats.stack": "ออกแบบระบบเพื่อการขยายตัว",
    "home.featuredWork.title": "ผลงานที่คัดสรร",
    "home.featuredWork.subtitle":
      "โครงการที่รวบรวมความเชี่ยวชาญด้านการออกแบบระบบ ประสิทธิภาพ และการรองรับการขยายตัว",
    "home.featuredWork.allProjects": "ผลงานทั้งหมด",
    "home.featured.title": "โครงการที่โดดเด่น",
    "home.featured.viewAll": "ดูผลงานทั้งหมด",
    "home.cta.title":
      'กำลังมองหาพาร์ทเนอร์ <span class="text-accent">ช่วยวางระบบ</span> อยู่ใช่ไหม?',
    "home.cta.subtitle":
      "ไม่ว่าคุณจะเริ่มจากศูนย์หรือขยายระบบเพื่อรองรับผู้ใช้นับล้าน ผมช่วยคุณออกแบบสถาปัตยกรรมที่เติบโตไปพร้อมกับธุรกิจคุณได้",
    "home.cta.button": "ทักมาคุยรายละเอียดกันครับ",
    "projects.title": "ผลงานที่ผ่านมา",
    "projects.subtitle":
      "รวบรวมโครงการที่เน้นการแก้ปัญหาความซับซ้อนและการขยายตัวของระบบ",
    "projects.scalability.title": 'เน้นสถาปัตยกรรมที่ <span class="text-accent underline decoration-accent/30 decoration-4 underline-offset-8">ยืดหยุ่นและขยายตัวได้</span>',
    "projects.scalability.desc":
      "ผมมุ่งเน้นการสร้างโครงสร้างพื้นฐานที่รองรับอนาคต ตั้งแต่ Microservices ด้วย Go ที่รองรับคิวจำนวนมาก ไปจนถึงการเพิ่มประสิทธิภาพ Indexing ข้อมูลแบบ Time-series",
    "projects.stats.latency": "ค่าความหน่วง",
    "projects.stats.uptime": "ความเสถียร",
    "projects.stats.requests": "คำขอต่อวินาที",
    "projects.stats.vehicles": "จำนวนพาหนะ",
    "about.title": "เกี่ยวกับผม",
    "about.philosophy.title": "ปรัชญาการทำงาน",
    "about.expertise.title": "ความเชี่ยวชาญหลัก",
    "about.experience.title": "ประสบการณ์การทำงาน",
    "about.education.title": "การศึกษา",
    "about.intro.p1":
      'ผมเป็น <span class="text-foreground font-bold">Fullstack Software Engineer</span> ที่มีประสบการณ์มากกว่า 5 ปี เชี่ยวชาญการพัฒนาระบบ <span class="text-accent font-bold">Web Application และ Microservices</span> ที่รองรับผู้ใช้งานปริมาณมาก',
    "about.intro.p2":
      'ผมมีโอกาสได้ทำงานในโครงการที่ส่งผลกระทบสูง ตั้งแต่ระบบ <span class="text-foreground font-bold">Fleet Management ที่รองรับยานพาหนะกว่า 50,000 คัน</span> ไปจนถึงระบบ ERP และระบบประมวลผลข้อมูลขนาดใหญ่ โดยเน้นการออกแบบสถาปัตยกรรมที่ยืดหยุ่นและดูแลรักษาง่าย',
    "about.intro.p3":
      'ทักษะหลักของผมครอบคลุมทั้ง <span class="text-accent font-bold">React, Go, Node.js และ Laravel</span> ร่วมกับเครื่องมือสมัยใหม่เพื่อส่งมอบซอฟต์แวร์ระดับ Industrial-grade ที่ตอบโจทย์ธุรกิจอย่างแท้จริง',
    "project.overview": "ภาพรวมโครงการ",
    "project.techStack": "เทคโนโลยีที่ใช้",
    "project.architecture": "สถาปัตยกรรมระบบ",
    "project.challenges": "ความท้าทายและวิธีแก้ปัญหา",
    "project.impact": "ผลลัพธ์ที่ได้",
    "project.challenge.label": "โจทย์และความท้าทาย",
    "project.solution.label": "แนวทางการแก้ไข",
    "project.viewLive": "เยี่ยมชมโครงการ",
    "contact.title": "ติดต่อสอบถาม",
    "contact.subtitle":
      "สนใจร่วมงานหรือต้องการปรึกษาด้านเทคนิค สามารถติดต่อผมได้ผ่านช่องทางต่างๆ ด้านล่างนี้ครับ",
    "contact.topics.title": "หัวข้อที่น่าสนใจ",
    "contact.info.title": "ข้อมูลการติดต่อ",
  },
  en: {
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.contact": "Contact",
    "hero.name": "I'm Warat Chum-in (White)",
    "hero.title":
      'Architecting <span class="text-gradient">scalable systems</span> to solve real-world business complexity.',
    "hero.subtitle":
      "Senior Fullstack Software Engineer specializing in high-performance Microservices with a proven track record on 50,000+ vehicles.",
    "hero.cta.projects": "View Projects",
    "hero.cta.learnMore": "Learn More",
    "hero.cta.contact": "Get in Touch",
    "home.stats.experience": "5+ Years Experience",
    "home.stats.vehicles": "50,000+ Vehicles System",
    "home.stats.stack": "Architecture for Scale",
    "home.featuredWork.title": "Featured Work",
    "home.featuredWork.subtitle":
      "Selected projects that showcase my expertise in system design, performance, and scalability.",
    "home.featuredWork.allProjects": "All Projects",
    "home.featured.title": "Featured Projects",
    "home.featured.viewAll": "View All Projects",
    "home.cta.title":
      'Looking for a partner to <span class="text-accent">build scalable systems</span>?',
    "home.cta.subtitle":
      "Whether you're starting from scratch or scaling to millions, I can help you architect a system that grows with your business.",
    "home.cta.button": "Let's Get in Touch",
    "projects.title": "My Projects",
    "projects.subtitle":
      "A collection of projects focused on solving complexity and system scalability.",
    "projects.scalability.title": 'Designing for <span class="text-accent underline decoration-accent/30 decoration-4 underline-offset-8">flexibility and scale</span>.',
    "projects.scalability.desc":
      "My work focuses on building infrastructure that handles expansion. From high-throughput Go microservices to optimized time-series indexing.",
    "projects.stats.latency": "Latency",
    "projects.stats.uptime": "Uptime",
    "projects.stats.requests": "Requests",
    "projects.stats.vehicles": "Vehicles",
    "about.title": "About Me",
    "about.philosophy.title": "My Philosophy",
    "about.expertise.title": "Core Expertise",
    "about.experience.title": "Professional Experience",
    "about.education.title": "Education",
    "about.intro.p1":
      "I'm a <span class='text-foreground font-bold'>Senior Fullstack Software Engineer</span> with over 5 years of experience. I specialize in building high-performance <span class='text-accent font-bold'>Web Applications and Microservices</span> that handle high-scale user traffic.",
    "about.intro.p2":
      "I have a proven track record of designing systems that support <span class='text-foreground font-bold'>50,000+ vehicles</span> in complex logistics ecosystems. My focus is always on creating flexible, maintenance-friendly architectures that solve real-world problems.",
    "about.intro.p3":
      "My core tech stack includes <span class='text-accent font-bold'>React, Go, Node.js, and Laravel</span>. I combine these with modern development tools to deliver industrial-grade software that drives business growth.",
    "project.overview": "Overview",
    "project.techStack": "Tech Stack",
    "project.architecture": "System Architecture",
    "project.challenges": "Challenges & Solutions",
    "project.impact": "Impact & Results",
    "project.challenge.label": "Challenges",
    "project.solution.label": "Solutions",
    "project.viewLive": "Visit Live Site",
    "contact.title": "Get in Touch",
    "contact.subtitle":
      "Interested in collaborating or need technical consultation? Feel free to reach out through the channels below.",
    "contact.topics.title": "What we can talk about",
    "contact.info.title": "Contact Info",
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("locale") as Locale;
      if (saved && (saved === "th" || saved === "en")) {
        return saved;
      }
    }
    return "th";
  });

  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  const t = (key: string) => {
    return translations[locale][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale: handleSetLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
