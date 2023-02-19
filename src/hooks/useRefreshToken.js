import { useDispatch, useSelector } from "react-redux";
import { selectCurrentToken, setCredential } from "../features/auth/authSlice";
import { axiosPrivateInstance } from "../api/axiosInstance";

const useRefreshToken = () => {
  const accessToken = useSelector(selectCurrentToken);

  const dispatch = useDispatch();

  const refresh = async () => {
    const res = await axiosPrivateInstance.get("/auth/refresh");
    const { accessToken: newAccessToken, role } = res.data;

    dispatch(setCredential({ accessToken: newAccessToken, role }));

    return newAccessToken;
  };
  return refresh;
};

export default useRefreshToken;
