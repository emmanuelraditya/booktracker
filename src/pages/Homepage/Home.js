import React from "react";
import Navbar from "../../components/Home/Navbar/Navbar";
import BookList from "../../components/Home/BookList/BookList";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "Center",
          alignItems: "normal",
          height: "100vh",
        }}
      >
        <BookList />
      </div>
    </div>
  );
};

export default Home;
