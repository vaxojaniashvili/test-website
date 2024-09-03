import Header from "@/app/common/components/Header/Header";
import React from "react";

const MoviePage = () => {
  return (
    <div>
      <Header />
      <div className="h-screen flex flex-col">
        <iframe
          className="flex-grow"
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/_3pV4ffsAvI?si=QSanDrpYPEFQnIEb"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};

export default MoviePage;
