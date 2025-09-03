// app/layout.tsx

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tech4Hack – INNOVATE. COLLABORATE. ELEVATE.',
  description:
    'Join Tech4Hack, a vibrant community of developers, innovators, and tech enthusiasts building the future together.',
  keywords: [
    'Tech4Hack',
    'Hackathon',
    'Developers',
    'Innovation',
    'Coding',
    'Technology',
    'Community',
    'Tech',
    'Tech club',
    'tech4hack',
    'tech4hack club', 
    'tech4hack community', 
    'techhack',
    'Tech4Hack Club',
    'Tech4Hack Community',
    'tech4hack event',
    'tech event'
  ],
  authors: [{ name: 'Avinash Som' , url: 'https://tech4hack.vercel.app/' }],
  creator: 'Avinash Som',
  metadataBase: new URL('https://tech4hack.vercel.app/'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    // apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Tech4Hack – INNOVATE. COLLABORATE. ELEVATE.',
    description:
      'Tech4Hack unites developers and tech enthusiasts to create innovative solutions through collaboration.',
    url: 'https://tech4hack.vercel.app/',
    siteName: 'Tech4Hack',
    images: [
      {
        url: '/og-image.png', // Place in /public
        width: 1200,
        height: 630,
        alt: 'Tech4Hack Open Graph Image',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tech4Hack – INNOVATE. COLLABORATE. ELEVATE.',
    description:
      'Join the Tech4Hack community to innovate, collaborate, and elevate your tech skills.',
    images: ['/favicon.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
