import { EmojiHappyIcon, PhotographIcon } from "@heroicons/react/outline";
import userImage from "../public/image/myImage.jpg";
import Image from "next/image";
const Input = () => {
  return (
    <div className="flex border-b border-gray-200 p-3 space-x-3">
      <Image
        className="w-11 h-11 rounded-full hover:brightness-95 cursor-pointer object-cover"
        src={userImage}
        alt="user-image"
      />
      <div className="w-full divide-y divide-gray-200">
        <div className="">
          <textarea
            className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wider min-h-[50px] text-gray-700"
            rows="2"
            placeholder="what' s happening?"
          ></textarea>
        </div>

        <div className="flex items-center justify-between pt-2.5">
          <div className="flex ">
            <PhotographIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
            <EmojiHappyIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
          </div>
          <button className="px-4 py-1.5 shadow-md rounded-full bg-blue-400 hover:brightness-95  text-white font-bold disabled:opacity-50">
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
