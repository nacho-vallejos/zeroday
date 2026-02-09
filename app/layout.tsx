import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jetbrains-mono'
})

export const metadata: Metadata = {
  title: 'VOID SECURITY LABS - Elite Red Team Operations & Offensive Security Tools',
  description: 'Professional Red Team services, custom malware development, security tool creation, and advanced penetration testing training. Built by expert engineers and security researchers.',
  keywords: 'red team, penetration testing, malware development, offensive security, security tools, cybersecurity training, exploit development, threat simulation, custom exploits, security audits',
  authors: [{ name: 'VOID SECURITY LABS' }],
  creator: 'VOID SECURITY LABS',
  publisher: 'VOID SECURITY LABS',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://voidsecuritylabs.com',
    title: 'VOID SECURITY LABS - Elite Red Team & Offensive Security',
    description: 'Professional Red Team operations, custom malware tools, and advanced security training by expert engineers.',
    siteName: 'VOID SECURITY LABS',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VOID SECURITY LABS - Elite Red Team Operations',
    description: 'Professional offensive security services and custom tool development',
    creator: '@voidsecuritylabs',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://voidsecuritylabs.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body className={jetbrainsMono.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'VOID SECURITY LABS',
              description: 'Elite Red Team operations and offensive security tool development',
              url: 'https://voidsecuritylabs.com',
              logo: 'https://voidsecuritylabs.com/logo.png',
              sameAs: [
                'https://twitter.com/voidsecuritylabs',
                'https://github.com/voidsecuritylabs',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Sales',
                email: 'contact@voidsecuritylabs.com',
              },
              areaServed: 'Worldwide',
              serviceType: ['Red Team Operations', 'Penetration Testing', 'Security Tool Development', 'Malware Analysis Training'],
            }),
          }}
        />
        {children}
      </body>
    </html>
  )
}
