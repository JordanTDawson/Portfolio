import './globals.css'
import NavBar from './components/navbar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

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
      <body id='#' className={inter.className}>
        <nav className='hidden md:block'>
          <NavBar />
        </nav>
        {children}
      </body>
    </html>
  )
}
