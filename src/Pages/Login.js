import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "../Axios/Axios";
import { useRecoilState, useRecoilValue } from "recoil";
import { Auth, jsonwebtoken, Load } from "../Atom/Atom";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "./Loading";
export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [name, setName] = useRecoilState(Auth);
  const [password, setPassword] = useState();
  const [jwt, setJwt] = useRecoilState(jsonwebtoken);
  const [loading, setLoading] = useRecoilState(Load);
  const [showpassword, setShowpassword] = useState(false);

  const HandleSumbit = async (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(
        "login/",
        {
          email: email,
          password: password,
        },
        { withCredentials: true }
      )
      .then(async (result) => {
        setLoading(false);
        if (result.data.status) {
          localStorage.setItem("jwt", result.data.token);
          //console.log(result.data);
          setJwt(result.data.token);
          await setName({
            name: result.data.name,
            id: result.data.id,
            status: true,
          });

          toast.success(`Signed Sucessfully`, {
            position: toast.POSITION.TOP_RIGHT,
            closeOnClick: false,
            pauseOnHover: true,
          });
          setTimeout(() => {
            navigate("/");
          }, 5000);
        } else {
          toast.warning(result.data.message, {
            position: toast.POSITION.TOP_RIGHT,
            closeOnClick: false,
            pauseOnHover: true,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container-login">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Row>
            <Col xs={0} md={4}></Col>
            <Col xs={12} md={4}>
              <div className="auth">
                <h1>Login</h1>
                <form onSubmit={HandleSumbit}>
                  <input
                    className="form-control"
                    required
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <input
                    required
                    type={showpassword ? "text" : "password"}
                    placeholder="password"
                    value={password}
                    className="form-control"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckIndeterminate"
                      checked={showpassword}
                      onChange={() => setShowpassword(!showpassword)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckIndeterminate"
                    >
                      Show Password
                    </label>
                  </div>
                  <button
                    type="submit"
                    class="btn btn-primary"
                    style={{ width: "fit-content" }}
                  >
                    submit
                  </button>
                  
                  <span>
                    Don't you have an account?{" "}
                    <Link to="/Register" style={{ color: "red" }}>
                      Register
                    </Link>
                  </span>
                </form>
              </div>
            </Col>
            <Col xs={0} md={4}></Col>
          </Row>
        </>
      )}
      <ToastContainer />
    </div>
  );
};
