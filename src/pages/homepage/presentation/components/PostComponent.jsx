import React from "react";
import PostActionComp from "./PostActionComp";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import { Assets } from "../../../../assets";
import { useDispatch } from "react-redux";
import { likePost } from "../../../../redux/slices/postSlice";
const PostComponent = ({ post, index }) => {
  const myId = "this_is--My--123Id";
  const dispatch = useDispatch();

  const handlePostLike = () => {
    dispatch(
      likePost({
        myId,
        postIndex: index,
      })
    );
  };
  return (
    <section>
      <div className="flex gap-3 my-10">
        <img className="w-10 h-10 rounded-full" src={Assets.Avatar} alt="" />
        <div className="">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-medium">Owen</h3>
            <p className="text-[rgba(0,0,0,.5)] text-sm">@Owen</p>
            <small className="text-[rgba(0,0,0,.5)] text-sm">May 5</small>
          </div>
          <p className="text-[#676a6e]">{post.content}</p>

          <div className="flex items-center mt-4 gap-8">
            <PostActionComp icon={FaRegComment} count={post.comments.length} />
            <PostActionComp
              icon={AiOutlineRetweet}
              count={post.retweet.length}
            />
            <PostActionComp
              onClick={handlePostLike}
              icon={AiOutlineHeart}
              count={post.likes.length}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostComponent;
