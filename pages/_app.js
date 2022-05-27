import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'

import { ThemeProvider } from 'next-themes';
import Layout from '../components/layout/layout.js';
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
