import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { CustomButton } from '.'

export default function Navbar() {
  return (
    <header className="w-full absolute z-10">
      <nav className='max-w-[1440px] mx-auto flex justify-between items-center px-6 sm:px-16'>
        <Link href={'/'} className='relative items-center justify-center'>
          <Image src='/logo.svg' alt="Logo"
            width={118}
            height={18}
            className='object-contain'
          />
        </Link>
        <CustomButton title='Sign in'
          btnType='button'
          containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]' />
      </nav>

    </header>
  )
}
