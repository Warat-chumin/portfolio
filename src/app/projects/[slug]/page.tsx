import React from 'react';
import { notFound } from 'next/navigation';
import { projects } from '@/constants/projects';
import ProjectClient from './ProjectClient';

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectClient project={project} />;
}
