import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { useRouter } from 'next/router'
import Typewriter from 'typewriter-effect'

const LayoutWrapper = ({ children }) => {
  const router = useRouter()
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-10">
          <div>
            <Link href="/" aria-label="Hubert Wasier website">
              <div className="text-primary-color-300 dark:text-primary-color flex items-center justify-between font-semibold">
                {`~${router.asPath}`}{' '}
                <Typewriter
                  options={{
                    strings: [],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => {
                const isActive = router.asPath === link.href
                return (
                  <Link
                    key={link.title}
                    href={link.href}
                    className={
                      isActive
                        ? 'cursor-pointer rounded-md p-1 px-4 py-[0.10rem] font-semibold font-medium text-gray-800 duration-100 hover:bg-zinc-100 dark:text-gray-100 dark:hover:bg-zinc-800 sm:p-2'
                        : 'cursor-pointer rounded-md p-1 px-4 py-[0.10rem] font-normal font-bold text-gray-600 duration-100 hover:bg-zinc-100 dark:text-gray-100 dark:hover:bg-zinc-800 sm:p-2'
                    }
                  >
                    {link.title}
                  </Link>
                )
              })}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
