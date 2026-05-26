"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const isProd = process.env.NODE_ENV === 'production';
const prefix = isProd ? '/festus-portfolio' : '';

const links = [
    {
      title: "About",
      path: "/",
      isInternal: true,
    },
    {
      title: "Publications",
      path: "/#publications",
      isInternal: true,
    },
    {
      title: "Projects",
      path: "/#projects",
      isInternal: true,
    },
    {
      title: "CV",
      path: `${prefix}/festus_CV.pdf`,
      isInternal: false,
    },
  ];

const Links = () => {
    const pathName = usePathname();

    return (
        <div className='sm:block flex flex-wrap'>
            {links.map((link) => (
                link.isInternal ? (
                    // Internal Route/Hash Links
                    <Link
                        key={link.title}
                        href={link.path}
                        className={`px-6 text-sm font-semibold hover:text-blue-300`}
                    >
                        {link.title}
                    </Link>
                ) : (
                    // External/Static File Links (CV)
                    <a
                        key={link.title}
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 text-sm font-semibold hover:text-blue-300"
                    >
                        {link.title}
                    </a>
                )
            ))}
        </div>
    )
}

export default Links;