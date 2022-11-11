import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter,Roboto,Roboto_Flex } from '@next/font/google'

const roboto_Flex = Roboto_Flex({
  weight: '400',
})

export default function App({ Component, pageProps }: AppProps) {
  return(
        <main className={roboto_Flex.className}>
          <Component {...pageProps} />
        </main>)
}