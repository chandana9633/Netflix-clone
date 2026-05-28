import { useEffect, useState } from "react";
import "./Banner.css";
import bannerImg from "../../assets/banner-1.jpg"

const Banner = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchBanner = async () => {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=c4726217&s=star`
      );
      const data = await res.json();
      setMovie(data.Search?.[0]);
    };

    fetchBanner();
  }, []);

  if (!movie) return null;

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(${bannerImg})`,
      }}
    >
      <div className="banner_contents">
        <h1>{movie.Title}</h1>
        <p>Featured movie of the day</p>

        <div className="banner_buttons">
          <button>Play</button>
          <button>My List</button>
        </div>
      </div>

      <div className="banner_fadeBottom" />
    </header>
  );
};

export default Banner;