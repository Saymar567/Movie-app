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
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import ContactForm from './Pages/ContactForm'


function App() {
  const [movies, setMovies] = useState([])
  


  return (
    <>
    <Navbar />
      <Routes>
<Route path="/" element={<HomePage />}/>
<Route path="/movies/:q" element={<MoviesPage movies={movies} setMovies={setMovies} />} />
<Route path="/MyList" element={<MyList movies={movies}/>} />
<Route path="/Form"element={<FormPage />}/>
<Route path="/movies/details/:movieId" element={<AllMoviesDetails movies={movies} />} />
<Route path="/contactForm" element={<ContactForm />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
