import React, { Suspense } from "react";
import room2 from "./Images/room2.jpeg"; import room3 from "./Images/room3.jpeg";
import room4 from "./Images/room4.jpeg"; import room5 from "./Images/room5.jpeg";
import room6 from "./Images/room6.webp";
import room7 from "./Images/room7.jpeg";import room10 from "./Images/room10.jpeg";
import room8 from "./Images/room8.jpeg"; import room9 from "./Images/room9.jpeg";
import "./rooms.css"
import { Outlet } from "react-router-dom";




function Rooms() {

    const roomItem =[
    {
    Name: "Single Room",
    Price: "$500 per Night",
    Status: "Avialable",
    Image: <img src={room2} alt="/"/>,
},
{
    Name: "Single Room",
    Price: "$1500 per Night",
    Status: "Avialable",
    Image:<img src={room3} alt="/"/>
},
{
    Name: "Double Room",
    Price: "$700 per Night",
    Status: "Avialable",
    Image: <img src={room4} alt="/"/>
},
{
    Name: "4 in 1 Room",
    Price: "$900 per Night",
    Status: "Avialable",
    Image: <img src={room5} alt="/"/>
},
{
    Name: "Single Room",
    Price: "$500 per Night",
    Status: "Avialable",
    Image:<img src={room6} alt="/"/>,
},
{
    Name: "Double Room",
    Price: "$2000 per Night",
    Status: "Avialable",
    Image: <img src={room7} alt="/"/>,
},
{
    Name: "Presidential Room",
    Price: "$5000 per Night",
    Status: "Avialable",
    Image: <img src={room8} alt="/"/>,
},
{
    Name: "Single Room",
    Price: "$510 per Night",
    Status: "Avialable",
    Image: <img src={room9} alt="/"/>,
},
{
    Name: "wide Room",
    Price: "$2500 per Night",
    Status: "Avialable",
    Image: <img src={room10} alt="/"/>,
},


    ]
    const roomList = roomItem.map((item) => {
        return (
            <div className="roomCon">
            <Suspense fallback={<div>Please Wait</div>}>
                <h3>{item.Name}</h3>
                <div className="pStatus">
                <h2>Price : {item.Price}</h2>
                <h2>Status : {item.Status}</h2>
                </div>
                {item.Image}
                </Suspense>
            </div>
        )
         
    })
  return (
   
    <div className="con-con">
     <>
        <Outlet/>
    </>
      <h1 style={{ fontWeight: "100", fontSize: "40px" }}>
        Room Prices
      </h1>
      {roomList}
      {/* <img src={} alt="rooms"></img> */}
    </div>
  );
}

export default Rooms;
