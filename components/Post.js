import {
  ChartBarIcon,
  ChatIcon,
  DotsHorizontalIcon,
  HeartIcon,
  ShareIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import userImage from "../public/image/myImage.jpg";

const Post = () => {
  return (
    <div className="p-3 flex cursor-pointer border-b border-gray-200">
      <Image
        className="w-11 h-11 mr-4 rounded-full"
        src={userImage}
        alt="user-image"
      />
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 whitespace-nowrap">
            <h4 className="font-bold  text-[15px] sm:text-[16px] hover:underline">
              Ali Mizbani
            </h4>
            <span className="text-sm sm:text-[15px]">@codewithme -</span>
            <span className="text-sm sm:text-[15px] hover:underline">
              2 Hours Ago
            </span>
          </div>

          <DotsHorizontalIcon className="h-10 w-10 p-2 hoverEffect hover:bg-sky-100 hover:text-sky-400" />
        </div>

        <p className="text-gray-800  text-[15px] sm:text-[16px] mb-2">
          nice view!
        </p>
        <Image
          width="600"
          height="600"
          className=" rounded-2xl mr-2"
          src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
        <div className="flex justify-between text-gray-500 p-2">
          <div className="flex items-center  select-none">
            <ChatIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
          </div>

          <TrashIcon className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100" />

          <div className="flex items-center">
            <HeartIcon className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100" />

            <span className="text-sm select-none"> </span>
          </div>

          <ShareIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
          <ChartBarIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
        </div>
      </div>
    </div>
  );
};

export default Post;
