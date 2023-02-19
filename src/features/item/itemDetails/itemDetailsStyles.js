export const style = {
  wrapperBox: { display: "flex", flexDirection: "column", gap: "2rem" },
  topWrapperBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",
    minHeight: "calc(100vh - 64px)",
  },
  topBox: {
    display: "flex",
    flexDirection: {
      xs: "column",
      md: "row",
    },
    gap: "2rem",
    width: "80%",
    justifyContent: "center",
    alignItems: {
      md: "start",
      xs: "center",
    },
    minHeight: `calc(100vh - 8rem)`,
  },
  topBoxRight: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    mt: { md: "2rem" },
    width: {
      xs: "400px",
      md: "100%",
    },
    alignItems: {
      xs: "center",
      md: "start",
    },
  },
  rightDescription: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    alignItems: {
      xs: "center",
      md: "start",
    },
  },

  rightButtonWrapper: {
    display: "flex",
    justifyContent: {
      md: "start",
      xs: "center",
    },
    gap: "2rem",
    alignItems: "center",
    width: "100%",
  },

  incDecWrapper: {
    backgroundColor: "white",
    width: "7rem",
    height: "2.75rem",
    ml: "5px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid purple",
  },

  addToCartButton: {
    height: "2.75rem",
    mr: ".5rem",
    width: "9rem",
    backgroundColor: "white",
    border: "1px solid purple",
    "&:hover": {
      backgroundColor: "rgba(191, 64, 191, 0.2)",
    },
  },
};
