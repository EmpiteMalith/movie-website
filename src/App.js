import React from "react";
import Header from './components/Header'
import Movies from "./components/Movies";
import MovieDetails from "./components/MovieDetails";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Header/>
        <main>
        <Routes>
            <Route path="/" element={<Movies/>} exact/>
            <Route path="/movies" element={<Movies/>} exact/>
            <Route path="/movies/:id" element={<MovieDetails/>} exact/>
          </Routes>
        </main>
      </React.Fragment>
      
    </div>
  );
}

export default App;
