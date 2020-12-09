import React, { useEffect, useState } from 'react';
import TmdbList from './Tmdb';
import { MovieRow } from './components/MovieRow';

import './App.css';
import FeaturedMovie from './components/FeaturedMovie';
import tmdb from './Tmdb';
import Header from './components/Header';

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      let list = await TmdbList.getHomeList();
      setMovieList(list);

      //Getting the spotlight movie
      let originals = list.filter((item) => item.slug === 'originals');
      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1),
      );
      let spotlighItem = originals[0].items.results[randomChosen];
      console.log(spotlighItem);

      let chosenInfo = await tmdb.getMovieInfo(spotlighItem.id, 'tv');
      setFeaturedData(chosenInfo);
    };
    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);
  return (
    <div className="page">
      <Header black={blackHeader} />
      {featuredData && <FeaturedMovie item={featuredData} />}
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
      <footer>
        Made by Matheus Mattana
        <br />
        All data from the films and series were provided by the
        www.themoviedb.org API
      </footer>

      {movieList.length <= 0 && (
        <div className="loading">
          <img
            src="http:///www.filmelier.com/pt/br/news/wp-content/uploads/2020/03/netflix-loading.gif"
            alt="loading"
          />
        </div>
      )}
    </div>
  );
};

export default App;
