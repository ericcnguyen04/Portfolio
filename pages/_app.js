import '@/styles/globals.css'
import NavBar from '@/components/Navbar'

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* navbar above */}
        <NavBar />
        <Component {...pageProps}/>
      {/* footer below */}
    </>
  )
}
