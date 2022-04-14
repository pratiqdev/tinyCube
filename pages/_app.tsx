import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { store } from '../lib/redux/store'
import { Provider } from 'react-redux'
import { SessionProvider } from "next-auth/react"

import UpdateStoreWithSessionData from '../logic-components/UpdateStoreWithSessionData'

import MainSwitch from '../components/MainSwitch'




// Use the <SessionProvider> to improve performance and allow components that call
// `useSession()` anywhere in your application to access the `session` object.
export default function App({ Component, pageProps }: AppProps) {


  return (
    <SessionProvider
      // Provider options are not required but can be useful in situations where
      // you have a short session maxAge time. Shown here with default values.
      session={pageProps.session}
    >
      <Provider store={store} >
        <UpdateStoreWithSessionData />
        <MainSwitch>
          <Component {...pageProps} />
        </MainSwitch>
      </Provider>
    </SessionProvider>
  )
}


// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//   <Provider store={store} >
//     <Component {...pageProps} />
//   </Provider>
//   )
// }

// export default MyApp
