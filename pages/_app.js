import MainMenu from '../components/MainMenu'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MainMenu />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
