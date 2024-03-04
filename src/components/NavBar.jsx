import React from "react";
import Report from "/report.svg";
import Notification from "/notifications.svg";
function NavBar() {
  return (
    <div className="flex justify-center items-start gap-x-3 mt-8 mb-4">
      <img className="mt-1" src={Report} alt="" />
      <img className="mt-1" src={Notification} alt="" />
      <div className="flex gap-x-2">
        <div className="flex flex-col text-white">
          <h1>
            Hi, <span className="text-cyan-500">Muhammed Azad</span>
          </h1>
          <p>Welcome Back!</p>{" "}
        </div>
        <div className="border-2 border-pink-400 rounded-full">
          <img
            src="https://th.bing.com/th?id=OIP.w6Cs6qz234c71XloeqKdwgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
            className="rounded-full w-12"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
