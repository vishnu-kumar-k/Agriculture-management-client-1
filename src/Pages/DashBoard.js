import React, { useEffect, useState } from "react";
import profileImage from "../Images/profile.png"; // Replace with your actual image path
import axios from "../Axios/Axios";
import { ToastContainer, toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { Auth } from "../Atom/Atom";
import { Button, Col, Row } from "react-bootstrap";

const DashBoard = () => {
  const [userData, setUserData] = useState({});
  const [c, setC] = useState(1);
  const [user, setUser] = useRecoilState(Auth);
  console.log(user);
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
      .post("/updateprofile", {
        email: userData.email,
        id: user.id,
        ...updatedFields,
      })
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
    <Row style={styles.container}>
      <Col md={3}></Col>
      <Col md={6}>
        <div style={styles.dashboard}>
          <ToastContainer />
          <div>
            <div style={{ textAlign: "center" }}>
              <img
                src={profileImage}
                
                alt="Profile"
                width={100}
              />
            </div>
            <h2 style={styles.title}>User Dashboard</h2>
            <Row>
              <Col md={2}></Col>
              <Col md={4}>
                <p>Name:</p>
                <p>Email:</p>
                <p>phoneNumber</p>
                <p>Location:</p>
                <p>Plant Type:</p>
                <p>No. of Lands:</p>
                <p>Acreage:</p>
              </Col>
              <Col md={4}>
                <p>{userData.name}</p>
                <p>{userData.email}</p>
                <p>{userData.phoneNumber}</p>
                <p>{userData.location}</p>
                <p>{userData.plantType}</p>
                <p>{userData.numberOfLands}</p>
                <p>{userData.acreage} acres</p>
              </Col>

              <Col md={2}></Col>
            </Row>
            <Row>
              <Col md={2}></Col>

              <Col md={8}>
                <div>
                  <h3 style={styles.title}>Update Profile Fields:</h3>

                  <div className="mb-3">
                    <label className="form-label">
                      Phone Number:
                      <input
                        type="text"
                        className="form-control"
                        value={updatedFields.phoneNumber}
                        onChange={(e) =>
                          handleFieldChange("phoneNumber", e.target.value)
                        }
                      />
                    </label>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">
                      Location:
                      <input
                        type="text"
                        className="form-control"
                        value={updatedFields.location}
                        onChange={(e) =>
                          handleFieldChange("location", e.target.value)
                        }
                      />
                    </label>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">
                      Plant Type:
                      <input
                        type="text"
                        className="form-control"
                        value={updatedFields.plantType}
                        onChange={(e) =>
                          handleFieldChange("plantType", e.target.value)
                        }
                      />
                    </label>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">
                      No. of Lands:
                      <input
                        type="text"
                        className="form-control"
                        value={updatedFields.numberOfLands}
                        onChange={(e) =>
                          handleFieldChange("numberOfLands", e.target.value)
                        }
                      />
                    </label>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">
                      Acreage:
                      <input
                        type="text"
                        className="form-control"
                        value={updatedFields.acreage}
                        onChange={(e) =>
                          handleFieldChange("acreage", e.target.value)
                        }
                      />
                    </label>
                  </div>

                  <Button variant="primary" onClick={handleUpdateProfile}>
                    Update Profile
                  </Button>
                </div>
              </Col>

              <Col md={2}></Col>
            </Row>
          </div>
        </div>
      </Col>
      <Col md={3}></Col>
    </Row>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
   
    backgroundColor:"#233d4d"
  },
  dashboard: {
    //
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    marginTop: "2em",
    marginBottom:"2em"
  },
  profileImage: {
    width: "150px",
    alignItems: "center",
    justifyContent: "center",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "20px",
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "20px",
    color: "#5465ff",
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
