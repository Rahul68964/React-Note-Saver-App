import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './store.js'
import { Provider } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <Toaster
        position="top-right"
        toastOptions={{
          className: '',
          style: {
            border: '1px solid rgb(23, 21, 19)',
            padding: '16px',
            removeDelay: 500,
            color:'black',
            fontSize:'0.7rem',
            backgroundColor:'#fff',
            height:'5px',
          },
        }}
      />

    </Provider>
  </StrictMode>
)
