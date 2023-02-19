import { createContext, useState } from "react";

export const uiContext = createContext({});

export const UiContextProvider = ({ children }) => {
  /* search state and handlers */
  const [openSearch, setOpenSearch] = useState(false);

  const handleOpenSearch = () => {
    window.onpopstate = handleCloseSearch;
    setOpenSearch(true);
  };

  const handleCloseSearch = () => {
    window.onpopstate = "undefined";
    setOpenSearch(false);
  };

  /* cart states and handler */
  const [openCart, setOpenCart] = useState(false);

  const handleOpenCart = () => {
    window.onpopstate = handleCloseCart;
    setOpenCart(true);
  };
  const handleCloseCart = () => {
    window.onpopstate = "undefined";
    setOpenCart(false);
  };

  return (
    <uiContext.Provider
      value={{
        openSearch,
        handleOpenSearch,
        handleCloseSearch,
        openCart,
        handleOpenCart,
        handleCloseCart,
      }}
    >
      {children}
    </uiContext.Provider>
  );
};
