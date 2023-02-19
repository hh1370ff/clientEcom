import { useDispatch, useSelector } from "react-redux";
import Item from "./Item";
import { Box, Divider, Typography } from "@mui/material";
import { selectAllItems } from "./itemSlice";
import { selectCart } from "../cart/cartSlice";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { selectAllItemImages } from "../itemImage/itemImageSlice";
const ItemsList = () => {
  const [tabValue, setTabValue] = useState("all");

  const items = useSelector(selectAllItems);

  const status = useSelector((state) => state.items.status);
  const error = useSelector((state) => state.items.error);

  const cartItems = useSelector(selectCart);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };
  let selectedItems;
  let selectedImageURLs;
  let content;
  if (status === "loading") content = <p>...Loading</p>;
  if (status === "failed") content = <p>error</p>;
  if (status === "succeeded") {
    switch (tabValue) {
      case "newArrival":
        selectedItems = items.filter((item) => item.category === "New Arrival");
        break;
      case "bestSeller":
        selectedItems = items.filter((item) => item.category === "Best Seller");
        break;
      case "topRated":
        selectedItems = items.filter((item) => item.category === "Top Rated");
        break;
      default:
        selectedItems = items;
        break;
    }

    content = (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
        }}
      >
        <Typography
          variant="h3"
          color="primary"
          sx={{ textAlign: "center", mb: "1rem" }}
        >
          Our products
        </Typography>
        <Tabs
          value={tabValue}
          onChange={handleChange}
          aria-label="disabled tabs example"
          sx={{ display: "flex", width: "90%" }}
        >
          <Tab label="All" value="all" sx={{ flex: "1 1" }} />
          <Tab label="New " value="newArrival" sx={{ flex: "1 1" }} />
          <Tab label="Best " value="bestSeller" sx={{ flex: "1 1" }} />
          <Tab label="Top" value="topRated" sx={{ flex: "1 1" }} />
        </Tabs>

        <Divider
          sx={{
            my: "2rem",
            width: "50%",
            mx: "auto",
          }}
        />
        <Box
          sx={{
            display: "grid",
            justifyContent: "center",
            gridTemplateColumns: "repeat(auto-fill, 300px)",
            rowGap: "20px",
            columnGap: "1%",
          }}
        >
          {selectedItems.map((item, index) => (
            <Item key={item._id} item={item} width={"300px"} />
          ))}
        </Box>
      </Box>
    );
  }

  return content;
};

export default ItemsList;
