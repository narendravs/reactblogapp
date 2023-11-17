import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

function Login() {
  const [inputs, setInputs] = useState({ username: "", password: "" });
  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      //const res = await axios.post("/auth/login", inputs);
      // console.log(res)
      navigate("/");
    } catch (error) {
      setErr(error.response.data);
    }
  };

  return (
    <div className="auth">
      <h1 className="h1">Login</h1>
      <form className="form">
        <input
          className="input"
          required
          type="text"
          name="username"
          onChange={handleChange}
          placeholder="usename"
        ></input>
        <input
          className="input"
          required
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="password"
        ></input>
        <button className="button" onClick={handleSubmit}>
          Login
        </button>
        {err && <p className="p">{err}</p>}
        <span className="span">
          Dont you have an account ? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
}

export default Login;
