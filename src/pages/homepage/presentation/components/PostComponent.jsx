import React from "react";
import PostActionComp from "./PostActionComp";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import { Assets } from "../../../../assets";
const PostComponent = () => {
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
          <p className="text-[#676a6e]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
            architecto doloremque eos sapiente nemo voluptas quasi tempore fugit
            harum, tempora nisi, eveniet est aliquid dolore similique molestias
            dolor accusantium earum!
          </p>

          <div className="flex items-center mt-4 gap-8">
            <PostActionComp icon={FaRegComment} count="3" />
            <PostActionComp icon={AiOutlineRetweet} count="3" />
            <PostActionComp icon={AiOutlineHeart} count="3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostComponent;
