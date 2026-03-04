import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

const projects = [
  {
    name: 'Restaurant Booking App',
    description:
      'A polished full-stack restaurant booking application built with PHP/Laravel, React, Inertia.js, and Tailwind CSS at Avanço Implacavel.',
    initials: 'RB',
    color: 'bg-teal-500',
  },
  {
    name: 'oseubackoffice Platform',
    description:
      'Full-featured web application built with the Laravel framework — from database design through deployment, with comprehensive automated test suites and CI/CD workflows in GitLab.',
    initials: 'OB',
    color: 'bg-indigo-500',
  },
  {
    name: 'oseubackoffice Mobile',
    description:
      'Cross-platform mobile app (iOS & Android) built with React Native, consuming the Laravel REST API for seamless integration with the web platform.',
    initials: 'OM',
    color: 'bg-purple-500',
  },
]

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Things I\u2019ve built throughout my career.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Things I've built throughout my career."
      intro="These are the main projects I've worked on professionally. From full-stack web applications to cross-platform mobile apps, each one taught me something new about building reliable software."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div
              className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold text-white ${project.color}`}
            >
              {project.initials}
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              {project.name}
            </h2>
            <Card.Description>{project.description}</Card.Description>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
