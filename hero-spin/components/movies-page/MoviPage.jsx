import React from 'react'
import { useRouter } from "next/router";
import PropTypes from 'prop-types'
import { useHeroContext } from "../../Context/HeroContext";
import MovieCard from "../movie-card/MovieCard";

const MoviPage = props => {
  const { movies } = useHeroContext();
  const router = useRouter();
  const { movieName } = router.query;
  const chosenMovie = movies?.filter(movie=> movie.Title === movieName)
  const {Poster, Type, Year} = movies? chosenMovie[0] : [];
  return (
    <>
     <h2>{movieName}</h2>
     <MovieCard 
     movieName={movieName}
     movieImage={Poster}
     movieData={Year}
     movieType={Type}
     />
    </>
  )
}

MoviPage.propTypes = {}

export default React.memo(MoviPage)