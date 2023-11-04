import { SearchIcon } from "@heroicons/react/outline";
import News from "./News";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Widgets = ({ articleResults, randomUserResult }) => {
  const [aritcleNum, setArticleNum] = useState(3);
  const [userNum, setUserNum] = useState(3);
  return (
    <div className="xl:w-[600px] ml-8 space-y-5 hidden lg:inline">
      <div className="w-[90%] xl:w-[75%] sticky top-0 bg-white py-1.5 z-50 ">
        <div className="flex items-center rounded-full p-3 relative">
          <SearchIcon className="h-5 z-50 text-gray-500 " />
          <input
            className="absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700 placeholder-gray-500 focus:shadow-lg focus:bg-white bg-gray-100"
            type="text"
            placeholder="Search Twitter... "
          />
        </div>
      </div>
      <div className="bg-gray-100 pt-2 space-y-3 text-gray-500 rounded-xl w-[90%] xl:w-[75%] transition duration-500 ease-out">
        <h4 className="px-4  text-xl font-bold text-gray-700">
          What 's Happening
        </h4>
        <AnimatePresence>
          {articleResults.slice(0, aritcleNum).map((article) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2 }}
            >
              <News key={article.title} article={article} />
            </motion.div>
          ))}
        </AnimatePresence>

        <button
          onClick={() => setArticleNum(aritcleNum + 3)}
          className=" text-blue-300 pl-4 hover:text-blue-400 pb-3"
        >
          Show More
        </button>
      </div>
      <div className="sticky top-16 space-y-2  text-gray-700 bg-gray-100 w-[90%] xl:w-[75%] rounded-xl transition duration-500 ease-out">
        <h4 className="px-4 pt-2 font-bold text-xl">Who to follow</h4>
        <AnimatePresence>
          {randomUserResult.slice(0, userNum).map((user) => (
            <motion.div
              key={user.login.username}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2 }}
            >
              <div
                key={user.login.username}
                className="flex items-center justify-between   px-4 py-2 space-x-1 cursor-pointer hover:bg-gray-200 transition duration-200 "
              >
                <img
                  className="rounded-full object-cover"
                  width="40"
                  src={user.picture.thumbnail}
                  alt=""
                />
                <div className="leading-4 ">
                  <h5 className="font-bold text-[14px] text-gray-700 hover:underline">
                    {user.login.username}
                  </h5>
                  <h6 className="text-[13px] text-gray-500">
                    {user.name.first + " " + user.name.last}
                  </h6>
                </div>
                <button className="px-3.5 py-1.5 bg-black text-white rounded-full font-bold text-sm shadow-sm">
                  follow
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        <button
          onClick={() => setUserNum(userNum + 3)}
          className="pl-4 text-blue-300 hover:text-blue-400 pb-2"
        >
          Show More
        </button>
      </div>
    </div>
  );
};

export default Widgets;
