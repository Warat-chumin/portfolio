"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers, ExternalLink } from "lucide-react";
import Image from "next/image";
import { Project } from "@/constants/projects";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/LanguageProvider";
import { TechIcon } from "./TechIcon";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  showImage?: boolean;
}

export function ProjectCard({
  project,
  featured = false,
  showImage = true,
}: ProjectCardProps) {
  const { locale, t } = useLanguage();

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn(
        "group relative flex flex-col md:flex-row bg-card rounded-2xl border border-border overflow-hidden transition-all hover:shadow-2xl hover:shadow-accent/5 hover:border-accent/20",
        featured ? "md:col-span-2" : "",
      )}
    >
      <div
        className={cn(
          "flex flex-col p-6 h-full",
          showImage && (featured || project.image) ? "md:w-1/2" : "w-full",
        )}
      >
        <div className="flex items-center gap-2 mb-4">
          <div className="p-2 rounded-lg bg-accent/10 text-accent">
            <Layers size={18} />
          </div>
          <h3 className="text-xl font-noto font-bold tracking-tight">
            {project.title[locale]}
          </h3>
        </div>

        <p className="text-foreground/60 mb-6 grow leading-relaxed">
          {project.description[locale]}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech.name}
              className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent border border-accent/20"
            >
              <TechIcon name={tech.name} size={14} />
              {tech.name}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-auto">
          <a
            href={project.link || `/projects/${project.slug}`}
            target={project.link ? "_blank" : "_self"}
            rel={project.link ? "noopener noreferrer" : ""}
            className="inline-flex items-center gap-2 text-sm font-bold text-accent group-hover:gap-3 transition-all"
          >
            <ExternalLink size={16} /> {t("project.viewLive")}
          </a>
        </div>
      </div>

      {showImage && (featured || project.image) && (
        <div
          className={cn(
            "md:w-1/2 bg-muted relative overflow-hidden",
            !project.image && "bg-linear-to-br from-accent/5 to-transparent",
          )}
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title[locale]}
              width={800}
              height={600}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center p-12 opacity-20 group-hover:opacity-30 transition-opacity">
              <Layers size={200} className="text-accent" />
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
}
