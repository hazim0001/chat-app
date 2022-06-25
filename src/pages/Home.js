import React from "react";
import { Outlet, Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to={"/rooms"}> All Rooms</Link>
      <Outlet />
    </div>
  );
};

export default Home;
