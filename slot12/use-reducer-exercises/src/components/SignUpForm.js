// EX4_SignUpForm.jsx
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SignUpForm() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, confirm } = form;

    if (!username || !email || !password || !confirm)
      return alert("⚠️ Hãy điền đầy đủ thông tin!");
    if (!email.includes("@")) return alert("⚠️ Email không hợp lệ!");
    if (password !== confirm) return alert("⚠️ Mật khẩu không trùng khớp!");

    setShowModal(true);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card shadow-lg p-4"
        style={{ width: "380px", borderRadius: "15px" }}
      >
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
              placeholder="Enter password"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Confirm Password</label>
            <input
              name="confirm"
              type="password"
              className="form-control rounded-3"
              placeholder="Re-enter password"
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-success w-100 rounded-3 py-2"
          >
            Register
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
                  <h5 className="modal-title text-success">🎉 Đăng ký thành công!</h5>
                  <button
                    className="btn-close"
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>
                <div className="modal-body text-center">
                  <h6>
                    Chào mừng, <strong>{form.username}</strong>!
                  </h6>
                  <p className="text-muted">Tài khoản của bạn đã được tạo thành công.</p>
                </div>
                <div className="modal-footer border-0">
                  <button
                    className="btn btn-success w-100 rounded-3"
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
