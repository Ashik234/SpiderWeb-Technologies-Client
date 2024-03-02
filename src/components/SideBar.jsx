import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Arrow from "/arrow_drop_down.svg";
import LogOut from "/Upload.svg";
function SideBar() {
  const [EventsVisible, setEventsVisible] = useState(false);

  const toggleEvents = () => {
    setEventsVisible(!EventsVisible);
  };

  const [UsersVisible, setUsersVisible] = useState(false);

  const toggleUsers = () => {
    setUsersVisible(!UsersVisible);
  };
  return (
    <>
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <div
          style={{ backgroundColor: "#070b18" }}
          className="text-white w-56 h-screen rounded-lg md:flex hidden flex-col px-1 ml-8 border-pink-300 border-2"
        >
          <div className="flex flex-col items-center">
            <div className="flex flex-col w-full py-3">
              <div className="hover:bg-violet-900 rounded-md flex justify-between p-2">
                <h1 className="cursor-pointer ml-6">Events</h1>
                <motion.img
                  onClick={toggleEvents}
                  animate={{ rotate: EventsVisible ? -180 : 0 }}
                  transition={{ duration: 0.5 }}
                  src={Arrow}
                  className="cursor-pointer"
                  alt=""
                />
              </div>
              {EventsVisible && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: EventsVisible ? 1 : 0 }}
                  transition={{ duration: 0.7 }}
                  v
                  className="flex flex-col gap-y-4 ml-12 mt-4 "
                >
                  <h1>New Requests</h1>
                  <h1>Estimate</h1>
                  <h1>Events</h1>
                  <h1>Partial Requests</h1>
                </motion.div>
              )}
            </div>
            <div className="flex w-full py-3">
              <h1 className="cursor-pointer ml-8">Positions</h1>
            </div>
            <div className="flex w-full  py-3">
              <h1 className="cursor-pointer ml-8">Contractors</h1>
            </div>
            <div className="flex flex-col w-full py-3">
              <div className="hover:bg-violet-900 rounded-md flex justify-between p-2">
                <h1 className="cursor-pointer ml-6">Users</h1>
                <motion.img
                  onClick={toggleUsers}
                  animate={{ rotate: UsersVisible ? -180 : 0 }}
                  transition={{ duration: 0.5 }}
                  src={Arrow}
                  className="cursor-pointer"
                  alt=""
                />
              </div>
              {UsersVisible && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: UsersVisible ? 1 : 0 }}
                  transition={{ duration: 0.7 }}
                  v
                  className="flex flex-col gap-y-4 ml-12 mt-4 "
                >
                  <h1>Admins</h1>
                  <h1>Clients</h1>
                  <h1>Coordinates</h1>
                </motion.div>
              )}
            </div>
          </div>

          <div className="flex flex-col w-full space-y-4 mb-4">
            <div className="flex hover:bg-violet-900 rounded-md p-2">
              <h1 className="font-bold ml-6 cursor-pointer">Profile</h1>
            </div>

            <div className="flex bg-black rounded-md p-2">
              <Link to="/" className="flex w-full justify-center">
                <img src={LogOut} alt="" />
                <h1 className="font-bold ml-2 cursor-pointer">Logout</h1>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default SideBar;
