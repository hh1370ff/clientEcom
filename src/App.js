import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./page/home/Home";
import MainLayout from "./layouts/MainLayout";
import Checkout from "./page/checkout/Checkout";
import Confirmation from "./page/checkout/Confirmation";
import ItemDetails from "./features/item/itemDetails/ItemDetails";
import RequireAuth from "./component/requireAuth/RequireAuth";
import LoginRegister from "./page/loginRegister/loginRegister";
import AboutUs from "./page/aboutUs/AboutUs";
import { UiContextProvider } from "./uiContext/UiContext";
import { Box } from "@mui/material";
import PersistLogin from "./component/persistLogin/PersistLogin";
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <ScrollToTop />
      <UiContextProvider>
        <Routes>
          {/* public routes */}
          <Route element={<PersistLogin />}>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="aboutUs" element={<AboutUs />} />
              <Route path="/login" element={<LoginRegister />} />
              <Route path="item/:id" element={<ItemDetails />} />

              {/* private routes */}

              <Route element={<RequireAuth allowedRoles={["admin", "user"]} />}>
                <Route path="checkout" element={<Checkout />} />
                <Route path="confirmation" element={<Confirmation />} />
              </Route>

              {/* catch all */}
              <Route path="*" element={<Home />} />
            </Route>
          </Route>
        </Routes>
      </UiContextProvider>
    </Box>
  );
}

export default App;
