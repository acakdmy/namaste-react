import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";
import Footer from "./components/Footer";

/*
    Header
      - Logo(Title)
      - Nav Items (Right side)
      -Cart
    Body
      -Search bar
      - ResurantList
        -ResturanatCard
          -Image
          -Name
          -Rating
          -Cusines
    Footer
      - Link
      - Copyright
    */





// Config Driven UI



// Optional chaining  = ?   in Javascript



const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
