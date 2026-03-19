export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillGroup {
  category: { th: string; en: string };
  icon: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: { th: "Frontend", en: "Frontend" },
    icon: "Monitor",
    skills: [
      { name: "React.js", icon: "Atom" },
      { name: "Next.js", icon: "Zap" },
      { name: "TypeScript", icon: "Code2" },
      { name: "Vue.js", icon: "Code2" },
      { name: "Tailwind CSS", icon: "Palette" },
      { name: "Material UI", icon: "Layers" },
      { name: "Ant Design", icon: "Layers" },
      { name: "Styled Components", icon: "Palette" },
    ],
  },
  {
    category: { th: "Backend", en: "Backend" },
    icon: "Terminal",
    skills: [
      { name: "Node.js (Express)", icon: "Server" },
      { name: "Go (Gin, Fiber)", icon: "Cpu" },
      { name: "Laravel", icon: "Globe" },
    ],
  },
  {
    category: { th: "Database", en: "Database" },
    icon: "Database",
    skills: [
      { name: "MySQL", icon: "Database" },
      { name: "MongoDB", icon: "Database" },
      { name: "PostgreSQL", icon: "Database" },
    ],
  },
  {
    category: { th: "Tools & แนวทางการพัฒนา", en: "Tools & Development" },
    icon: "Box",
    skills: [
      { name: "Docker", icon: "Box" },
      { name: "Git", icon: "Code2" },
      { name: "Postman", icon: "Link" },
      { name: "REST API", icon: "Link" },
      { name: "Microservices", icon: "Box" },
      { name: "Clean Architecture", icon: "Layers" },
      { name: "Agile / Scrum", icon: "Users" },
    ],
  },
];
