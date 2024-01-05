import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import {useNavigate} from "react-router-dom"
const Signup = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    terms: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    terms: "",
  });

  const navigator = useNavigate ()
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
    const errorList = {};

    if (!formData.name) {
      // setErrors({...errors, name:"Name is required"})
      // setErrors((prev)=>{ return { ...prev, name: "Name is required" };});
      errorList.name = "Name is required";
    }

    if (!formData.email) {
      errorList.email = "Email is required";
    }

    if (!formData.password) {
      errorList.password = "Password is required";
    }
    if (!formData.terms) {
      errorList.terms = "You must select a term";
    }

    if (Object.keys(errorList).length > 0) {
      setErrors(errorList);
    } else {
      setErrors({});

      try {
        const res = await fetch("https://fakestoreapi.com/users", {
          method: "POST",
          body: JSON.stringify(formData),
        });
        setFormData({
          name: "",
          email: "",
          password: "",
          terms: false,
        });
         toast.success("You registered successfully");
     
       setTimeout(() => {
           navigator("/login");
       }, 2000);
      } catch (error) {
          toast.error("Registration failed");
        console.error(error);
      }
    }
  };
  return (
    <div>
      <form onSubmit={formHandle} className="w-50 mx-auto my-5 shadow p-5">
        <h3 className="text-center text-info">Sign-up</h3>
        <div className="form-group mb-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Name"
            name="name"
            value={formData.name}
            onChange={inputHandler}
          />
          {errors.name && (
            <div className="alert alert-danger mt-2">{errors.name}</div>
          )}
        </div>

        <div className="form-group mb-3">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={inputHandler}
            autoComplete="false"
          />
          {errors.email && (
            <div className="alert alert-danger mt-2">{errors.email}</div>
          )}
        </div>

        <div className="form-group mb-3">
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            className="form-control"
            id="Password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={inputHandler}
          />
          {errors.password && (
            <div className="alert alert-danger mt-2">{errors.password}</div>
          )}
        </div>

        <div className="form-group mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="terms"
            name="terms"
            checked={formData.terms}
            onChange={inputHandler}
          />

          <label className="form-check-label" htmlFor="terms">
            I Accept All Terms
          </label>
          {errors.terms && (
            <div className="alert alert-danger mt-2">{errors.terms}</div>
          )}
        </div>

        <button type="rest" className="btn btn-primary me-3">
          Clear Form
        </button>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;
