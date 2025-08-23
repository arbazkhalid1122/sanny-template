import "./globals.css"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Playwrite_CA, Caveat } from "next/font/google"

// configure Playwrite CA
const playwriteCA = Playwrite_CA({
  subsets: ["latin"],
  variable: "--font-playwrite",
  weight: ["100", "200", "300", "400"], // choose weights you need
})

// configure Caveat (handwritten font)
const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["400", "500", "600", "700"],
})

export const metadata = {
  title: "Fractional GTM",
  description: "Created with v0",
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({
  children,
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${playwriteCA.variable} ${caveat.variable} antialiased`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  )
}
