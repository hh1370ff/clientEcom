import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { selectAllItems } from "./itemSlice";
import { useSelector } from "react-redux";
import Item from "./Item";
import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ItemsSlick = ({ category }) => {
  const items = useSelector(selectAllItems);
  const similarItems = items.filter((item) => item.category === category);

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 3,

    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    centerMode: true,
    nextArrow: (
      <ArrowForwardIosIcon
        sx={{
          color: "white",
          fontSize: "4rem",
          zIndex: 10,
          position: "absolute",
          right: "-60px",
          "&:hover": {
            color: "whitesmoke",
          },
        }}
      />
    ),
    prevArrow: (
      <ArrowBackIosNewIcon
        sx={{
          color: "white",
          fontSize: "4rem",
          zIndex: 10,
          position: "absolute",
          left: "-60px",
          "&:hover": {
            color: "whitesmoke",
          },
        }}
      />
    ),
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          nextArrow: (
            <ArrowForwardIosIcon
              sx={{
                color: "white",
                fontSize: "4rem",
                zIndex: 10,
                position: "absolute",
                right: "-40px",
                "&:hover": {
                  color: "whitesmoke",
                },
              }}
            />
          ),
          prevArrow: (
            <ArrowBackIosNewIcon
              sx={{
                color: "white",
                fontSize: "4rem",
                zIndex: 10,
                position: "absolute",
                left: "-40px",
                "&:hover": {
                  color: "whitesmoke",
                },
              }}
            />
          ),
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow: (
            <ArrowForwardIosIcon
              sx={{
                color: "white",
                fontSize: "4rem",
                zIndex: 10,
                position: "absolute",
                right: "-40px",
                "&:hover": {
                  color: "whitesmoke",
                },
              }}
            />
          ),
          prevArrow: (
            <ArrowBackIosNewIcon
              sx={{
                color: "white",
                fontSize: "4rem",
                zIndex: 10,
                position: "absolute",
                left: "-40px",
                "&:hover": {
                  color: "whitesmoke",
                },
              }}
            />
          ),
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: (
            <ArrowForwardIosIcon
              sx={{
                color: "white",
                fontSize: "4rem",
                zIndex: 10,
                position: "absolute",
                right: "-30px",
                "&:hover": {
                  color: "whitesmoke",
                },
              }}
            />
          ),
          prevArrow: (
            <ArrowBackIosNewIcon
              sx={{
                color: "white",
                fontSize: "4rem",
                zIndex: 10,
                position: "absolute",
                left: "-30px",
                "&:hover": {
                  color: "whitesmoke",
                },
              }}
            />
          ),
        },
      },
    ],
  };
  return (
    <Box sx={{ backgroundColor: "rgb(207, 159, 255)" }}>
      <Typography variant="h4" sx={{ textAlign: "center", py: "2rem" }}>
        Similar Products
      </Typography>
      <Slider
        {...settings}
        style={{
          margin: " 0 auto",
          width: "90%",
        }}
      >
        {similarItems.map((item) => (
          <Item item={item} key={item._id} margin={"0.5rem"} />
        ))}
      </Slider>
    </Box>
  );
};

export default ItemsSlick;
