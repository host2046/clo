import { SearchIcon } from "@heroicons/react/outline";

const Widgets = () => {
  return (
    <div className="xl:w-[600px] ml-8 space-y-5 hidden lg:inline">
      <div className="w-[90%] xl:w-[75%] sticky top-0 bg-white py-1.5 z-50 ">
        <div className="flex items-center rounded-full p-3  relative">
          <SearchIcon className="h-5 z-50 text-gray-500 " />
          <input
            className="absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700 placeholder-gray-500 focus:shadow-lg focus:bg-white bg-gray-100"
            type="text"
            placeholder="Search Twitter... "
          />
        </div>
      </div>
    </div>
  );
};

export default Widgets;
