import React from "react";
import { users } from "../../data";

const User = ({
  id,
  email,
  username,
  password,
  firstname,
  lastname,
  phone,
}) => {
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>User Id</th>
            <th>UserName</th>
            <th>Password</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>{user.name.firstname}</td>
              <td>{user.name.lastname}</td>
              <td>{user.phone}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-dark m-2 float-center btn-md"
                >
                  Add
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn   m-2 float-center btn-info btn-md"
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger m-2 float-center btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
