import { Slide, Box, TextField } from "@mui/material";
import { lighten } from "polished";
import { colors } from "../../../../styles/styles";
import { Search } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import useUiContext from "../../../../hooks/useUiContext";
const SearchBox = () => {
  const { openSearch, handleCloseSearch } = useUiContext();
  const content = (
    <Slide in={openSearch} direction="down" timeout={500}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          zIndex: 10000,
          position: "fixed",
          top: 0,
          backgroundColor: lighten(0.2, colors.primary),
          opacity: ".9",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "80%",
            gap: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <TextField sx={{ flex: 1 }} variant="standard" />
          <Search sx={{ cursor: "hover" }} />
          <CloseIcon sx={{ cursor: "hover" }} onClick={handleCloseSearch} />
        </Box>
      </Box>
    </Slide>
  );
  return content;
};

export default SearchBox;
