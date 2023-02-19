import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
  CardActionArea,
  IconButton,
  Box,
  CardActions,
} from "@mui/material";
import { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { selectCart, addItemToCart, removeFromCart } from "../cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Blurhash } from "react-blurhash";
import {
  selectAllItemImages,
  selectItemImageById,
} from "../itemImage/itemImageSlice";
import { selectAllImages } from "../carousel/carouselSlice";
import { store } from "../../store/store";

const Item = ({ item, width, margin }) => {
  const image = useSelector((state) => selectItemImageById(state, item._id));

  /* navigate hook */
  const navigate = useNavigate();

  /* redux stuffs */
  const dispatch = useDispatch();
  const chart = useSelector(selectCart);

  /* deconstructing item */
  const { category, price, name, blurHash } = item;

  /* hover & count & count handlers */
  const [isHover, setIsHover] = useState(false);
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count <= 0) return;
    setCount(count - 1);
  };

  return (
    <Card
      sx={{ width: width, mx: { margin } }}
      onMouseOver={() => {
        setIsHover(true);
      }}
      onMouseOut={() => {
        setIsHover(false);
      }}
    >
      <Box>
        <Box
          sx={{
            position: "relative",
            width: { width },
            height: "350px",
          }}
        >
          {image === null ? (
            <Blurhash
              hash={blurHash}
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
                cursor: "pointer",
              }}
              src={image.imageURL}
              alt={name}
              onClick={() => {
                navigate(`/item/${item._id}`);
              }}
            />
          )}
          {isHover && (
            <Box
              sx={{
                position: "absolute",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                bottom: "5px",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "white",
                  width: "5rem",
                  height: "2rem",
                  mx: "5px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <IconButton onClick={handleDecrement} size="small">
                  <RemoveIcon
                    sx={{
                      fontSize: "20px",
                    }}
                  />
                </IconButton>
                <Typography variant="subtitle1">{count}</Typography>
                <IconButton onClick={handleIncrement} size="small">
                  <AddIcon
                    sx={{
                      fontSize: "20px",
                    }}
                  />
                </IconButton>
              </Box>
              <Button
                sx={{
                  height: "2rem",
                  mr: ".5rem",
                  backgroundColor: "white",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,.8)",
                  },
                }}
                disabled={count < 1}
                onClick={() => {
                  dispatch(addItemToCart({ item, count }));
                }}
              >
                Add
              </Button>
            </Box>
          )}
        </Box>
        <CardContent>
          <Typography variant="subtitle1">{category}</Typography>
          <Typography>{name}</Typography>
          <Typography variant="subtitle2">${price}</Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default Item;
