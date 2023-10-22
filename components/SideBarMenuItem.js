const SideBarMenuItem = ({ Icon, text, active }) => {
  return (
    <div className="hoverEffect flex items-center  text-gray-700 space-x-3 justify-center xl:justify-start">
      <Icon className="h-7" />

      <sapn className={`${active && "font-bold"} hidden xl:inline`}>
        {text}
      </sapn>
    </div>
  );
};

export default SideBarMenuItem;
