const API_KEY = '9a13c69373496932f2a3ca75c6ac794e';
const API_BASE = 'https://api.themoviedb.org/3';

/* 
  That file is responsable for request all the data from API
  The target categories are:

  - Netflix Originals
  - Trending 
  - Top Rated
  - Action
  - Romance
  - Documentary
  - Horror
  - Comedy
*/

const apiFetch = async (endpoint) => {
  const request = await fetch(`${API_BASE}${endpoint}`);
  const json = await request.json();
  return json;
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Netflix Originals',
        items: await apiFetch(
          `/discover/tv?with_network=213&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'trending',
        title: 'Trending',
        items: await apiFetch(`/trending/all/week?api_key=${API_KEY}`),
      },
      {
        slug: 'toprated',
        title: 'Top rated',
        items: await apiFetch(`/movie/top_rated?api_key=${API_KEY}`),
      },
      {
        slug: 'action',
        title: 'Action',
        items: await apiFetch(
          `/discover/movie?with_genres=28&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'comedy',
        title: 'Comedy',
        items: await apiFetch(
          `/discover/movie?with_genres=35&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await apiFetch(
          `/discover/movie?with_genres=10749&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'documentary',
        title: 'Documentary',
        items: await apiFetch(
          `/discover/movie?with_genres=99&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'horror',
        title: 'Horror',
        items: await apiFetch(
          `/discover/movie?with_genres=27&api_key=${API_KEY}`,
        ),
      },
    ];
  },
  getMovieInfo: async (movieID, type) => {
    let info = {};

    if (movieID) {
      switch (type) {
        case 'movie':
          info = await apiFetch(`/movie/${movieID}?api_key=${API_KEY}`);
          break;
        case 'tv':
          info = await apiFetch(`/tv/${movieID}?api_key=${API_KEY}`);
          break;
        default:
          info = null;
          break;
      }
    }

    return info;
  },
};
