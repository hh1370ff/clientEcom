import {
  Box,
  Icon,
  IconButton,
  Divider,
  Typography,
  Button,
} from "@mui/material";
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
import { useRef } from "react";
import { useNavigate } from "react-router";
import useUiContext from "../../hooks/useUiContext";
import CartItem from "./CartItem";
const Cart = ({ handleOpenSnackBar }) => {
  const cartRef = useRef();
  /* ui state and handler */
  const { handleCloseCart } = useUiContext();

  /* redux stuffs */
  const cartItems = useSelector(selectCart);

  /* navigate hook */
  const navigate = useNavigate();

  let content = (
    /* {screenBox} */
    <Box
      sx={{
        minHeight: "100%",
        width: "100vw",
        display: "flex",
        backgroundColor: `rgba(0,0,0, 0.2)`,
        zIndex: 15,
        position: "fixed",
        overflowY: "scroll",
      }}
      onClick={(e) => {
        if (!cartRef.current.contains(e.target)) {
          handleCloseCart();
        }
      }}
    >
      {/*  {cardPart} */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          zIndex: 20,
          backgroundColor: "white",
          position: "absolute",
          top: "0px",
          right: "0px",
          gap: "1rem",
          p: ".5rem",
        }}
        ref={cartRef}
      >
        <Typography variant="h6" sx={{ textAlign: "center", pt: ".5rem" }}>
          Selected items
        </Typography>
        <Divider sx={{ border: "1px solid purple" }} />
        {cartItems.map((cartItem, index) => (
          <CartItem key={index} cartItem={cartItem} />
        ))}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: "0.5rem",
          }}
        >
          <Typography variant="body2">
            Total price: $
            {cartItems.reduce(
              (sum, { item, count }) => sum + item.price * count,
              0
            )}
          </Typography>
          <Button
            sx={{
              height: "2rem",
              mr: ".5rem",
              backgroundColor: "white",
              border: "1px solid purple",
              "&:hover": {
                backgroundColor: "rgba(191, 64, 191, 0.2)",
              },
            }}
            onClick={() => {
              handleCloseCart();
              navigate("/checkout");
            }}
          >
            BUY
          </Button>
        </Box>
      </Box>
    </Box>
  );

  if (cartItems.length === 0) {
    content = null;
    handleOpenSnackBar(true);
    handleCloseCart();
  }

  return content;
};

export default Cart;
