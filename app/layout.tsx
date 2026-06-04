import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { LangProvider } from '@/lib/lang-context'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const SITE_URL = 'https://www.straverso.com'
const TITLE = 'Straverso – Vi gjør det komplekse enkelt og intuitivt.'
const DESCRIPTION =
  'Vi utvikler apper og arbeidsverktøy for miljøer der standardløsninger ofte blir for enkle. Med dyp innsikt, AI og praktisk produktutvikling lager vi løsninger som er raskere å bruke og enkle å forstå.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'nb_NO',
    alternateLocale: 'en_US',
    url: SITE_URL,
    siteName: 'Straverso',
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Straverso – Vi gjør det komplekse enkelt og intuitivt.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-light-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
}

const ORGANIZATION_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Straverso AS',
  legalName: 'Straverso AS',
  url: SITE_URL,
  logo: `${SITE_URL}/apple-icon.png`,
  image: `${SITE_URL}/og-image.png`,
  email: 'post@straverso.com',
  description:
    'Norsk tech-selskap som bygger AI-drevne apper for nisjer der standardløsninger ofte blir for enkle.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Tønsberg',
    addressCountry: 'NO',
  },
  taxID: '937560834',
  duns: '348438692',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'support@straverso.com',
      availableLanguage: ['Norwegian', 'English'],
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="no" className={`${playfair.variable} ${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSONLD) }}
        />
        <LangProvider>{children}</LangProvider>
        {process.env.NODE_ENV === 'production' && (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        )}
      </body>
    </html>
  )
}
