import MainApp from "../components/MainApp";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
      <MainApp>
          <Component {...pageProps} />
      </MainApp>
  )
}

export default MyApp
