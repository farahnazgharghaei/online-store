import React from 'react'

const User = ({
  id, 
  email,
  username,
  password,
  name,
  phone,
}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name.firstname}</td>
      <td>{name["lastname"]}</td>
      <td>{username}</td>
      <td>{password}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>
        <button type="button" className="btn btn-dark m-2 float-center btn-md">
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
