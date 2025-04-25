import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DocSyne - Quality Healthcare',
  description: 'Expert care for your health',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
