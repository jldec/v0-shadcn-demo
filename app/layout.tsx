import type React from "react"
import "@/styles.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Shadcn Demo",
  description: "A minimal shadcn/ui starter with buttons and a dark mode toggle",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
