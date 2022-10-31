import React from "react";
import Pagination from "./pagenation";
import { useState } from "react";
import User from "./user";





  const userPerPage = 5;

const Users = ({ users, isLoading }) => {
  const [start, setStart] = useState(0);
  const end = start + userPerPage;

  const changePage = (page) => {
    setStart((page - 1) * userPerPage);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  return (
    
     <div className="con-con">
        <h1 style={{fontWeight: "100", fontSize: "40px"}}>This is the Customer page</h1>
     
    
      <ul className="user__ul">
        {users.slice(start, end).map((user, index) => (
          <User name={user.name} email={user.email} key={index} />
        ))}
      </ul>
      <Pagination
        totalUsers={users.length}
        usersPerPage={userPerPage}
        onChange={changePage}
      />
       </div>
    
  );
}

  
  export default Users;