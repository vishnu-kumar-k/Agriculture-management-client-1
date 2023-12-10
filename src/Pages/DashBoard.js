import React, { useEffect, useState } from "react";
import profileImage from "../Images/profile.png"; // Replace with your actual image path
import axios from "../Axios/Axios";
import { ToastContainer, toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { Auth } from "../Atom/Atom";
import { Button } from "react-bootstrap";

const DashBoard = () => {
  const [userData, setUserData] = useState({});
  const [c, setC] = useState(1);
  const [user, setUser] = useRecoilState(Auth);
  const [updatedFields, setUpdatedFields] = useState({
    phoneNumber: "",
    location: "",
    plantType: "",
    numberOfLands: "",
    acreage: "",
  });

  useEffect(() => {
    axios
      .post("/getprofile", { id: user.id })
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error);
      });
  }, [c]);

  const handleFieldChange = (field, value) => {
    setUpdatedFields((prevFields) => ({
      ...prevFields,
      [field]: value,
    }));
  };

  const handleUpdateProfile = () => {
    axios
      .post("/updateprofile", { email: userData.email,id:user.id, ...updatedFields })
      .then((response) => {
        console.log("Profile updated successfully:", response.data);
        setC((prev) => prev + 1);
        toast.success("Updated Successfully");
      })
      .catch((error) => {
        toast.error("Something went wrong");
        console.error("Error updating profile:", error);
      });
  };

  return (
    <div style={styles.container}>
      <ToastContainer />
      <div style={styles.dashboard}>
        <img src={profileImage} alt="Profile" style={styles.profileImage} />
        <h2 style={styles.title}>User Dashboard</h2>
        <div style={styles.details}>
          <p>
            <strong>Name:</strong> {userData.name}
          </p>
          <p>
            <strong>Email:</strong> {userData.email}
          </p>
          <p>
            <strong>Phone Number:</strong> {userData.phoneNumber}
          </p>
          <p>
            <strong>Location:</strong> {userData.location}
          </p>
          <p>
            <strong>Plant Type:</strong> {userData.plantType}
          </p>
          <p>
            <strong>No. of Lands:</strong> {userData.numberOfLands}
          </p>
          <p>
            <strong>Acreage:</strong> {userData.acreage} acres
          </p>
        </div>
        <div style={styles.updateFields}>
          <h3>Update Profile Fields:</h3>
          <div style={styles.updateFieldsLabel}>
            <label>
              Phone Number:
              <input
                type="text"
                value={updatedFields.phoneNumber}
                onChange={(e) =>
                  handleFieldChange("phoneNumber", e.target.value)
                }
              />
            </label>
          </div>
          <div style={styles.updateFieldsLabel}>
            <label>
              Location:
              <input
                type="text"
                value={updatedFields.location}
                onChange={(e) =>
                  handleFieldChange("location", e.target.value)
                }
              />
            </label>
          </div>
          <div style={styles.updateFieldsLabel}>
            <label>
              Plant Type:
              <input
                type="text"
                value={updatedFields.plantType}
                onChange={(e) =>
                  handleFieldChange("plantType", e.target.value)
                }
              />
            </label>
          </div>
          <div style={styles.updateFieldsLabel}>
            <label>
              No. of Lands:
              <input
                type="text"
                value={updatedFields.numberOfLands}
                onChange={(e) =>
                  handleFieldChange("numberOfLands", e.target.value)
                }
              />
            </label>
          </div>
          <div style={styles.updateFieldsLabel}>
            <label>
              Acreage:
              <input
                type="text"
                value={updatedFields.acreage}
                onChange={(e) =>
                  handleFieldChange("acreage", e.target.value)
                }
              />
            </label>
          </div>
          <br />
          <Button variant="outline-primary" onClick={handleUpdateProfile}>Update Profile</Button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  dashboard: {
    textAlign: "center",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  },
  profileImage: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "20px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  details: {
    fontSize: "16px",
    marginBottom: "20px",
  },
  updateFields: {
    marginTop: "20px",
    textAlign: "center",
    maxWidth: "400px",
    margin: "0 auto",
  },
  updateFieldsLabel: {
    marginBottom: "10px",
  },
};

export default DashBoard;
