import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export const metadata: Metadata = {
  title: 'Etobicoke Windows & Doors | Premium Installation Toronto',
  description: 'Toronto\'s premier window and door installer. Serving Etobicoke, Mississauga, and Greater Toronto since 2009. A+ BBB rated, Energy Star certified.',
  keywords: 'windows doors etobicoke toronto installation replacement casement entry patio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="max-w-[1440px] mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
