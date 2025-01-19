import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Pastes from './components/Pastes'
import ViewPastes from './components/ViewPastes'

const router = createBrowserRouter(
  [
    {
      path:'/',
      element: <Home />,
    },
    {
      path:'/pastes',
      element: <Pastes />,
    },
    {
      path:'/pastes/:id',
      element: <ViewPastes />,
    }
  ]
);

function App() {

  return (
    <>
     <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
