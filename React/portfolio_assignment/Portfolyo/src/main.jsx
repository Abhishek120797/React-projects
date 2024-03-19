import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App'
import {
  Home,
  Services,
  About,
  AboutMe,
  SkillSet,
  Awards,
  Exhibition,
  Interview,
  Project,
  Review,
  Contact,
} from "./components"



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path="" element={<Home/>}/>
      <Route path="services" element={<Services/>}/>
      <Route path="about" element={<About/>}>
        <Route path="" element={<AboutMe/>}/>
        <Route path="skillset" element={<SkillSet/>}/>
        <Route path="interview" element={<Interview/>}/>
        <Route path="awards" element={<Awards/>}/>
        <Route path="exhibition" element={<Exhibition/>}/>
      </Route>
      <Route path="project" element={<Project/>}/>
      <Route path="review" element={<Review/>}/>
      <Route path="contact" element={<Contact/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router}/>
  </React.StrictMode>,
)
