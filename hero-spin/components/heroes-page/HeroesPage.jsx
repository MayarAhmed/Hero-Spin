import React from "react";
import Grid from '@mui/material/Grid';
import * as Heroes from "../../utils/utils.json";
import HeroCard from "../Card/HeroesCard";
import styles from "./HeroPage.module.css";

const HeroesPage = () => {
  const { heroes } = Heroes;

  const heroesHandler = () => {
    return (
      <Grid container spacing={2} className={styles.gridCard}>
        {heroes.map((hero) => {
          const { imageurl, name } = hero;
          return <HeroCard heroImage={imageurl} heroName={name} />;
        })}
      </Grid>
    );
  };
  return (
    <>
      <div className={styles.heroBackgroud}>
      <h1> SUPERHERO WORLD </h1>
      </div>
      <div>{heroesHandler()}</div>
  </>
  );
};

export default HeroesPage;
