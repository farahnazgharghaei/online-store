import React from "react";
import { useState, useEffect } from "react";
import User from "./User";
// import { users } from "../../data";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/users");
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
            <th>Email</th>
            <th>UserName</th>
            <th>Password</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
            {users.map((item) => (
              <User
                //  key={item.id}
                //  id={item.id}
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
