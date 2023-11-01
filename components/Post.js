import {
  ChartBarIcon,
  ChatIcon,
  DotsHorizontalIcon,
  HeartIcon,
  ShareIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import Moment from "react-moment";

const Post = ({ post }) => {
  return (
    <div className="p-3 flex cursor-pointer border-b border-gray-200">
      <img
        className="w-11 h-11 mr-4 rounded-full"
        src={post.data().userImage}
        alt="user-image"
      />
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 whitespace-nowrap">
            <h4 className="font-bold  text-[15px] sm:text-[16px] hover:underline">
              {post.data().name}
            </h4>
            <span className="text-sm sm:text-[15px]">
              @{post.data().username} -{" "}
            </span>
            <span className="text-sm sm:text-[15px] hover:underline">
              <Moment fromNow>{post?.timestamp?.toDate()}</Moment>
            </span>
          </div>

          <DotsHorizontalIcon className="h-10 w-10 p-2 hoverEffect hover:bg-sky-100 hover:text-sky-400" />
        </div>

        <p className="text-gray-800  text-[15px] sm:text-[16px] mb-2">
          {post.data().text}
        </p>
        <img className=" rounded-2xl mr-2" src={post.data().image} alt="" />
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
