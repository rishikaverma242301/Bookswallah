import React from "react";
import Slider from "./Slider";

const Bookscarousel = () => {
  return (
    <div>
      <div>
        <img
          src="/Images/Bookscarousel/booksofmonth.jpg"
          alt="Books of the Month"
          className="w-full object-cover "
        />
      </div>

      <div className="flex gap-2">
        <div className="w-[60%] ">
          <Slider />
        </div>

        <div className="flex flex-col gap-1 w-[40%]">
          <img
            src="/Images/Bookscarousel/two.jpg"
            alt="Book Two"
            className="h-[40%]"
          />
          <img
            src="/Images/Bookscarousel/one.jpg"
            alt="Book One"
            className="h-[35%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Bookscarousel;
