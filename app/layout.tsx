import { Inter } from "next/font/google"
import "@/styles/global.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"]
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="w-full min-h-[100vh]">{children}</body>
    </html>
  )
}
