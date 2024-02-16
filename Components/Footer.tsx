import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { footerLinks } from '@/constants'

export default function Footer() {
  return (
    <footer className='flex  flex-col text-black-100 mt-5 border-t border-gray-100'>
      <div className="flex flex-col md:flex-row flex-wrap justify-between gap-5 md:gap-[100px] lg:gap-[200px] px-10 sm:px-16 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image src="/logo.svg" width={118} height={18} className='object-contain' alt='logo' />
          <p className='text-base text-gray-700'>
            Carhub 2023 <br />
            All Rights Reserved &copy;
          </p>
        </div>
        <div className="flex-1 w-full flex justify-start md:justify-between flex-wrap  gap-10">
          {footerLinks.map((item) => (
            <div key={item.title} className="flex flex-col gap-6 text-base min-w-[170px]">
              <h3 className="font-bold">{item.title}</h3>
              <div className="flex flex-col gap-5">
                {item.links.map(link => (
                  <Link
                    href={link.url}
                    className="text-gray-500"
                  >{link.title}</Link>
                ))}
              </div>
            </div>
          ))}

        </div>

      </div>
      <div className="flex flex-col sm:flex-row justify-between items-start gap-x-7 flex-wrap mt-2 border-t border-gray-100 px-6 sm:px-16 py-10">
        <p>@2023 CarHub. All rights reserved</p>
        <div className="footer__copyrights-link text-gray-500">
          <Link href='/'> Privacy & Policy</Link>
          <Link href='/'> Terms & Condition</Link>
        </div>
      </div>
    </footer>
  )
}
