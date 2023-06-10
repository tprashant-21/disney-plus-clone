import './App.css'

import Navbar from './components/Navbar'
import SlidingBar from './components/SlidingBar'
import Companies from './components/Companies'
import MovieGenreList from './components/MovieGenreList'



function App() {

  return (
    <div>

      <Navbar />
      <SlidingBar />
      <Companies />
      <MovieGenreList />

    </div>
  )
}

export default App
