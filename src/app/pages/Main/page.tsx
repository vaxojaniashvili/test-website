import React from "react";
import Header from "@/app/common/components/Header/Header";

const MainPage = () => {
  return (
    <div>
      <Header />
      <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
        <h1 className="text-5xl text-center tracking-wide leading-tight">
          {" "}
          Hello this is website for movies,watch and enjoy,from administration
          ❤️
        </h1>
      </div>
    </div>
  );
};

export default MainPage;
