import './globals.css'
import NavBar from './components/navbar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ScrollProvider } from './contexts/ScrollContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Jordan Dawson's Portfolio",
  description: "Jordan Dawson's Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        <title>Jordan Dawson&apos;s Portfolio</title>
        <meta name='title' content='Jordan Dawson&apos; Portfolio'></meta>
        <meta name='description' content='Jordan Dawson&apos;s Portfolio'></meta>
      </head>
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
