import './globals.css'
import { UserProvider } from '@auth0/nextjs-auth0/client';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Modern Market Manager',
  description: 'E-commerce SaaS platform for manging online store projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <UserProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </UserProvider>
  )
}
