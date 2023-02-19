import { Button, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addItemToCart } from "../../cart/cartSlice";
import { selectItemById } from "../itemSlice";
import SingleCardItem from "../SingleCardItem";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ItemsSlick from "../ItemsSlick";
import { style } from "./itemDetailsStyles";
const ItemDetails = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  const item = useSelector((state) => selectItemById(state, id));
  const error = useSelector((state) => state.items.error);
  const status = useSelector((state) => state.items.status);
  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(1);
  }, [item]);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count <= 1) return;
    setCount(count - 1);
  };

  const width = "400px";
  let content;

  if (error) content = <p>error</p>;
  if (status === "loading") content = <p>...Loading</p>;
  if (status === "failed") content = <p>...Failed</p>;
  if (status === "succeeded") {
    const { name, shortDescription, longDescription, photo, price, category } =
      item;

    content = (
      <Box sx={style.wrapperBox}>
        <Box sx={style.topWrapperBox}>
          <Box sx={style.topBox}>
            {/* image */}
            <SingleCardItem
              name={name}
              item={item}
              width={"400px"}
              height={"550px"}
            />

            <Box sx={style.topBoxRight}>
              <Box sx={style.rightDescription}>
                <Typography variant="h5">{name}</Typography>
                <Typography variant="subtitle1">
                  Price: ${price * count}
                </Typography>
                <Typography variant="h5">{shortDescription}</Typography>
                <Typography
                  sx={{
                    mx: {
                      xs: "1rem",
                      md: "0",
                    },
                    textAlign: {
                      xs: "center",
                      md: "left",
                    },
                  }}
                >
                  {longDescription}
                </Typography>
              </Box>

              <Box sx={style.rightButtonWrapper}>
                <Box sx={style.incDecWrapper}>
                  <IconButton
                    onClick={handleDecrement}
                    sx={{
                      "&:hover": {
                        backgroundColor: "rgba(191, 64, 191, 0.2)",
                      },
                    }}
                  >
                    <RemoveIcon
                      sx={{
                        width: "1.75rem",
                        height: "1.75rem",
                        borderRadius: "50%",
                      }}
                    />
                  </IconButton>
                  <Typography variant="subtitle1">{count}</Typography>
                  <IconButton
                    onClick={handleIncrement}
                    sx={{
                      "&:hover": {
                        backgroundColor: "rgba(191, 64, 191, 0.2)",
                      },
                    }}
                  >
                    <AddIcon
                      sx={{
                        width: "1.75rem",
                        height: "1.75rem",
                        borderRadius: "50%",
                      }}
                    />
                  </IconButton>
                </Box>
                <Button
                  sx={style.addToCartButton}
                  disabled={count < 1}
                  onClick={() => {
                    dispatch(addItemToCart({ item, count }));
                  }}
                >
                  Add to chart
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <ItemsSlick category={category} />
        </Box>
      </Box>
    );
  }

  return content;
};

export default ItemDetails;
