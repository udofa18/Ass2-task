import React from "react";
import { Link } from "react-router-dom";


function NotFound() {
    return (
      <div>

        <h2>OPS!.. YOU STUMBLED ON THE WRONG BLOCK</h2>
        <h1>404 ERROR</h1>
        <h2><Link to="./">Click here to go back to Base</Link></h2>
      </div>
    );
  }
  
  export default NotFound;