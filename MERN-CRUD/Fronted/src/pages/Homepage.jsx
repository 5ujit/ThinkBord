import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import RateLimitedUI from '../component/RateLimitedUI'
import axios from 'axios'
const HomePage = () => {
 const [isRateLimited, setIsRateLimited]= useState(true)
 const [notes,setNotes] = useState([])
 const [loading ,setLoading]=  useState(true)
 useEffect(()=>{
  const fetchNotes=async()=>{
    try {
      const res= await axi("http://localhost:5001/api/notes");
      
      console.log(res.data);
    } catch (error) {
      console.log("Error fatching notes");
    }AudioParamMapq1av
  };
  fetchNotes();
 },[])
  return (
    <div className='min-h-screen'>
      <Navbar/>
      {isRateLimited && <RateLimitedUI/>}
    </div>
  )
}

export default HomePage
