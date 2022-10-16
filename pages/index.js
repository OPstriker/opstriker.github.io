import Head from 'next/head'
import { IconMoonStars } from '@tabler/icons';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>OP</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-5 md:px-20 lg:40px dark:bg-op_bg transition-colors duration-300">
        <section className='min-h-screen'>
          <nav className='pt-10 mb-10 flex justify-between'>
            <h1 className="text-2xl dark:text-white pt-2">Welcome!</h1>
            <ul className='flex items-center'>
              <li>
                <IconMoonStars onClick={() => setDarkMode(!darkMode)} className="cursor-pointer dark:stroke-white" />
              </li>
              <li className="inline-flex justify-evenly">
                <a className="inline-flex bg-github_bg text-white py-3 px-4 border-2  dark:border-gray-700 rounded-md ml-4 " href='https://github.com/OPstriker' target='_blank' rel="noopener noreferrer">
                <svg className="relative mr-2 fill-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  GitHub
                </a>
              </li>
            </ul>
          </nav>
          <div className=" relative mb-4 mx-auto md:pt-200 border-2 border-gray-400 rounded-full w-60 h-60 dark:border-none">
            <img className='mx-auto rounded-full' src='https://github.com/OPstriker.png?size=250' />
          </div>
          <div className="text-center">
            <h2 className="text-3xl py-2 font-medium dark:text-white">
              OPstriker
            </h2>
            <h3 className="text-xl py-4 dark:text-white">
              A Self-Taught Dev, High-schooler, and Tech-Enthusiast.
            </h3>
          </div>
        </section>
      </main>
    </div>
  )
}