import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import { Header } from '@/components'
import { Layout } from "@/components/Layout"
import { WagmiProvider } from './wagmi'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'See me',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <WagmiProvider>
            <Layout>
              {children}
            </Layout>
          </WagmiProvider>
        </Providers>
      </body>
    </html>
  )
}
