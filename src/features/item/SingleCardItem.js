import { Box, Card } from "@mui/material";
import React from "react";
import { Blurhash } from "react-blurhash";
import { useSelector } from "react-redux";
import { selectItemImageById } from "../itemImage/itemImageSlice";

const SingleCardItem = ({ item, width, height }) => {
  const image = useSelector((state) => selectItemImageById(state, item._id));

  return (
    <Box sx={{ width: width }}>
      <Box
        sx={{
          width: { width },
          height: { height },
        }}
      >
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
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
            src={image.imageURL}
            alt={item.name}
          />
        )}
      </Box>
    </Box>
  );
};

export default SingleCardItem;
