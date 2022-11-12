import React from "react";
import { useRouter } from "next/router";
import Grid from '@mui/material/Grid';
import * as Heroes from "../../utils/utils.json";
import Card from "../Card/Card";
import styles from "./HeroesPage.module.css";

const HeroesPage = () => {
  const { heroes } = Heroes;
  const router = useRouter();

  const selectedHeroHandler = (heroName) => {
    router.push(`/hero/${heroName}`);
  };

  const heroesHandler = () => {
    return (
      <Grid container spacing={2} className={styles.gridCard}>
        {heroes.map((hero) => {
          const { imageurl, name, id } = hero;
          return <Card cardImage={imageurl} cardName={name} key={id} selectedItemHandler={()=>selectedHeroHandler(name)} cardStyle={styles.cardMedia}/>;
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
