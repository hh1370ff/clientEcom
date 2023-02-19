import { useDispatch, useSelector } from "react-redux";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Container,
  Divider,
  IconButton,
  List,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { selectCart } from "../cartSlice";
import { forwardRef, useState } from "react";
import Cart from "../Cart";
import CustomizedSnackbar from "../../../component/common/snackbar/CustomizedSnackbar";
import { Actions, HeaderText } from "./styles";
import { ListItemButtonWrapper } from "./styles";
import { imageUrl } from "./imageUrl";
import { styles } from "./styles";
import SearchBox from "./search/Search";
import useUiContext from "../../../hooks/useUiContext";
import { logOut, selectRole } from "../../auth/authSlice";

const Navbar = forwardRef((props, ref) => {
  /* dispatch */
  const dispatch = useDispatch();
  const role = useSelector(selectRole);

  /* ui states */
  const { handleOpenSearch, handleOpenCart, openCart } = useUiContext();

  /* Navigate hook */
  const navigate = useNavigate();

  const pages = [
    {
      name: "Home",
      action: () => {
        navigate("/");
      },
    },
    {
      name: "Admin",
      action: () => {
        navigate("/admin");
      },
    },
    {
      name: "Categories",
      action: () => {
        navigate("/categories");
      },
    },
    {
      name: "Products",
      action: () => {
        navigate("/products");
      },
    },
    {
      name: "About Us",
      action: () => {
        navigate("/aboutUs");
      },
    },
  ];
  const accountItems = [
    {
      name: "Setting",
      action: () => {
        navigate("/setting");
      },
    },
    {
      name: "My account",
      action: () => {
        navigate("/myAccount");
      },
    },
    {
      name: "Login",
      action: () => {
        navigate("/Login");
      },
    },
    {
      name: "Logout",
      action: () => {
        dispatch(logOut());
      },
    },
  ];

  /* redux selector for cart */
  const cardItems = useSelector(selectCart);
  const cart = useSelector(selectCart);

  /* navbar menu state and handlers */
  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleOpenNavMenu = (event) => {
    window.onpopstate = handleCloseNavMenu;
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    window.onpopstate = "undefined";
    setAnchorElNav(null);
  };

  const handleNavigateNavMenu = (action) => {
    handleCloseNavMenu();
    action();
  };

  /* account menu state and handlers */
  const [anchorElAccount, setAnchorElAccount] = useState(null);
  const handleOpenAccountMenu = (event) => {
    window.onpopstate = handleCloseAccountMenu;
    setAnchorElAccount(event.currentTarget);
  };

  const handleCloseAccountMenu = () => {
    window.onpopstate = "undefined";
    setAnchorElAccount(null);
  };

  const handleNavigateAccountMenu = (action) => {
    handleCloseAccountMenu();
    action();
  };

  /* sankBar states and handlers */
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackBar(false);
  };

  const handleOpenSnackBar = () => {
    setOpenSnackBar(true);
  };

  const content = (
    <AppBar sx={styles.appBar} ref={ref}>
      {openCart && <Cart handleOpenSnackBar={handleOpenSnackBar} />}
      <SearchBox />
      <Menu
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        disableScrollLock={true}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: {
            xs: "block",
            md: "none",
            "& Box Divider": {
              display: "none",
            },
          },
        }}
      >
        {pages.map((page, index) => (
          <Box key={page.name}>
            <MenuItem onClick={() => handleNavigateNavMenu(page.action)}>
              <Typography
                variant="h6"
                sx={{
                  width: {
                    md: "200px",
                    xs: "100px",
                  },
                }}
              >
                {page.name}
              </Typography>
            </MenuItem>
            <Divider
              variant="middle"
              sx={{
                display: index === pages.length - 1 ? "none" : "block",
              }}
            />
          </Box>
        ))}
      </Menu>
      {/*  */}
      <Menu
        anchorEl={anchorElAccount}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        disableScrollLock={true}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElAccount)}
        onClose={handleCloseAccountMenu}
      >
        {accountItems.map((item, index) => {
          if (item.name === "Login" && role) return;
          if (item.name === "Logout" && !role) return;
          return (
            <Box key={item.name}>
              <MenuItem onClick={() => handleNavigateAccountMenu(item.action)}>
                <Typography
                  variant="h6"
                  sx={{
                    width: {
                      md: "200px",
                      xs: "100px",
                    },
                  }}
                >
                  {item.name}
                </Typography>
              </MenuItem>
              <Divider
                variant="middle"
                sx={{
                  display: index === accountItems.length - 1 ? "none" : "block",
                }}
              />
            </Box>
          );
        })}
      </Menu>

      <Container sx={styles.container} maxWidth="xl">
        <Toolbar>
          <IconButton sx={styles.menuButton} onClick={handleOpenNavMenu}>
            <MenuOutlined sx={{ fontSize: "2rem" }} />
          </IconButton>
          <Typography
            variant="h4"
            sx={styles.company}
            onClick={() => navigate("/")}
          >
            DRESS UP
          </Typography>
          <List sx={styles.list}>
            {pages.map((page) => (
              <ListItemButtonWrapper key={page.name} onClick={page.action}>
                <ListItemText>
                  <HeaderText variant="h6">{page.name}</HeaderText>
                </ListItemText>
              </ListItemButtonWrapper>
            ))}
          </List>
          <Actions>
            <Divider orientation="vertical" flexItem />

            <IconButton onClick={handleOpenCart}>
              <Badge badgeContent={cardItems.length} color="primary">
                <ShoppingBagOutlined sx={styles.iconStyle} />
              </Badge>
            </IconButton>
            <Divider orientation="vertical" flexItem />
            <IconButton onClick={handleOpenSearch}>
              <SearchOutlined sx={styles.iconStyle} />
            </IconButton>
            <Divider orientation="vertical" flexItem />
            {!role ? (
              <IconButton onClick={handleOpenAccountMenu}>
                <Badge badgeContent={2} color="primary">
                  <PersonOutline sx={styles.iconStyle} />
                </Badge>
              </IconButton>
            ) : (
              <Avatar
                alt="User"
                src={imageUrl}
                sx={{ mx: "1rem", cursor: "pointer" }}
                onClick={handleOpenAccountMenu}
              />
            )}
          </Actions>
        </Toolbar>
      </Container>
      <CustomizedSnackbar
        open={openSnackBar}
        handleClose={handleClose}
        severity={"error"}
        width={"500px"}
        message={"No item exist in the cart."}
      />
    </AppBar>
  );

  return content;
});

export default Navbar;
