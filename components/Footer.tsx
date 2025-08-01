"use client"

import { useTheme } from 'next-themes'
import { JSX } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = (): JSX.Element => {

  const { theme } = useTheme()

  return (
    <div className='flex px-5 md:px-0 py-8 justify-between items-center border-t border-gray mt-10'>
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
      <div className='flex flex-col md:flex-row dark-gray md:space-x-10'>
        <Link href={"/"}>
          Terms of Use
        </Link>
        <Link href={"/"}>
          Privacy Policy
        </Link>
        <Link href={"/"}>
          Cookies Policy
        </Link>
      </div>
    </div>
  )
}

export default Footer