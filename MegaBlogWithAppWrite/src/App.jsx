
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import { logIn, logOut } from './store/authSlice'
import {Header, Footer} from './components'
import { Outlet } from 'react-router-dom'

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
    })
    .catch((error) => {
      {console.log("test")}
      console.error("Error fetching user data: ", error);
      dispatch(logOut())
    })                                  
    .finally(()=>setLoading(false))
  },[])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
        <main>
        <Outlet/>    
        </main>
        <Footer/>
      </div>
    </div>
  ):(
    <div className='flex justify-center items-center h-screen'>
      <h1 className='bg-gray-200 p-8 rounded-lg'>Loading...</h1>
      </div>
  );
}

export default App
