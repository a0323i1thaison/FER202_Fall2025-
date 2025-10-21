// EX3_LoginForm.jsx
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function LoginForm() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.username || !form.password) {
      setMessage("⚠️ Vui lòng nhập đầy đủ thông tin!");
    } else {
      setMessage("✅ Đăng nhập thành công!");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ width: "350px", borderRadius: "15px" }}>
        <h3 className="text-center mb-4 text-primary">🔑 Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Username</label>
            <input
              type="text"
              name="username"
              className="form-control rounded-3"
              onChange={handleChange}
              placeholder="Enter username"
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              name="password"
              className="form-control rounded-3"
              onChange={handleChange}
              placeholder="Enter password"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 rounded-3 py-2">
            Login
          </button>
        </form>
        {message && <div className="alert alert-info mt-3 text-center">{message}</div>}
      </div>
    </div>
  );
}
