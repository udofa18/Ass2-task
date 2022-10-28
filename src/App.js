import React, { useEffect } from "react"
import './App.css'
import Home from "./Home"
import AboutUs from "./AboutUs"
import ContactUs from "./Contact"
import Users from "./Users"
import NotFound from "./NotFound"
import Rooms from "./Rooms"
import Room1 from "./Room1"
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary"
import { Suspense } from "react"


const ErrorFallback = ({error, resetErrorBoundary})=> {
  return(
  <div>
    <p>error.message</p>
    <button onClick={() => resetErrorBoundary}>Reset</button>

  </div> 
  );
};


function App() {
  const navigate = useNavigate();

  useEffect(()=>{
    const fetchRequest =  async () =>{
      const response = await fetch (
       " https://randomuser.me/api/1.4?results=50"
      );
      console.log(response)
    };
    fetchRequest();
    });
  return (
    
    <div className="main-container">
    <ErrorBoundary FallbackComponent={ErrorFallback}
    nonReset={()=> navigate ("/")}>
     <Suspense fallback={<div>Please Wait</div>}>
     <h1>Daniels Abode</h1>
  <nav className="navigation">
    <ul>
      <li> <Link to ="/">Home</Link></li>
      <li> <Link to="/AboutUs">About Us</Link></li>
      <li> <Link to="/Contact">Contact Us</Link></li>
      <li> <Link to="/User">Customer Care</Link></li>
      <li> <Link to="/Rooms">Rooms</Link></li>
      
    </ul>
  </nav>     
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/AboutUs" element={<AboutUs/>}/>

    <Route path="/Contact" element={<ContactUs/>}/>

    <Route path="/Users" element={<Users/>}/>
    
    <Route path="/Rooms" element={<Rooms/>}>  
     <Route path="room1" element={<Room1/>}/>
    </Route>

    <Route path="*" element= {<NotFound/> }/>
  </Routes>
  </Suspense>
  </ErrorBoundary>
      
    </div>
  )
}

export default App;
