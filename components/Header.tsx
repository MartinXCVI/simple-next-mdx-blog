"use client"

import { JSX } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'

const links = [{ displayName: "Blog", href: "/blog" }]

const Header = (): JSX.Element => {

  const { theme, setTheme } = useTheme()

  const handleToggleTheme = (): void => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <div className='flex justify-between items-center py-9 px-5 md:px-0'>
      <Link
        href={'/'}
        className='flex space-x-2 items-center'
      >
        <Image
          src={ theme === "light" ? "/light-logo.png" : "/dark-logo.png" }
          width={36}
          height={36}
          alt='logo'
          priority
        />
        <div className='text-2xl'>
          Next <span className='font-bold'>Blog</span>
        </div>
      </Link>
      <div className='flex space-x-10'>
        <nav className='space-x-10'>
          {links.map((link, index)=> (
            <Link
              href={link.href}
              key={index}
            >
              {link.displayName}
            </Link>
          ))}
        </nav>
        <button
          type='button'
          onClick={handleToggleTheme}
          className='focus:outline-none'
          aria-label='Toggle theme'
        >
          <Image
            src={theme === "light" ? "/light-toggle.svg" : "dark-toggle.svg"}
            alt='theme toggle'
            width={48}
            height={28}
            priority
          />
        </button>
      </div>
    </div>
  )
}

export default Header