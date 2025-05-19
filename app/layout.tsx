import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Navbar from "@/components/navbar"
import Glimpses from "@/components/Glimpses";
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MANGALAM – Revolution Unleashed!",
  description: "Bridging Bytes, Beats, and Battlegrounds!!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <Navbar />
        <main>{children}</main>
        <Glimpses/>
        <Footer/>
      </body>
    </html>
  )
}
