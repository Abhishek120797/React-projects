import React from 'react';
import {Header,Footer} from "./components"
import { Outlet } from 'react-router-dom';
import { useState,useEffect } from 'react';

function App() {

  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(false);
  const [loading,setLoading] = useState(false);
  

  useEffect(()=>{

    ;(async ()=>{

      try {
        setLoading(true)
        setError(false)
        await fetch(import.meta.env.VITE_API_URL)
        .then(response=>response.json())
        .then(data=>{
          setUserData(data.user)
        })
        .catch((error)=>{
          console.log("error:",error)
        })
        
        setLoading(false)
      } catch (error) {
        setError(true)
      }
    })()
  },[])
  
  if(error){
    return <h1 className='text-5xl'>Something went wrong !</h1>
  }
  if(loading){
    return <h1 className='text-5xl'>Loading ...</h1>
  }
  
  return (
    <>
    {userData &&(
      <>
      <Header/>
      <Outlet context={userData} />
      <Footer/>
      </>
    )
    }
    </>
  );
}

export default App;