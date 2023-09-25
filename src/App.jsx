import React, { useEffect } from 'react'
import Header from './components/header'
import { Routes, Route } from 'react-router-dom'
import Register from './components/register'
import { useSelector, useDispatch } from 'react-redux'
import Login from './components/login'
import { VerifyApi } from './Features/authSlice'
import { ToastContainer } from 'react-bootstrap'
const App = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(VerifyApi());
  }, [dispatch])

  const data = useSelector((state) => state.auth.user)
  console.log(data);
  return (
    <>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>

      </Routes>


    </>
  )
}

export default App