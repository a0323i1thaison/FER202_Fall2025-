// EX3_LoginForm.jsx
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function LoginForm() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.username && form.password) {
      setShowModal(true);
    } else {
      alert("⚠️ Vui lòng nhập đầy đủ thông tin!");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card shadow-lg p-4"
        style={{ width: "350px", borderRadius: "15px" }}
      >
        <h3 className="text-center mb-4 text-primary">🔑 Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Username</label>
            <input
              type="text"
              name="username"
              className="form-control rounded-3"
              placeholder="Enter username"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              name="password"
              className="form-control rounded-3"
              placeholder="Enter password"
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100 rounded-3 py-2"
          >
            Login
          </button>
        </form>

        {/* ✅ Modal */}
        {showModal && (
          <div
            className="modal fade show"
            style={{
              display: "block",
              backgroundColor: "rgba(0,0,0,0.4)",
            }}
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content rounded-4 shadow-lg">
                <div className="modal-header border-0">
                  <h5 className="modal-title text-success">🎉 Thành công!</h5>
                  <button
                    className="btn-close"
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>
                <div className="modal-body text-center">
                  <h6>
                    Xin chào, <strong>{form.username}</strong>!
                  </h6>
                  <p className="text-muted">Bạn đã đăng nhập thành công.</p>
                </div>
                <div className="modal-footer border-0">
                  <button
                    className="btn btn-primary w-100 rounded-3"
                    onClick={() => setShowModal(false)}
                  >
                    Đóng
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
