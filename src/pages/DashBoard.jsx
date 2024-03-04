import React from "react";
import { AutoComplete, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Add from "/add-01.svg";
import Eye from "/eye.svg";
import Arrow from "/arrow_drop_down.svg";
import ArrowBack from "/arrow-left-02.svg";
import ArrowForward from "/arrow-right-02.svg";
import { Link } from "react-router-dom";

const options = [
  {
    value: "Burns Bay Road",
  },
  {
    value: "Downing Street",
  },
  {
    value: "Wall Street",
  },
];

function DashBoard() {
  return (
    <div
      className="rounded-xl text-white border-pink-300 border-2"
      style={{
        background: "linear-gradient(to bottom, indigo, black)",
      }}
    >
      <div className="flex justify-between p-4">
        <h1 className="font-bold text-xl">Event Requests</h1>
        <div className="flex">
          <AutoComplete
            style={{ width: 200 }}
            options={options}
            filterOption={(inputValue, option) =>
              option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
              -1
            }
          >
            <Input prefix={<SearchOutlined />} placeholder="Search here" />
          </AutoComplete>
          <Link to="/add">
            <div className="ml-2 bg-pink-500 flex justify-center items-center rounded-sm my-1">
              <img src={Add} alt="" />
            </div>
          </Link>
        </div>
      </div>
      <div
        style={{ backgroundColor: "#D175B6" }}
        className="flex p-2 justify-around"
      >
        <div className="flex justify-between">
          <h1>Event Name</h1>
          <div className="bg-white rounded-full ml-1">
            <img src={Arrow} alt="" />
          </div>
        </div>
        <h1>Event Start</h1>
        <div className="flex justify-between">
          <h1>Event End</h1>
          <div className="bg-white rounded-full ml-1">
            <img src={Arrow} alt="" />
          </div>
        </div>
        <div className="flex justify-between">
          <h1>Client Name</h1>
          <div className="bg-white rounded-full ml-1">
            <img src={Arrow} alt="" />
          </div>
        </div>
        <h1>Contact Info</h1>
        <h1>Venue</h1>
        <h1>City</h1>
        <h1>State</h1>
        <h1>Zip Code</h1>
      </div>
      <div className="flex flex-col">
        <div className="flex gap-x-6 items-center">
          <div className="flex p-2 mx-2 gap-x-2">
            <img src={Eye} alt="" />
            <h1>Filled Name</h1>
          </div>
          <h1>Jan 12, 2024</h1>
          <h1>Jan 12, 2024</h1>
          <h1>Muhammed Asad</h1>
          <h1>+91 2323312121</h1>
          <h1>Loren Ipsum High Tower</h1>
          <h1>-</h1>
          <h1>-</h1>
          <h1>-</h1>
        </div>
        <hr />
      </div>
      <div className="bg-black rounded-xl p-2">
        <div className="flex justify-center gap-x-4">
          <img src={ArrowBack} alt="" />
          <h1>1</h1>
          <h1>2</h1>
          <h1>3</h1>
          <h1>4</h1>
          <img src={ArrowForward} alt="" />
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
