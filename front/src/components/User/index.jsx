import React from "react";
import { useState, useEffect } from "react";
import User from "./User";
// import { users } from "../../data";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/users");
        const data = await res.json();
        setUsers(data);
         console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
    console.log(users);
  }, []);
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>User Id</th> 
            <th>FirstName</th>
            <th>LastName</th>
            <th>UserName</th>
            <th>Password</th>   
            <th>Email</th>             
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
            {users.map((item) => (
              <User
                key={item.id}
                id={item.id}
                // email={item.email}
                // username={item.username}
                // password={item.password}
                // firstname={item.name.firstname}
                // lastname={item.name.lastname}
                // phone={item.phone}
                {...item}
                // handelTotalQty={handelTotalQty}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
