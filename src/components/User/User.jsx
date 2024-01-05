import React from 'react'

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
      <tr>
        <td>{id}</td>
        <td>{email}</td>
        <td>{username}</td>
        <td>{password}</td>
        <td>{firstname}</td>
        <td>{lastname}</td>
        <td>{phone}</td>
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
  );
};

export default User;
