import React from "react";
import PropTypes from "prop-types";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography";
import styles from "./Card.module.css";

const CardData = ({image, cardname, mediaclass, typoClass}) => {
  const noPoster = '../../assets/images/galaxy.jpg';
  const updatedImage = image == "N/A" ? noPoster : image; 
   return (
    <>
      <CardMedia
        component="img"
        image={updatedImage}
        alt={cardname}
        className={mediaclass}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className={styles.marvel}
        >
          {cardname}
        </Typography>
      </CardContent>
    </>
  );
};

export default CardData;

CardData.propTypes = {
    image: PropTypes.string,
    cardname: PropTypes.string,
    mediaclass: PropTypes.string
  };
