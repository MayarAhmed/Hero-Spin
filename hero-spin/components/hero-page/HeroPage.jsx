import React, {useEffect} from "react";
import Grid from "@mui/material/Grid";
import { useRouter } from "next/router";
import Card from "../Card/Card";
import { useHeroContext } from "../../Context/HeroContext";
import styles from "../Card/Card.module.css";

const HeroPage = () => {
  const { heroData, setSelectedHero, setMovies } = useHeroContext();
  const router = useRouter();
  const { heroName } = router.query;
  const selectedMovieHandler = (movieName) =>{
    router.push(`/movie/${movieName}`);
    setMovies(heroData?.Search)
  }
  useEffect(()=>{
    setSelectedHero(heroName);
  },[heroName])
  const heroDataHandler = () => {
    return heroData?.Search?.map((movie) => {
      const { Title, Poster, imdbID } = movie;
      return <Card 
              cardImage={Poster} 
              cardName={Title} 
              key={imdbID} 
              cardStyle={styles.cardContent} 
              buttonStyle
              selectedItemHandler={()=>selectedMovieHandler(Title)}/>;
    });
  };
  return (
    <>
    <div>
      <h2> {heroName} Movies</h2>
    </div>
      <Grid container spacing={2} className={styles.gridCard}>
        {heroDataHandler()}
      </Grid>
    </>
  );
};

export default HeroPage;
