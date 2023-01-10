import React from 'react'
import { BrowserRouter as Router,Routes,Route  } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home'
import MovieList from './components/movieList/MovieList';
import Movie from './pages/movieDetails/Movie';

const App = () => {
  return (
    <div className="hello">
      <Router>
        <Header/>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path="movie/:id" element = {<Movie/>}> </Route>
          <Route path="movies/:type" element={<MovieList/>}> </Route>
          <Route path="/*" element={<h1>This is Error Page</h1>}> </Route>
          
        </Routes>
      </Router>
    </div>
  )
}

export default App