import { SparklesIcon } from "@heroicons/react/outline";
import Input from "./Input";
import Post from "./Post";

const Feed = () => {
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 flex-grow sm:ml-[73px] xl:min-w-[576px] max-w-xl">
      <div className="flex py-2 px-3 top-0 sticky z-50 border-b border-gray-200 bg-white">
        <h2 className="font-bold text-lg sm:text-xl cursor-pointer">Home</h2>
        <div className="ml-auto flex justify-center items-center px-0 w-9 h-9">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <Input />
      <Post />
    </div>
  );
};

export default Feed;
