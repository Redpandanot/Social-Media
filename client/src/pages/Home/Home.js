import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import { getMyInfo } from '../../redux/slices/appConfigSlice';

function Home() {

  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getMyInfo());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <>
      <Navbar/>
      <div className="Outlet" style={{marginTop: '60px'}}>
        <Outlet />
      </div>
      
    </>
  )
}

export default Home;