import { Inter } from 'next/font/google'
import { Suspense } from 'react'
import WhatsAppButton from '@/components/WhatsAppButton'
import Footer from '@/components/Footer'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import FacebookPixel from '@/components/FacebookPixel'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function SEOLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAnalytics />
        <Suspense fallback={null}>
          <FacebookPixel />
        </Suspense>

        {children}

        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
