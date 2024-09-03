import Header from "@/app/common/components/Header/Header";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
        <h1 className="text-3xl text-center">
          This website is a test project designed for showcasing movie data and
          enhancing user experience. It provides brief descriptions, ratings,
          and reviews of various films. ❤️
        </h1>
      </div>
    </div>
  );
};

export default page;
