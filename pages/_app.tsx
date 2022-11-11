import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Roboto, Roboto_Flex, Roboto_Mono, Roboto_Serif, Roboto_Slab,} from '@next/font/google'

const roboto = Roboto({
  weight: '400',
})

export default function App({ Component, pageProps }: AppProps) {
  return(
        <main className={roboto.className}>
          <Component {...pageProps} />
        </main>)
}