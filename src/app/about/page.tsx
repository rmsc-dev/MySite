import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I\u2019m Ricardo Cruz. I live in the Algarve, Portugal, where I build things for the web.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src="/my_foto.png"
              alt="Ricardo Cruz"
              width={800}
              height={800}
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I&apos;m Ricardo Cruz. I live in the Algarve, Portugal, where I
            build things for the web.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I&apos;m a full-stack developer with over two years of
              professional experience building web and mobile applications. My
              core stack is PHP/Laravel on the back-end and React on the
              front-end, though I&apos;ve also worked with Python, Go, Java, and
              C/C++.
            </p>
            <p>
              My career in tech started from a different angle — I spent nearly
              two years as a telecommunications technician, installing and
              repairing fibre-optic networks. That hands-on experience gave me a
              solid understanding of infrastructure from the ground up, which
              later influenced my approach to server administration and DevOps.
            </p>
            <p>
              At oseubackoffice, I architected and developed a full-featured web
              application from database design through deployment, built a
              cross-platform mobile app with React Native, wrote comprehensive
              test suites, and administered Linux servers — handling
              configuration, security hardening, and ongoing maintenance.
            </p>
            <p>
              I&apos;m currently completing my Computer Engineering degree at
              Instituto Superior Manuel Teixeira Gomes in Portim&atilde;o, while
              working as a full-stack developer at Avan&ccedil;o Implacavel,
              where I&apos;m building a restaurant booking application with
              Laravel, React, Inertia.js, and Tailwind CSS.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://github.com/rmsc-dev"
              icon={GitHubIcon}
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/ricardo-cruz-dev/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:maniaricardo0@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              maniaricardo0@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
