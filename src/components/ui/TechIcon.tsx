"use client";

import React, { useState } from "react";
import { HelpCircle, Layers } from "lucide-react";

interface TechIconProps {
  name: string;
  size?: number;
  className?: string;
}

/**
 * TechIcon renders high-quality colored tech logos using Simple Icons CDN.
 * Fallbacks to a generic icon if the logo fails to load.
 */
export function TechIcon({ name, size = 20, className = "" }: TechIconProps) {
  const [error, setError] = useState(false);

  // Map common names to Simple Icons slugs
  const slugMap: Record<string, string> = {
    react: "react",
    "react.js": "react",
    "next.js": "nextdotjs",
    nextjs: "nextdotjs",
    typescript: "typescript",
    "vue.js": "vuedotjs",
    "tailwind css": "tailwindcss",
    tailwind: "tailwindcss",
    "go (golang)": "go",
    go: "go",
    "node.js": "nodedotjs",
    nodejs: "nodedotjs",
    "node.js (express)": "nodedotjs",
    "go (gin, fiber)": "go",
    "php (laravel)": "laravel",
    laravel: "laravel",
    postgresql: "postgresql",
    mysql: "mysql",
    mongodb: "mongodb",
    redis: "redis",
    kafka: "apachekafka",
    docker: "docker",
    aws: "amazonaws",
    "aws / google cloud": "amazonaws",
    "google cloud": "googlecloud",
    firebase: "firebase",
    flutter: "flutter",
    smartphone: "android",
    "system design": "diagramsdotnet",
    microservices: "kubernetes",
    github: "github",
    linkedin: "linkedin",
    "framer motion": "framer",
    redux: "redux",
    zustand: "redux",
    mui: "mui",
    "material ui": "mui",
    antd: "antdesign",
    "ant design": "antdesign",
    "styled components": "styledcomponents",
    postman: "postman",
    git: "git",
    grpc: "grpc",
    "restful api": "openapiinitiative",
    "rest api": "openapiinitiative",
    "clean architecture": "saltstack",
    "agile / scrum": "atlassian",
  };

  if (name.toLowerCase() === "clean architecture") {
    return <Layers size={size} className={className} />;
  }

  const slug =
    slugMap[name.toLowerCase()] ||
    name.toLowerCase().replace(/\s+/g, "").replace(/\./g, "dot");

  // Force official colors for some that might look generic or have poor contrast
  const colorMap: Record<string, string> = {
    antdesign: "0170FE", // Ant Design Blue
    mui: "007FFF", // MUI Blue
  };

  const color = colorMap[slug] ? `/${colorMap[slug]}` : "";
  const iconUrl = `https://cdn.simpleicons.org/${slug}${color}`;

  if (error) {
    return <HelpCircle size={size} className={className} />;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={iconUrl}
      alt={`${name} icon`}
      width={size}
      height={size}
      className={className}
      onError={() => setError(true)}
      style={{
        width: size,
        height: size,
        objectFit: "contain",
      }}
    />
  );
}
