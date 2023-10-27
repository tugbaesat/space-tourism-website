import { barlow_condensed } from "./fonts"
import './globals.css'

export const metadata = {
  title: 'Space Tourism',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={barlow_condensed.className}>{children}</body>
    </html>
  )
}
