import React from 'react';
import './FeaturedMovie.css';

const FeaturedMovie = ({ item }) => {
  let firstDate = new Date(item.first_air_date);
  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  return (
    <section
      className="featured"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div>
            <div className="featured--name">{item.original_name}</div>
            <div className="featured--info">
              <div className="featured--points">{item.vote_average * 10}%</div>
              <div className="featured--year">{firstDate.getFullYear()}</div>
              <div className="featured--seasons">
                {item.number_of_seasons} season
                {item.number_of_seasons !== 1 ? 's' : ''}
              </div>
              <div className="featured--description">
                {item.overview.length > 600
                  ? `${item.overview.slice(0, 600)} ...`
                  : item.overview}
              </div>
              <div className="featured--buttons">
                <a href={`/watch/${item.id}`} className="featured--watchbutton">
                  ▶ Watch
                </a>
                <a
                  href={`/list/add/${item.id}`}
                  className="featured--mylistbutton"
                >
                  + My list
                </a>
              </div>
              <div className="featured--genres">
                <strong>Genres: </strong>
                {genres.join(', ')}
              </div>
            </div>
          </div>
        </div>
      </div>
      {console.log(item.original_name)}
    </section>
  );
};

export default FeaturedMovie;
