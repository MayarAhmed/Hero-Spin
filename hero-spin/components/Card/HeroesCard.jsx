import React from "react";
import { useRouter } from "next/router";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { PropTypes } from "prop-types";
import { useHeroContext } from "../../Context/HeroContext";
import styles from "./HeroesCard.module.css";

const HeroesCard = ({ heroImage, heroName }) => {
  const { setSelectedHero } = useHeroContext();
  const router = useRouter()
 
  const selectedHeroHandler = () => {
    setSelectedHero(heroName);
    router.push(`/hero/${heroName}`)
  }
  return (
    <Grid item xs={4} className={styles.card}>
      <ButtonBase
        className={styles.buttonBase}
        onClick={selectedHeroHandler}
      >
        <CardMedia
          component="img"
          image={heroImage}
          alt={heroName}
          className={styles.cardMedia}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className={styles.marvel}>
            {heroName}
          </Typography>
        </CardContent>
      </ButtonBase>
    </Grid>
  );
};

export default HeroesCard;

HeroesCard.propTypes = {
  heroImage:PropTypes.string,
  heroName:PropTypes.string
}