import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import CustomerNavbar from "./CustomerNavbar";

function Register() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      gender: "",
      weight: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      age: Yup.number()
        .positive("Age must be positive")
        .integer("Age must be a whole number")
        .required("Age is required"),
      gender: Yup.string().oneOf(["Male", "Female", "Other"]).required("Gender is required"),
      weight: Yup.number()
        .positive("Weight must be positive")
        .required("Weight is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    }),
    onSubmit: (values) => {
      // Prepare the user data
      const userData = {
        name: values.name,
        age: values.age,
        gender: values.gender,
        weight: values.weight,
        email: values.email,
        password: values.password,
      };

      // Make the API call to save the data
      axios
        .post("http://localhost:8080/patient/registerPatient", userData) // Your backend URL
        .then((response) => {
          toast.success("Registration successful!");
          navigate("/login"); // Redirect to the login page after successful registration
        })
        .catch((error) => {
          toast.error("Error registering user. Please try again.");
        });
    },
  });

  return (
    <div style={{ backgroundColor: "white", color: "black", minHeight: "80vh" }}>
      <CustomerNavbar />
      <ToastContainer />
      <div className="d-flex justify-content-center align-items-center vh-40 mt-5">
        <div
          className="shadow-lg p-4"
          style={{
            width: "35rem",
            backgroundColor: "white",
            color: "black",
            display: "flex",
            flexDirection: "column",
            border: "3px solid #076cea",
          }}
        >
          <h3 className="text-center mb-2">Register</h3>
          <form onSubmit={formik.handleSubmit}>
            {/* Name Input */}
            <div className="mb-3">
              <label>Name:</label>
              <input
                type="text"
                {...formik.getFieldProps("name")}
                className="form-control"
                style={{ height: "4vh" }}
              />
              {formik.touched.name && formik.errors.name && (
                <div className="text-danger">{formik.errors.name}</div>
              )}
            </div>

            {/* Age Input */}
            <div className="mb-3">
              <label>Age:</label>
              <input
                type="number"
                {...formik.getFieldProps("age")}
                className="form-control"
                style={{ height: "4vh" }}
              />
              {formik.touched.age && formik.errors.age && (
                <div className="text-danger">{formik.errors.age}</div>
              )}
            </div>

            {/* Gender Input */}
            <div className="mb-3">
              <label>Gender:</label>
              <select
                {...formik.getFieldProps("gender")}
                className="form-control"
                style={{ height: "4vh" }}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {formik.touched.gender && formik.errors.gender && (
                <div className="text-danger">{formik.errors.gender}</div>
              )}
            </div>

            {/* Weight Input */}
            <div className="mb-3">
              <label>Weight (kg):</label>
              <input
                type="number"
                {...formik.getFieldProps("weight")}
                className="form-control"
                style={{ height: "4vh" }}
              />
              {formik.touched.weight && formik.errors.weight && (
                <div className="text-danger">{formik.errors.weight}</div>
              )}
            </div>

            {/* Email Input */}
            <div className="mb-3">
              <label>Email:</label>
              <input
                type="email"
                {...formik.getFieldProps("email")}
                className="form-control"
                style={{ height: "4vh" }}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-danger">{formik.errors.email}</div>
              )}
            </div>

            {/* Password Input */}
            <div className="mb-3">
              <label>Password:</label>
              <input
                type="password"
                {...formik.getFieldProps("password")}
                className="form-control"
                style={{ height: "4vh" }}
              />
              {formik.touched.password && formik.errors.password && (
                <div className="text-danger">{formik.errors.password}</div>
              )}
            </div>

            <div className="mb-2 w-100">
              <button
                type="submit"
                className="btn btn-light w-100"
                style={{ backgroundColor: "#076cea" }}
              >
                Register
              </button>
            </div>
          </form>

          {/* Link to Login Page */}
          <div className="mt-2 text-center">
            <p>Already have an account?</p>
            <Link to="/login" style={{ textDecoration: "none", color: "#076cea" }}>
              <strong>Login here</strong>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
