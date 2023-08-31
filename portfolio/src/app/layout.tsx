import './globals.css'
import NavBar from './components/Navbar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ScrollProvider } from './contexts/ScrollContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://jordandawson.vercel.app/'),
  openGraph: {
    title: "Jordan Dawson's Portfolio",
    description: "Jordan Dawson's Portfolio",
    url: 'https://jordandawson.vercel.app/',
    siteName: "Jordan Dawson's Portfolio"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body id='#' className={inter.className}>
        <ScrollProvider>
          <nav className='hidden md:block'>
            <NavBar />
          </nav>
          {children}
        </ScrollProvider>
      </body>
    </html>
  )
}
