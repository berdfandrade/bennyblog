import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import themeExtended from './config/extendTheme';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={themeExtended}>
      <Router>
        <App />
      </Router>
    </ChakraProvider>
  </React.StrictMode>,
)