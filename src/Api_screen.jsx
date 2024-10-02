import React, { useState } from "react";
import "./App.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

const addDetailsToFirestore = () => {};
const API = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  /**
   * Handle form submission by adding a document to the Firestore "users" collection
   * with the provided form data.
   *
   * If the form data is valid, this function will add a document to the Firestore
   * "users" collection with the provided form data and log a success message to the
   * console.
   *
   * If the form data is invalid (i.e. any of the fields are empty), this function will
   * log an error message to the console and alert the user to fill in all fields
   * correctly.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData.name);
    if (
      formData.name.trim() != "" &&
      formData.company.trim() != "" &&
      formData.email.trim() != ""
    ) {
      try {
        await addDoc(collection(db, "users"), {
          name: formData.name,
          company: formData.company,
          email: formData.email,
        });
        alert("Successfully added to wait list!!");
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    } else {
      alert("Please fill all field correctly");
    }
  };
  return (
    <div className="api-screen">
      <h1
        className="heading"
        style={{ margin: "auto", marginTop: "20px", marginBottom: "20px" }}
      >
        Ooops.... I guess you would have to wait for some time. To access this
        awesome api.😉
      </h1>

      <div className="waitlistt-box">
        <form action="" onSubmit={handleSubmit} className="waitlistt-box">
          <label htmlFor="name-input">Enter your name</label>
          <input
            type="text"
            name="name"
            id="name-input"
            className="input"
            value={formData.name}
            onChange={handleInputChange}
          />
          {/* <div style={{ width: "10px" }}></div> */}
          <label htmlFor="company-input">Enter your company</label>
          <input
            type="text"
            name="company"
            id="company-input"
            className="input"
            value={formData.company}
            onChange={handleInputChange}
          />
          <label htmlFor="email-input">Enter your email address</label>
          <input
            type="email"
            name="email"
            id="email-input"
            className="input"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input type="submit" value="Submit" className="button" />
        </form>
      </div>
    </div>
  );
};

export default API;
