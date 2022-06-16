import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import Link from 'next/link'

export default function Offres() {
  return (
    <>
      <PageSEO title={`Contact - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Nos offres
          </h1>
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
