import React from "react";

import TweetComponent from "./components/TweetComponent";
import PostComponent from "./components/PostComponent";

const HomePage = () => {
  return (
    <>
      <div className="grid grid-cols-12 w-full">
        <div className="col-span-8">
          <h3 className="text-xl font-bold">Home</h3>

          <TweetComponent />
          <PostComponent />
          <PostComponent />
          <PostComponent />
          <PostComponent />
          <PostComponent />
        </div>
        <div className="col-span-4">Right</div>
      </div>
    </>
  );
};

export default HomePage;
