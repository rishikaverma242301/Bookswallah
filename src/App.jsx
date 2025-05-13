import React from "react";
import Header from "./Components/Header";
import Bookscarousel from "./Components/Bookscarousel";
import Icons from "./Components/Icons";
import Grid from "./Components/Nowtrending";
import BestSellers from "./Components/BestSellers";
import NewArrival from "./Components/NewArrival";
import International from "./Components/International";
import Awards from "./Components/Awards";
import TopBooks from "./Components/TopBooks";
import Minimumdis from "./Components/Minimumdis";
import Boxsets from "./Components/Boxsets";
import Author from "./Components/Author";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Bookscarousel />

      <Icons />
      <Grid />
      <BestSellers />
      <NewArrival />
      <International />
      <Awards />
      <TopBooks />
      <Minimumdis />
      <Boxsets />
      <Author />
      <Footer />
    </div>
  );
};

export default App;
