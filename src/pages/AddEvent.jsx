import React, { useState } from "react";
import Star from "/Star 2.svg";
import ArrowBack from "/arrow-left-02.svg";
import ArrowForward from "/arrow-right-02.svg";
import FilledRound from "/Ellipse 3.svg"
import Round from "/Ellipse 4.svg"
function AddEvent() {
  const [selectedCoordinator, setSelectedCoordinator] = useState("");

  const coordinators = ["Coordinator 1", "Coordinator 2", "Coordinator 3"];

  const handleSelectChange = (event) => {
    setSelectedCoordinator(event.target.value);
  };

  return (
    <div
      className="rounded-xl text-white border-pink-300 border-2 p-2"
      style={{
        background: "linear-gradient(to bottom, indigo, black)",
      }}
    >
      <div className="flex p-2 items-center">
        <h1 className="font-bold text-xl mr-1">Event Name</h1>
        <p>(Venue Details)</p>
      </div>
      <div className="flex p-2 gap-x-4 border border-pink-300 text-pink-300 rounded-lg w-8/12">
        <h1 className="text-pink-300 " style={{ textShadow: "0 0 10px pink" }} >Event Details</h1>
        <h1 className="text-pink-300 " style={{ textShadow: "0 0 10px pink" }}>Assign Coordinator/Coordinator</h1>
        <h1 className="text-pink-300 " style={{ textShadow: "0 0 10px pink" }}>Session Management</h1>
        <h1 className="text-pink-300 " style={{ textShadow: "0 0 10px pink" }}>Generate SOW</h1>
      </div>
      <div className="flex mt-2 p-2 gap-x-2">
        <div className="w-1/2">
          <h1 className="font-semibold mb-2">Assign Coordinator</h1>
          <select
            value={selectedCoordinator}
            onChange={handleSelectChange}
            className="w-full p-2 border rounded text-black"
          >
            <option value="">Search Coordinator</option>
            {coordinators.map((coordinator, index) => (
              <option key={index} value={coordinator}>
                {coordinator}
              </option>
            ))}
          </select>
        </div>
        <div className="w-1/2">
          <div className="flex ">
            <h1 className="font-semibold mr-1">Event Name</h1>
            <p>(Venue Here)</p>
          </div>
          <div className="border border-pink-300 flex gap-x-24 rounded-md p-1 mt-2">
            <h1>Start: 12-12-2023</h1>
            <h1>Ends: 15-12-2023</h1>
          </div>
          <div className="border border-pink-300 flex rounded-md p-1 mt-2">
            <h1>Venue Address: Some Location 12, Name Here, City, State.</h1>
          </div>
        </div>
      </div>
      <div className="flex gap-x-2">
        <div className="w-1/3">
          <h1 className="font-semibold ml-2">Assign Contractor</h1>
          <div className="bg-black p-2 rounded-lg">
            <div className="bg-pink-400 rounded-lg flex flex-col p-2 mb-2">
              <div className="flex gap-x-2">
                <h1 className="font-semibold">Meeting Room 1</h1>
                <img src={Star} alt="" />
                <p className="text-black font-semibold">12 Positions</p>
              </div>
              <p className="text-sm">
                Start from 12 Jan, 2023 - Ends at 15 Jan, 2023
              </p>
            </div>
            <div className="border border-pink-300 rounded-lg flex flex-col p-2 mb-2">
              <div className="flex gap-x-2">
                <h1 className="font-semibold">Meeting Room 2</h1>
                <img src={Star} alt="" />
                <p className="font-semibold">12 Positions</p>
              </div>
              <p className="text-sm">
                Start from 12 Jan, 2023 - Ends at 15 Jan, 2023
              </p>
            </div>
            <div className="border border-pink-300 rounded-lg flex flex-col p-2 mb-2">
              <div className="flex gap-x-2">
                <h1 className="font-semibold">Meeting Room 3</h1>
                <img src={Star} alt="" />
                <p className="">12 Positions</p>
              </div>
              <p className="text-sm">
                Start from 12 Jan, 2023 - Ends at 15 Jan, 2023
              </p>
            </div>
            <div className="border border-pink-300 rounded-lg flex flex-col p-2">
              <div className="flex gap-x-2">
                <h1 className="font-semibold">Meeting Room 4</h1>
                <img src={Star} alt="" />
                <p className="font-semibold">12 Positions</p>
              </div>
              <p className="text-sm">
                Start from 12 Jan, 2023 - Ends at 15 Jan, 2023
              </p>
            </div>
            <div className="border border-pink-300 rounded-lg flex flex-col p-2">
              <div className="flex gap-x-2">
                <h1 className="font-semibold">Meeting Room 5</h1>
                <img src={Star} alt="" />
                <p className="font-semibold">12 Positions</p>
              </div>
              <p className="text-sm">
                Start from 12 Jan, 2023 - Ends at 15 Jan, 2023
              </p>
            </div>
          </div>
        </div>
        <div className="w-2/3 mt-6">
          <h1 className="font-semibold">Positions</h1>
          <div className="bg-black rounded-t-lg p-1">
            <div className="flex gap-x-20 mt-2 mb-2">
              <h1>Position</h1>
              <h1 className="md:ml-7">Time</h1>
              <h1>Info</h1>
              <h1>Quantity</h1>
            </div>
            <hr />
            <div className="flex justify-between items-center mt-1 mb-1">
              <h1>Camera 1(Video)</h1>
              <h1>9 am - 7 pm</h1>
              <h1>LP Default</h1>
              <h1>20</h1>
              <select
                value={selectedCoordinator}
                onChange={handleSelectChange}
                className="w- p-2 border rounded text-black"
              >
                <option value="">Search Coordinator</option>
                {coordinators.map((coordinator, index) => (
                  <option key={index} value={coordinator}>
                    {coordinator}
                  </option>
                ))}
              </select>
            </div>
            <hr />
            <div className="flex justify-between items-center mt-1 mb-1">
              <h1>Camera 1(Video)</h1>
              <h1>9 am - 7 pm</h1>
              <h1>LP Default</h1>
              <h1>20</h1>
              <select
                value={selectedCoordinator}
                onChange={handleSelectChange}
                className="w- p-2 border rounded text-black"
              >
                <option value="">Search Coordinator</option>
                {coordinators.map((coordinator, index) => (
                  <option key={index} value={coordinator}>
                    {coordinator}
                  </option>
                ))}
              </select>
            </div>
            <hr />
            <div className="flex justify-between items-center mt-1 mb-1">
              <h1>Camera 1(Video)</h1>
              <h1>9 am - 7 pm</h1>
              <h1>LP Default</h1>
              <h1>20</h1>
              <select
                value={selectedCoordinator}
                onChange={handleSelectChange}
                className="w- p-2 border rounded text-black"
              >
                <option value="">Search Coordinator</option>
                {coordinators.map((coordinator, index) => (
                  <option key={index} value={coordinator}>
                    {coordinator}
                  </option>
                ))}
              </select>
            </div>
            <hr />
            <div className="flex justify-between items-center mt-1 mb-1">
              <h1>Camera 1(Video)</h1>
              <h1>9 am - 7 pm</h1>
              <h1>LP Default</h1>
              <h1>20</h1>
              <select
                value={selectedCoordinator}
                onChange={handleSelectChange}
                className="w- p-2 border rounded text-black"
              >
                <option value="">Search Coordinator</option>
                {coordinators.map((coordinator, index) => (
                  <option key={index} value={coordinator}>
                    {coordinator}
                  </option>
                ))}
              </select>
            </div>
            <hr />
            <div className="flex justify-between items-center mt-1 mb-1">
              <h1>Camera 1(Video)</h1>
              <h1>9 am - 7 pm</h1>
              <h1>LP Default</h1>
              <h1>20</h1>
              <select
                value={selectedCoordinator}
                onChange={handleSelectChange}
                className="w- p-2 border rounded text-black"
              >
                <option value="">Search Coordinator</option>
                {coordinators.map((coordinator, index) => (
                  <option key={index} value={coordinator}>
                    {coordinator}
                  </option>
                ))}
              </select>
            </div>
            <hr />
            

          </div>

          <div className="bg-black rounded-b-xl p-2">
        <div className="flex justify-center gap-x-4">
          <img src={ArrowBack} alt="" />
          <img src={Round} alt="" />
          <img src={FilledRound} alt="" />
          <img src={ArrowForward} alt="" />
        </div>
      </div>

      <button className="bg-pink-500 rounded-lg p-2 mt-4 px-8" style={{ boxShadow: "0 0 5px pink" }}>Save Edits</button>
        </div>
      </div>
      
    </div>
  );
}

export default AddEvent;
