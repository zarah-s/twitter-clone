import React from "react";

import TweetComponent from "./components/TweetComponent";
import PostComponent from "./components/PostComponent";
import { useSelector } from "react-redux";

const HomePage = () => {
  const posts = useSelector((state) => state.posts.posts);
  return (
    <>
      <div className="grid grid-cols-12 w-full">
        <div className="col-span-8">
          <h3 className="text-xl font-bold">Home</h3>

          <TweetComponent />

          {posts.map((post, index) => {
            return <PostComponent key={index} index={index} post={post} />;
          })}
        </div>
        <div className="col-span-4">Right</div>
      </div>
    </>
  );
};

export default HomePage;
