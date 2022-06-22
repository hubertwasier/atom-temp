import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import Image from 'next/image'
import { gsap } from 'gsap'
import React, { useRef, useEffect } from 'react'

import NewsletterForm from '@/components/NewsletterForm'
import Button from '@/components/Button'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  // store a reference to the box div
  const boxRef = useRef()

  // wait until DOM has been rendered
  useEffect(() => {
    gsap.to(boxRef.current, {
      rotation: '+=360',
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
    })
  })
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 ">
        <div className="flex flex-nowrap items-start justify-between space-y-2 xl:gap-x-8 xl:space-y-0">
          <div className="max-w-none space-y-2 pt-6 pb-8 pt-8 pb-8 dark:prose-dark md:space-y-5 xl:col-span-2">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              {siteMetadata.author}
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              {siteMetadata.description}
            </p>
          </div>
          <div className="flex flex-col items-center pt-8" ref={boxRef}>
            <Image
              src={siteMetadata.image}
              alt={`avatar de ${siteMetadata.author}`}
              width="120px"
              height="120px"
              className="h-48 w-48 rounded-full "
            />
          </div>
        </div>
        <div className="flex flex-col items-start items-center space-y-2 py-8 text-center">
          <p className="pt-4 text-2xl font-semibold">Design. Build. Improve.</p>
          <h2 className="leading-16 max-w-3xl pt-4 text-6xl font-bold">
            Je crée les magnifiques sites Web que vos clients adoreront
          </h2>
          <Link href="/contact">
            <a className="btn btn-primary mt-8 flex rounded-lg bg-primary-500 px-3 py-2 font-semibold text-white transition-all hover:scale-125 dark:hover:text-gray-200">
              Allons y!
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}
