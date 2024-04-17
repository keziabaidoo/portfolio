import React from 'react'
import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import RootLayOut from './component/Screens/RootLayOut'
import Hero from './component/Screens/Hero'

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayOut />}>
     <Route  index element={<Hero />} />

    </Route>
  ))

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
