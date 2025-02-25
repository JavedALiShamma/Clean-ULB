import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles.module.css"
import cleanCity from "../../assets/icons/clean-city.jpg"

const LoginPage = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(email,password);
  }
  return (
    <div style={{objectFit:"contain",backgroundRepeat:"no-repeat",backgroundAttachment:"fixed"}} id={styles.backGroundArea} className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ maxWidth: "400px", width: "100%",height:"60%" }}>
        <h3 className="text-center mb-4">Login</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Email</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" id="email" placeholder="Enter your email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control" id="password" placeholder="Enter your password" required />
          </div>
          <button onClick={handleSubmit} type="submit" className="btn btn-primary w-100">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;