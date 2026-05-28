import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";
import Banner from "../../components/Banner/Banner";

import {
  getTrendingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  uniqueMovies
} from "../../api/movies";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
  const loadMovies = async () => {
    setTrending(uniqueMovies(await getTrendingMovies()));
    setPopular(uniqueMovies(await getPopularMovies()));
    setTopRated(uniqueMovies(await getTopRatedMovies()));
    setUpcoming(uniqueMovies(await getUpcomingMovies()));
  };
  loadMovies();
}, []);

  return (
    <div className="home">
      <Navbar />
      <Banner />

      
      <div className="movie-row">
        <h2 className="row-title">Trending Now</h2>
        <div className="row-posters">
          {trending.map((movie) => (
            <img key={movie.imdbID} className="row-poster" src={movie.Poster} alt={movie.Title}/>
          ))}
        </div>
      </div>

      
      <div className="movie-row">
        <h2 className="row-title">Popular Movies</h2>
        <div className="row-posters">
          {popular.map((movie) => (
            <img key={movie.imdbID} className="row-poster" src={movie.Poster} alt={movie.Title}/>
          ))}
        </div>
      </div>

     
      <div className="movie-row">
        <h2 className="row-title">Top Rated</h2>
        <div className="row-posters">
          {topRated.map((movie) => (
            <img key={movie.imdbID} className="row-poster" src={movie.Poster} alt={movie.Title}/>
          ))}
        </div>
      </div>

      
      <div className="movie-row">
        <h2 className="row-title">Upcoming</h2>
        <div className="row-posters">
          {upcoming.map((movie) => (
            <img key={movie.imdbID} className="row-poster" src={movie.Poster} alt={movie.Title}/>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;