import { useEffect } from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    void (navigate("/recipes"), []);
  });

  return <div></div>;
};

export default Home;
