
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import { logIn, logOut } from './store/authSlice'
import {Header, Footer} from './components'

function App() {

  const [loading,setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(logIn({userData}))
      }else{
        dispatch(logOut())
      }
    })                                   //write catch block
    .finally(()=>{
      setLoading(false)
    })
  },[])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
        <main>
          {/* todo: <Outlet/> */}    
        </main>
        <Footer/>
      </div>
    </div>
  ):null;    //improve false condition
}

export default App
