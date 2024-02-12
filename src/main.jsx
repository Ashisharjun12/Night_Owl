import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import Categories from './components/Categories/Categories.jsx'
import About from './components/About/About.jsx'
import Account from './components/Account/Account.jsx'
import Layout from './Layout.jsx'
import Error from './components/Error/Error.jsx'
import Sub from './Sub.jsx'
import Subject1 from './components/Subject/Subject1.jsx'
import Subject2 from './components/Subject/Subject2.jsx'

import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<Sub/>}>
      <Route path="Subject1" element={<Subject1/>} />
      <Route path="Subject2" element={<Subject2/>} />

     <Route path='/' element={<Layout/>}>
      <Route path="Account" element={<Account/>} />
      
     <Route path='/' element={<App/>}>
      <Route path="" element={<Home/>} />
      <Route path="Categories" element={<Categories/>} />
      <Route path="About" element={<About/>} />
      <Route path="*" element={<Error/>} />
      
    </Route>
    </Route>
    </Route>
    
  )

)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
