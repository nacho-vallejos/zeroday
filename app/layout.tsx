import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jetbrains-mono'
})

export const metadata: Metadata = {
  title: 'NULL POINTER LABS - Kernel-Level Exploitation & Zero-Day Research',
  description: 'Advanced kernel exploitation research, zero-day vulnerability discovery, and offensive security operations. Ring-0 level research by expert security engineers.',
  keywords: 'kernel exploitation, zero-day research, ring-0, privilege escalation, offensive security, exploit development, vulnerability research, APT operations, kernel debugging, rootkit development',
  authors: [{ name: 'NULL POINTER LABS' }],
  creator: 'NULL POINTER LABS',
  publisher: 'NULL POINTER LABS',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nullpointerlabs.com',
    title: 'NULL POINTER LABS - Kernel Exploitation & Zero-Day Research',
    description: 'Advanced kernel-level research and zero-day vulnerability discovery by expert security engineers.',
    siteName: 'NULL POINTER LABS',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NULL POINTER LABS - Ring-0 Operations',
    description: 'Kernel exploitation research and zero-day vulnerability intelligence',
    creator: '@nullpointerlabs',
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
        <link rel="canonical" href="https://nullpointerlabs.com" />
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
              name: 'NULL POINTER LABS',
              description: 'Kernel-level exploitation research and zero-day vulnerability intelligence',
              url: 'https://nullpointerlabs.com',
              logo: 'https://nullpointerlabs.com/logo.png',
              sameAs: [
                'https://twitter.com/nullpointerlabs',
                'https://github.com/nullpointerlabs',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Security Research',
                email: 'research@nullpointerlabs.com',
              },
              areaServed: 'Worldwide',
              serviceType: ['Kernel Exploitation', 'Zero-Day Research', 'Vulnerability Intelligence', 'Ring-0 Operations', 'Security Audits'],
            }),
          }}
        />
        {children}
      </body>
    </html>
  )
}
