import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberme: false,
  });
  const navigator = useNavigate();
  const inputHandler = (e) => {
    if (e.target.type === "checkbox") {
      if (e.target.checked) {
        setFormData({ ...formData, [e.target.name]: true });
      } else {
        setFormData({ ...formData, [e.target.name]: false });
      }
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const formHandle = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      Swal.fire({
        title: "Good job!",
        text: "You Are Logged In",
        icon: "success",
      });
      // setTimeout(() => {
         navigator("/");
      // }, 2000);

    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <form
        id="login-form"
        onSubmit={formHandle}
        className="w-50 mx-auto my-5 shadow p-5"
      >
        <h3 className="text-center text-info">Login</h3>
        <div className="form-group">
          <label htmlFor="username" className="text-info">
            Username:
          </label>
          <br />
          <input
            type="text"
            name="username"
            id="username"
            className="form-control"
            onChange={inputHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="text-info">
            Password:
          </label>
          <br />
          <input
            type="text"
            name="password"
            id="password"
            className="form-control"
            onChange={inputHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="remember-me" className="text-info">
            <span>Remember me</span>
            <span>
              <input
                id="remember-me"
                name="rememberme"
                type="checkbox"
                onClick={inputHandler}
              />
            </span>
          </label>
          <br />
          <input
            type="submit"
            name="submit"
            className="btn btn-info btn-md"
            value="submit"
          />
        </div>
        <div id="register-link" className="text-right">
          <a href="#" className="text-info">
            Register here
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
