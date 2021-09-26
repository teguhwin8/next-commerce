<<<<<<< HEAD
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
=======
import { useEffect } from "react"
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side")
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])
>>>>>>> parent of aa0160e (I like tailwindcss)
  return <Component {...pageProps} />
}

export default MyApp
