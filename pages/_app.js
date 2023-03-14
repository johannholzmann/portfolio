import '../styles/globals.css'
import "../styles/tailwind.css"

import { ThemeProvider } from 'next-themes';
import Layout from '../components/layout/layout.js';
import { Analytics } from "@vercel/analytics/react"

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme='dark' attribute='class'>
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
