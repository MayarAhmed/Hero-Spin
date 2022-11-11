import { HeroContextProvider } from "../Context/HeroContext";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <HeroContextProvider>
      <Component {...pageProps}/>
    </HeroContextProvider>
  );
}

export default MyApp;
