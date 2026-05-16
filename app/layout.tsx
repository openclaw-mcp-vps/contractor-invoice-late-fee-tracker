import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Invoice Late Fee Tracker — Automate Late Fees for Overdue Invoices',
  description: 'Automatically track invoice payment status and apply late fees based on your contract terms. Built for freelancers, consultants, and small agencies.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="40557d65-6a6c-47b7-a153-13e65dc3a66e"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
