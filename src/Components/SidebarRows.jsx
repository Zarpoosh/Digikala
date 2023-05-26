import React from "react";
// import { RiArrowDownSLine } from "react-icons/ri";

const SidebarRows = ({ Icon, title }) => {
  return (
    <div>
      <li>
        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg ">
          <i>
            <Icon className="h-6 w-6 text-gray-400" />
          </i>
          <p className="mr-2 text-sm">{title}</p>
          {/* <i className="mr-auto">
            <Arrow className="h-5 w-5" />
          </i> */}
        </a>
      </li>
    </div>
  );
};

export default SidebarRows;
