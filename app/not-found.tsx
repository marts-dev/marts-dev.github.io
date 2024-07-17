import { AuroraBackground } from '@/components/ui/aurora-background'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <section>
      <AuroraBackground />
      <div
        className="relative flex flex-col gap-4 items-center justify-center px-4 h-screen bg-transparent"
      >
        <h1 className="text-3xl md:text-7xl font-bold text-gray-700 dark:text-white text-center">404</h1>
        <h2 className="font-light text-base md:text-4xl text-gray-700 dark:text-neutral-200 py-4">Compiling...</h2>
        <p className="font-extralight text-base text-center md:text-2xl text-gray-700 dark:text-neutral-200 py-4">The page you are looking for does not exist.
          How you got here is a mystery. But you can click the button below
          to go back to the homepage.
        </p>
        <Link className="transition-all focus:scale-110 hover:scale-110" href="/">Return Home</Link>
      </div>
    </section>
  )
}
