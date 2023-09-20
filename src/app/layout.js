import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TRON REMAKE',
  description: 'Unity TRON REMAKE',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <link rel="icon" href="/favicon.svg" type="image/svg+xml"></link>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
