import React from "react";
import { RxImage, RxListBullet } from "react-icons/rx";
import { MdOutlineGifBox } from "react-icons/md";
import { CiFaceSmile } from "react-icons/ci";
import { SlCalender, SlLocationPin } from "react-icons/sl";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Assets } from "../../../../assets";
const TweetComponent = () => {
  return (
    <section>
      <div className="mt-12 flex">
        <img className="w-10 h-10 rounded-full" src={Assets.Avatar} alt="" />

        <form className="w-full">
          <textarea
            name=""
            placeholder="Whats happening?!"
            className="p-3 outline-none border-none resize-none w-full"
            id=""
            rows="4"
          ></textarea>
          <hr />

          <div className="flex items-center my-3 justify-between">
            <div className="flex gap-3 ">
              <RxImage color="#1e9cf0" size={20} />

              <MdOutlineGifBox color="#1e9cf0" size={20} />
              <RxListBullet color="#1e9cf0" size={20} />
              <CiFaceSmile color="#1e9cf0" size={20} />
              <SlCalender color="#1e9cf0" size={20} />
              <SlLocationPin color="#1e9cf0" size={20} />
            </div>

            <div className="flex items-center gap-5">
              <AiOutlinePlusCircle color="#1e9cf0" size={20} />
              <button className="bg-[#28a2e5] py-1 text-white px-3 rounded-full">
                Tweet
              </button>
            </div>
          </div>
        </form>
      </div>
      <hr />
    </section>
  );
};

export default TweetComponent;
