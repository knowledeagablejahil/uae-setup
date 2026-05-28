import './globals.css'
import Layout from '@/components/Layout'

export const metadata = {
  title: 'UAE Business Setup',
  description: 'Professional business setup services in UAE',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
