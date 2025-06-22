import { MainLayout } from '@/components/layout/main-layout'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bangladesh International',
  description: 'Bangladesh International',
  generator: 'Bangladesh International',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <MainLayout>
        {children}
        </MainLayout>
        </body>
    </html>
  )
}
