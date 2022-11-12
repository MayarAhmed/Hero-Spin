import React from "react";
import Grid from "@mui/material/Grid";
import ButtonBase from "@mui/material/ButtonBase";
import PropTypes from "prop-types";
import CardData from "./CardContent";
import styles from "./Card.module.css";

const Card = ({ cardImage, cardName, selectedItemHandler, cardStyle, buttonStyle }) => {

  return (
    <Grid item xs={4} className={styles.card}>
      <ButtonBase className={styles.buttonBase } sx={buttonStyle?{backgroundColor:"#fff", width:300, height:600, color:"#000"} : null}onClick={selectedItemHandler}>
        <CardData
          image={cardImage}
          cardname={cardName}
          mediaclass={cardStyle}
        />
      </ButtonBase>
    </Grid>
  );
};

export default Card;

Card.propTypes = {
  cardImage: PropTypes.string,
  cardName: PropTypes.string,
  selectedItemHandler:PropTypes.func
};
