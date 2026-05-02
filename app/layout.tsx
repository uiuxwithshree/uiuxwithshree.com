import type { Metadata } from 'next'
import './globals.css'
import {
  Cedarville_Cursive,
  Covered_By_Your_Grace,
  DM_Serif_Display,
  Instrument_Sans,
  Playfair_Display,
  Syne,
  Yatra_One,
} from 'next/font/google'

const handwriting = Covered_By_Your_Grace({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-handwriting',
  display: 'swap',
})

const yatraOne = Yatra_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-yatra',
  display: 'swap',
})

const cedarville = Cedarville_Cursive({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-cedarville',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['italic', 'normal'],
  variable: '--font-playfair',
  display: 'swap',
})

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
})

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Shree Chaurasia | Product Designer',
  description: 'Product Designer with 2+ years of experience. Based in Greater Noida, India. Specializing in UI/UX design, user research, and innovative product solutions.',
  keywords: ['Product Designer', 'UI/UX Designer', 'User Experience', 'User Interface', 'Design Portfolio', 'Greater Noida', 'India'],
  authors: [{ name: 'Shree Chaurasia' }],
  creator: 'Shree Chaurasia',
  publisher: 'Shree Chaurasia',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.uiuxwithshree.com'), // Replace with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Shree Chaurasia | Product Designer',
    description: 'Product Designer with 2+ years of experience. Based in Greater Noida, India. Specializing in UI/UX design, user research, and innovative product solutions.',
    url: '/',
    siteName: 'Shree Chaurasia Portfolio',
    images: [
      {
        url: '/images/og-image.jpg', // You'll need to create this image
        width: 1200,
        height: 630,
        alt: 'Shree Chaurasia | Product Designer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shree Chaurasia | Product Designer',
    description: 'Product Designer with 2+ years of experience. Based in Greater Noida, India.',
    images: ['/images/og-image.jpg'], // Same as OG image
    creator: '@_shreely_', // Replace with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const fontVariables = [
    instrumentSans.variable,
    dmSerifDisplay.variable,
    syne.variable,
    handwriting.variable,
    playfair.variable,
    yatraOne.variable,
    cedarville.variable,
  ].join(' ')

  return (
    <html lang="en" className={fontVariables}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Shree Chaurasia",
              "jobTitle": "Product Designer",
              "description": "Product Designer with 2+ years of experience. Based in Greater Noida, India. Specializing in UI/UX design, user research, and innovative product solutions.",
              "url": "https://www.uiuxwithshree.com",
              "sameAs": [
                "https://linkedin.com/in/shree-chaurasia",
                "https://twitter.com/_shreely_",
                "https://behance.net/shreechaurasia"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Greater Noida",
                "addressCountry": "India"
              },
              "knowsAbout": ["UI/UX Design", "Product Design", "User Research", "Prototyping", "Design Systems"]
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
