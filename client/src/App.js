import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Home from './page/home'
import Register from './page/register'
function App() {
  // const [profile, setProfile] = useState(null)
  // useEffect(() => {
  //   const getUser = async () => {
  //     fetch('/protected', {
  //       method: 'GET',
  //       credentials: 'include',
  //       headers: {
  //         Accept: 'application/json',
  //         'Contant-Type': 'application/json',
  //         'Access-Control-Allow-credentials': true,
  //       },
  //     })
  //       .then((res) => {
  //         if (res.status === 200) return res.json()
  //         throw new Error('auth error')
  //       })
  //       .then((res) => {
  //         setProfile(res.user)
  //       })
  //       .catch((e) => console.log(e))
  //   }
  //   getUser()
  // }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
