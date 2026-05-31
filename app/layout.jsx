import Navbar from '@/components/Navbar'
import './globals.css'

export const metadata = {
  title: 'Elevate 360 | Business Setup in UAE',
  description: 'Expert business setup assistance in UAE',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
