import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import SideNav from '@/components/SideNav'
import { ArrowDownToLine } from 'lucide-react'
import IconController from '@/components/IconController'
import Icon_Preview from '@/components/Icon_Preview'
import BackgroundController from '@/components/BackGroundController'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {' '}
        <div className="h-full relative ">
          <div className=" hidden h-full md:flex md:w-48  md:flex-col md:fixed md:inset-y-0 z-[80] bg-white ">
            <div className=" text-green-500 h-full border-r-2 border-slate-100">
              <SideNav />
            </div>
          </div>
          <>
            <Navbar />
            <main className=" md:pl-48 relative">
              <div className=" flex justify-end p-2 border-b-2 border-slate-100   ">
                {' '}
                <button
                  class="select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  <div className=" flex items-center gap-4 ">
                    {' '}
                    <h3>Download</h3> <ArrowDownToLine />
                  </div>
                </button>
              </div>

              <div className=" p-5 flex flex-col   h-screen sm:grid  sm:grid-cols-6 gap-1 ">
                <div className="  sm:col-span-2 border-r-2 border-slate-100  ">
                  {children}
                </div>

                <div className="  sm:col-span-3 border-r-2 border-slate-100">
                  <Icon_Preview />
                </div>
                <div className="">Adsense</div>
              </div>
            </main>
          </>
        </div>
      </body>
    </html>
  )
}
