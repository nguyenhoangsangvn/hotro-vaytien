import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Roboto, Inter} from '@next/font/google'

const inter = Inter({
weight: '500',
})

export default function App({ Component, pageProps }: AppProps) {
  return(
        <main className={inter.className}>
          <Component {...pageProps} />
        </main>
        )
}