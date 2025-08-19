import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Manrope } from "next/font/google"
import "./globals.css"
import CustomCursor from "@/components/cursor"

const manrope = Manrope({ subsets: ["latin"] })

export const metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${manrope.variable} antialiased`}>
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
