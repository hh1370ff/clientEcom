import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useMemo } from "react";
import { Tooltip } from "@mui/material";
const MediaCard = ({
  image,
  name,
  price,
  shortDescription,
  longDescription,
  category,
}) => {
  let imageIconUrl;
  if (image.length === 0) {
    imageIconUrl =
      "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg";
  } else {
    imageIconUrl = URL.createObjectURL(image[0]);
  }

  return (
    <Card sx={{ width: 225 }}>
      <Tooltip title={name}>
        {useMemo(
          () => (
            <CardMedia sx={{ height: 225 }} image={imageIconUrl} />
          ),
          [image]
        )}
      </Tooltip>
      <CardContent sx={{ height: 75 }}>
        <Typography gutterBottom variant="h5" component="div">
          {category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {shortDescription}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {longDescription}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MediaCard;
