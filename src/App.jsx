import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import HomePage from './Pages/HomePage'
import FormPage from './Pages/FormPage'
import MyList from './Pages/MyList'
import Navbar from './Components/Navbar'
import MoviesPage from './Pages/MoviesPage'
import { Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import AllMoviesDetails from './Pages/AllMoviesDetails'

function App() {


  return (
    <>
    <Navbar />
      <Routes>
<Route path="/" element={<HomePage />}/>
<Route path="/Movies/:q" element={<MoviesPage />} />
<Route path="/MyList" element={<MyList />} />
<Route path="/Form"element={<FormPage />}/>
<Route path="/movies/:movieId" element={<AllMoviesDetails />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
