import { Navigate } from "react-router-dom";

const Home = () => {
  const user = localStorage.getItem("Access Token");
  if (user) {
    return <Navigate to="/homepage" />;
  } else {
    return <Navigate to="/welcome" />;
  }
};
export default Home;
