import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { PAGE_METAS } from "constants/meta"
import "styles/globals.css"

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
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
