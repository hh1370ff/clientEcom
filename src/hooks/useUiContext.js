import { useContext } from "react";
import { uiContext } from "../uiContext/UiContext";

const useUiContext = () => {
  const {
    openSearch,
    handleOpenSearch,
    handleCloseSearch,
    openCart,
    handleOpenCart,
    handleCloseCart,
  } = useContext(uiContext);

  return {
    openSearch,
    handleOpenSearch,
    handleCloseSearch,
    openCart,
    handleOpenCart,
    handleCloseCart,
  };
};

export default useUiContext;
