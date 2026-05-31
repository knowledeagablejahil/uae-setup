'use client'

import '@/app/globals.css'
import Navbar from '@/components/Navbar'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}
