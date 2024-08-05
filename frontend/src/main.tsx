import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import themeExtended from './config/extendTheme';
import App from './App';

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={themeExtended}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)