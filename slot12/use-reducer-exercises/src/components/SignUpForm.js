// EX4_SignUpForm.jsx
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SignUpForm() {
  const [form, setForm] = useState({ username: "", email: "", password: "", confirm: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, confirm } = form;

    if (!username || !email || !password || !confirm) {
      setMessage("⚠️ Hãy điền đầy đủ thông tin!");
    } else if (!email.includes("@")) {
      setMessage("⚠️ Email không hợp lệ!");
    } else if (password !== confirm) {
      setMessage("⚠️ Mật khẩu không trùng khớp!");
    } else {
      setMessage("🎉 Đăng ký thành công!");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ width: "380px", borderRadius: "15px" }}>
        <h3 className="text-center mb-4 text-success">📝 Sign Up</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Username</label>
            <input
              name="username"
              className="form-control rounded-3"
              placeholder="Enter username"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              name="email"
              type="email"
              className="form-control rounded-3"
              placeholder="example@gmail.com"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              name="password"
              type="password"
              className="form-control rounded-3"
              onChange={handleChange}
              placeholder="Enter password"
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Confirm Password</label>
            <input
              name="confirm"
              type="password"
              className="form-control rounded-3"
              onChange={handleChange}
              placeholder="Re-enter password"
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-3 py-2">
            Register
          </button>
        </form>
        {message && <div className="alert alert-info mt-3 text-center">{message}</div>}
      </div>
    </div>
  );
}
