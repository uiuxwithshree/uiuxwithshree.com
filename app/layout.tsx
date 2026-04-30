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
  title: 'Shree Chaurasia — Product Designer',
  description: 'Product Designer with 2+ years of experience. Based in Greater Noida, India.',
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
      <body>{children}</body>
    </html>
  )
}
