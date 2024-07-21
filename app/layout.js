import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import SideNav from '@/components/SideNav'
import Icon_Preview from '@/components/Icon_Preview'
import { ValuesProvider } from '@/context/Context'
import DownloadBtn from '@/components/DownloadBtn'
const inter = Inter({ subsets: ['latin'] })

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
              <ValuesProvider>
                <div className=" flex justify-end p-2 border-b-2 border-slate-100   ">
                  <DownloadBtn />
                </div>

                <div className=" p-5 flex flex-col   h-screen sm:grid  sm:grid-cols-6 gap-1 ">
                  <div className="  sm:col-span-2 border-r-2 border-slate-100  ">
                    {children}
                  </div>

                  <div className="  sm:col-span-3 border-r-2 border-slate-100">
                    <Icon_Preview />
                  </div>
                  <div className="">Ads COME Here..................</div>
                </div>
              </ValuesProvider>
            </main>
          </>
        </div>
      </body>
    </html>
  )
}
