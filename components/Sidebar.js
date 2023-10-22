import Image from "next/image";
import myImage from "../public/image/myImage.jpg";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import SideBarMenuItem from "./SideBarMenuItem";

const Sidebar = () => {
  const menu = [
    {
      text: "Home",
      Icon: HomeIcon,
      active: true,
    },
    {
      text: "Explore",
      Icon: HashtagIcon,
    },
    {
      text: "Notifications",
      Icon: BellIcon,
    },
    {
      text: "Messages",
      Icon: InboxIcon,
    },
    {
      text: "BookMarks",
      Icon: BookmarkIcon,
    },
    {
      text: "Lists",
      Icon: ClipboardIcon,
    },
    {
      text: "Profile",
      Icon: UserIcon,
    },
    {
      text: "More",
      Icon: DotsCircleHorizontalIcon,
    },
  ];
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full">
      <div className="hoverEffect p-0 hover:bg-blue-100 xl:p-1.5 ">
        <Image
          width="50"
          height="50"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/220px-Logo_of_Twitter.svg.png"
          alt="tweet-logo"
        />
      </div>
      <div className="mt-4 mb-2.5 xl:items-start">
        {menu.map((item, ind) => (
          <SideBarMenuItem
            key={ind}
            text={item.text}
            Icon={item.Icon}
            active={item.active}
          />
        ))}
      </div>
      <button className="hidden xl:inline w-56 h-12 bg-blue-400 rounded-full hover:brightness-95 shadow-md text-white font-bold text-lg">
        Tweet
      </button>
      <div className="hoverEffect flex items-center justify-center mt-auto xl:justify-start">
        <Image
          className="w-11 h-11 rounded-full object-cover"
          src={myImage}
          alt="my Image"
        />
        <div className="leading-5 hidden xl:inline">
          <h4 className="font-bold">Ali Mizbani</h4>
          <p className="text-gray-500">@codeWithMe</p>
        </div>
        <DotsHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
      </div>
    </div>
  );
};

export default Sidebar;
