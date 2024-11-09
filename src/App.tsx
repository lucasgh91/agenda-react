import React from 'react'
import { GlobalStyle, Container } from './utils/styles'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { store } from './store/index'
import Home from './pages/Home'
import { Provider } from 'react-redux'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />
    }
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true
    }
  }
)

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <RouterProvider router={router} future={{ v7_startTransition: true }} />
      </Container>
    </Provider>
  )
}

export default App
