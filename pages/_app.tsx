import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Roboto} from '@next/font/google'
import { Analytics } from '@vercel/analytics/react';

const roboto = Roboto({
weight: '400',
})

export default function App({ Component, pageProps }: AppProps) {
  return(
        <main className={roboto.className}>
          <Component {...pageProps} />
          <Analytics />
        </main>



        )
}