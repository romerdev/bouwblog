import './globals.css'
import { Epilogue } from 'next/font/google'

const epilogue = Epilogue({ subsets: ['latin'] })

export const metadata = {
  title: 'Romer\'s Bouwblog',
  description: 'In september start ik met de opleiding Built Environment op de Hogeschool van Amsterdam. Op deze website hou ik bij wat ik allemaal leer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className={epilogue.className}>{children}</body>
    </html>
  )
}
