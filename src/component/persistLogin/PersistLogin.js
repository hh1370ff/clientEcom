import { useEffect } from "react";
import { Outlet } from "react-router";
import useRefreshToken from "../../hooks/useRefreshToken";
const PersistLogin = () => {
  const refresh = useRefreshToken();
  useEffect(() => {
    (async () => {
      if (JSON.parse(localStorage.getItem("login"))) {
        try {
          await refresh();
        } catch (error) {
          throw error;
        }
      }
    })();
  }, []);
  return <Outlet />;
};

export default PersistLogin;
