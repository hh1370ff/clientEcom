import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { shades } from "../../theme";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useSelector } from "react-redux";
import { selectAllImages } from "./carouselSlice";
import CarouselImage from "./CarouselImage";

const CustomizedCarousel = () => {
  const images = useSelector(selectAllImages);

  const content = (
    <Box sx={{ height: `calc(100vh - 4rem)` }}>
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        // autoPlay={true}
        showStatus={false}
        renderArrowPrev={(clickHandler, hasPrev, label) => (
          <IconButton
            onClick={clickHandler}
            sx={{
              position: "absolute",
              padding: "5px",
              bottom: `calc(0.5*(100vh - 14rem))`,
              left: 0,
              color: "#fff",
              zIndex: 10,
            }}
          >
            <NavigateBeforeIcon sx={{ fontSize: 40 }} />
          </IconButton>
        )}
        renderArrowNext={(clickHandler, hasNext, label) => (
          <IconButton
            onClick={clickHandler}
            sx={{
              position: "absolute",
              bottom: `calc(0.5*(100vh - 14rem))`,
              right: 0,
              color: "#fff",
              zIndex: 10,
            }}
          >
            <NavigateNextIcon sx={{ fontSize: 40 }} />
          </IconButton>
        )}
      >
        {images.map((item, index) => (
          <Box key={index}>
            <CarouselImage item={item} />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                textAlign: "left",
                padding: "0.5rem",
                width: "12rem",
                position: "absolute",
                boxSizing: "border-box",
                bottom: {
                  xs: `calc(100vh - 16rem)`,
                  md: `calc(0.5*(100vh - 16rem))`,
                },
                left: { xs: 0, md: "10%" },
                backgroundColor: "rgba(0,0,0,0.7)",
              }}
            >
              <Typography sx={{ color: shades.primary["300"] }}>
                --Here is the best
              </Typography>
              <Typography variant="h4" sx={{ color: "white" }}>
                No difficulty
              </Typography>
              <Typography sx={{ color: shades.primary["500"] }}>
                Best of the best
              </Typography>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
  return content;
};

export default CustomizedCarousel;
