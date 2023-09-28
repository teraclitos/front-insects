import { TokenProvider } from './context/token'
import './css/app.css'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import PageRoutes from './Routes'
import { LoaderProvider } from './context/loader'
import { LoaderButtonProvider } from './context/loaderButton'
import { PageProvider } from './context/page'
import { LogoutProvider } from './context/logout'
import { useScreenWidth } from './hooks/useScreenWidth'
import { URLProvider } from './context/url'
import { ModalProvider } from './context/modal'

function App () {
  const initialOptions = {
    clientId: 'AYrSVhpxp0Oq3oSfvPftmp87iaXQ21Biz-M3uUnRqWqKZcmS49Xdu3V07FBHC2hsZX4K-mERciLbfGQk',
    currency: 'USD',
    intent: 'capture'

  }

  const { screenWidth } = useScreenWidth()

  return (
    <PayPalScriptProvider initialOptions={initialOptions}>
      <ModalProvider>
        <URLProvider>
          <LogoutProvider>
            <LoaderProvider>
              <LoaderButtonProvider>
                <PageProvider>
                  <TokenProvider>
                    <div style={{ width: screenWidth }} className='app-container'><PageRoutes /></div>
                  </TokenProvider>
                </PageProvider>
              </LoaderButtonProvider>
            </LoaderProvider>
          </LogoutProvider>
        </URLProvider>
      </ModalProvider>
    </PayPalScriptProvider>

  )
}

export default App
