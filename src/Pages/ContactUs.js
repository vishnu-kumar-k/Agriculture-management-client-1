// src/ContactUs.js

import React, { useState } from "react";
import "../StyleSheet/Home.css";
import axios from "../Axios/Axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const ContactUs = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phonenumber: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle the form submission, e.g., send data to a server
    const t = /^[6789]\d{9}$/.test(formData.phonenumber);
        if(!t)
    {
      toast.warning("Enter the valid phone number")
      return ;
    }
    console.log("Form submitted:", formData);
    axios
      .post("/contactus", formData)
      .then((res) => {
        toast.success("Our staff contact you soon");
        setTimeout(() => {
          navigate("/");
        }, 4000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="contact-us">
      <ToastContainer />
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          WhatsappNumber
          <input
            type="number"
            name="phonenumber"
            value={formData.phonenumber}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            style={styles.textarea}
          />
        </label>
        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

const styles = {
  form: {
    maxWidth: "400px",
    margin: "0 auto",
    
  },
  label: {
    display: "block",
    margin: "10px 0",
  },
  input: {
    width: "100%",
    padding: "8px",
    margin: "5px 0",
    boxSizing: "border-box",
  },
  textarea: {
    width: "100%",
    padding: "8px",
    margin: "5px 0",
    boxSizing: "border-box",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default ContactUs;
