import { Box, IconButton, Divider, Typography } from "@mui/material";
import {
  selectCart,
  addItemToCart,
  decFromCart,
  remFromCart,
} from "./cartSlice";
import ClearIcon from "@mui/icons-material/Clear";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import { selectItemImageById } from "../itemImage/itemImageSlice";
import { Blurhash } from "react-blurhash";
import { useNavigate } from "react-router";

const CartItem = ({ cartItem }) => {
  const { item, count } = cartItem;
  const image = useSelector((state) => selectItemImageById(state, item._id));

  /* chart handlers */
  const handleDecrement = (item) => {
    dispatch(decFromCart({ item }));
  };
  const handleIncrement = (item) => {
    dispatch(addItemToCart({ item, count: 1 }));
  };
  const removeItem = (item) => {
    dispatch(remFromCart({ item }));
  };

  const dispatch = useDispatch();

  /* navigate hook */
  const navigate = useNavigate();
  return (
    <Box key={item._id}>
      {/* {wrapperBox} */}
      <Box
        sx={{
          display: "flex",
          position: "relative",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <IconButton
          onClick={() => removeItem(item)}
          sx={{ position: "absolute", top: "0", right: "0" }}
        >
          <ClearIcon sx={{ fontSize: "14px" }} />
        </IconButton>
        {/* {image} */}
        <Box sx={{ width: "90px", height: "130px" }}>
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
              alt={item.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              onClick={() => {
                navigate(`/item/${item._id}`);
              }}
            />
          )}
        </Box>
        {/* {rightBox} */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "300px",
            height: "130px",
            justifyContent: "space-between",
            padding: "0 5px 5px 5px",
          }}
        >
          {/* {titleDescriptionBox} */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* {titleRemoveBox} */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="body1">{item.name}</Typography>
            </Box>
            <Typography variant="body2">{item.shortDescription}</Typography>
          </Box>
          {/* {addDecPriceBox} */}
          <Box
            sx={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                backgroundColor: "white",
                width: "5rem",
                height: "1.5rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <IconButton onClick={() => handleDecrement(item)}>
                <RemoveIcon
                  sx={{
                    fontSize: "15px",
                  }}
                />
              </IconButton>
              <Typography variant="subtitle2">{count}</Typography>
              <IconButton onClick={() => handleIncrement(item)}>
                <AddIcon
                  sx={{
                    fontSize: "15px",
                  }}
                />
              </IconButton>
            </Box>
            <Box>
              <Typography variant="subtitle1">Price: ${item.price}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Divider sx={{ py: "1rem" }} />
    </Box>
  );
};

export default CartItem;
