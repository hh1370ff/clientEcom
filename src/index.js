import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes } from "react-router-dom";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "./theme";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { fetchItems } from "./features/item/itemSlice";
import { fetchImages } from "./features/carousel/carouselSlice";
import { fetchItemImages } from "./features/itemImage/itemImageSlice";
import { fetchCarouselImages } from "./features/carouselImage/carouselImageSlice";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

if (process.env.NODE_ENV === "production") {
  disableReactDevTools();
}

store.dispatch(fetchItems());
store.dispatch(fetchImages());
store.dispatch(fetchItemImages());
store.dispatch(fetchCarouselImages());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);
