import type { Metadata } from "next"
import { Inter } from "next/font/google"
import GoogleAnalytics from "components/GoogleAnalytics"
import { PAGE_METAS } from "constants/meta"
import "styles/globals.css"
import "modern-css-reset/dist/reset.min.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: PAGE_METAS.HOME.TITLE,
  description: PAGE_METAS.HOME.DESCRIPTION,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const className = `${inter.className} flex flex-col min-h-screen`
  return (
    <html lang="ja">
      <head>
        <GoogleAnalytics />
      </head>
      <body className={className}>{children}</body>
    </html>
  )
}
