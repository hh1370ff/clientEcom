import { Box } from "@mui/material";
import { useState } from "react";
import { Blurhash } from "react-blurhash";
import { useSelector } from "react-redux";
import { selectCarouselImageById } from "../carouselImage/carouselImageSlice";

const CarouselImage = ({ item }) => {
  /* image*/
  const image = useSelector((state) =>
    selectCarouselImageById(state, item._id)
  );

  return (
    <Box>
      {image === null ? (
        <Blurhash
          hash={item.blurHash}
          width={"100%"}
          height={"100%"}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      ) : (
        <img
          src={image.imageURL}
          style={{
            height: `calc(100vh - 10rem)`,
            objectFit: "fill",
          }}
        />
      )}
    </Box>
  );
};

export default CarouselImage;
