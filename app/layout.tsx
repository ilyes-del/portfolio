import type React from "react"
import type { Metadata } from "next"
// Removed Google font imports due to build-time fetch failures. Using system fonts instead.
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from '@/components/ui/toaster'
import "./globals.css"

// If you want to use custom fonts, consider adding local font files
// and loading them with next/font/local or ensure Google Fonts fetch is allowed

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Professional portfolio website",
  icons: {
    icon: [
      {
        url: "/1730544647500.jpeg",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
