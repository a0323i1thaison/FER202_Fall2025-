import React, { useState } from 'react';


const initialState = {
  username: '',
  email: '',
  password: '',
  confirm: '',
};

function validateUsername(username) {
  // Regex: 3 ký tự trở lên, chỉ chữ, số, _, .
  return /^[A-Za-z0-9_.]{3,}$/.test(username.trim()) && username.trim() === username;
}
function validateEmail(email) {
  // Regex email cơ bản
  return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
}
function validatePassword(password) {
  // Regex: 8 ký tự trở lên, có chữ hoa, chữ thường, số, ký tự đặc biệt
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(password);
}
function validateConfirm(password, confirm) {
  return password === confirm && confirm !== '';
}

function RegisterForm() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // 💡 HÀM ĐÃ SỬA: Xử lý onChange và Real-time Validation
  const handleChange = e => {
    const { name, value } = e.target;
    
    // 1. Cập nhật giá trị form
    setForm(prevForm => {
      const newForm = { ...prevForm, [name]: value };
      
      // 2. Thực hiện validation cho trường hiện tại
      let errorMsg = '';
      let isConfirmed = true;

      switch (name) {
        case 'username':
          if (!validateUsername(value)) errorMsg = 'Username phải ≥ 3 ký tự, chỉ chữ, số, _ hoặc ., không khoảng trắng đầu/cuối';
          break;
        case 'email':
          if (!validateEmail(value)) errorMsg = 'Email không đúng định dạng';
          break;
        case 'password':
          if (!validatePassword(value)) errorMsg = 'Password ≥ 8 ký tự, có chữ hoa, chữ thường, chữ số, ký tự đặc biệt';
          break;
        case 'confirm':
          // Kiểm tra confirm với giá trị password hiện tại trong newForm
          if (!validateConfirm(newForm.password, value)) errorMsg = 'Confirm password không khớp';
          break;
        default:
          break;
      }

      // 3. Cập nhật lỗi (sử dụng callback để đảm bảo errors mới nhất)
      setErrors(prevErrors => {
        const newErrors = { ...prevErrors, [name]: errorMsg };
        
        // Xử lý đặc biệt: Nếu người dùng đang gõ Password, phải kiểm tra lại Confirm
        if (name === 'password' && newForm.confirm !== '') {
            if (!validateConfirm(value, newForm.confirm)) {
                newErrors.confirm = 'Confirm password không khớp';
            } else {
                newErrors.confirm = ''; // Xóa lỗi nếu đã khớp
            }
        }
        
        return newErrors;
      });

      return newForm;
    });
  };
  
  // Hàm này vẫn được giữ nguyên và chỉ chạy khi nhấn Submit
  const validateAll = () => {
    const newErrors = {};
    if (!validateUsername(form.username)) newErrors.username = 'Username phải ≥ 3 ký tự, chỉ chữ, số, _ hoặc ., không khoảng trắng đầu/cuối';
    if (!validateEmail(form.email)) newErrors.email = 'Email không đúng định dạng';
    if (!validatePassword(form.password)) newErrors.password = 'Password ≥ 8 ký tự, có chữ hoa, chữ thường, chữ số, ký tự đặc biệt';
    if (!validateConfirm(form.password, form.confirm)) newErrors.confirm = 'Confirm password không khớp';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = e => {
    e.preventDefault();
    // 💡 Chỉ submit nếu validateAll (chạy lần cuối) trả về true
    if (validateAll()) {
      setShowToast(true);
      setShowModal(true);
    }
  };

  const handleCancel = () => {
    setForm(initialState);
    setErrors({});
    setShowToast(false);
    setShowModal(false);
  };

  // Biến kiểm tra tổng thể để bật/tắt nút Submit
  const isValid = validateUsername(form.username) && validateEmail(form.email) && validatePassword(form.password) && validateConfirm(form.password, form.confirm);

  return (
    <div style={{ maxWidth: 400, margin: '40px auto', padding: 24, background: '#f7fafd', borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
      <h3 style={{ textAlign: 'center', color: '#1976d2', marginBottom: 24 }}>Đăng ký tài khoản</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 16 }}>
          <input
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="Username"
            style={{ width: '100%', padding: '10px 14px', borderRadius: 8, border: `1.5px solid ${errors.username ? 'red' : '#90caf9'}`, fontSize: 16, outline: 'none', boxSizing: 'border-box' }}
          />
          {errors.username && <div style={{ color: 'red', fontSize: 13 }}>{errors.username}</div>}
        </div>
        <div style={{ marginBottom: 16 }}>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            style={{ width: '100%', padding: '10px 14px', borderRadius: 8, border: `1.5px solid ${errors.email ? 'red' : '#90caf9'}`, fontSize: 16, outline: 'none', boxSizing: 'border-box' }}
          />
          {errors.email && <div style={{ color: 'red', fontSize: 13 }}>{errors.email}</div>}
        </div>
        <div style={{ marginBottom: 16 }}>
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            style={{ width: '100%', padding: '10px 14px', borderRadius: 8, border: `1.5px solid ${errors.password ? 'red' : '#90caf9'}`, fontSize: 16, outline: 'none', boxSizing: 'border-box' }}
          />
          {errors.password && <div style={{ color: 'red', fontSize: 13 }}>{errors.password}</div>}
        </div>
        <div style={{ marginBottom: 16 }}>
          <input
            name="confirm"
            type="password"
            value={form.confirm}
            onChange={handleChange}
            placeholder="Confirm Password"
            style={{ width: '100%', padding: '10px 14px', borderRadius: 8, border: `1.5px solid ${errors.confirm ? 'red' : '#90caf9'}`, fontSize: 16, outline: 'none', boxSizing: 'border-box' }}
          />
          {errors.confirm && <div style={{ color: 'red', fontSize: 13 }}>{errors.confirm}</div>}
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <button type="submit" disabled={!isValid} style={{ flex: 1, background: isValid ? '#1976d2' : '#90caf9', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 0', fontSize: 16, cursor: isValid ? 'pointer' : 'not-allowed' }}>Submit</button>
          <button type="button" onClick={handleCancel} style={{ flex: 1, background: '#e3f2fd', color: '#1976d2', border: 'none', borderRadius: 8, padding: '10px 0', fontSize: 16, cursor: 'pointer' }}>Cancel</button>
        </div>
      </form>
      {showToast && (
        <div style={{ marginTop: 18, background: '#1976d2', color: '#fff', padding: '10px 0', borderRadius: 8, textAlign: 'center', fontWeight: 600 }}>
          Submitted successfully!
        </div>
      )}
      {showModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 999 }}>
          <div style={{ background: '#fff', borderRadius: 12, padding: 32, minWidth: 320, boxShadow: '0 2px 12px rgba(0,0,0,0.18)' }}>
            <h4 style={{ color: '#1976d2', marginBottom: 18, textAlign: 'center' }}>Thông tin đăng ký</h4>
            <div style={{ background: '#e3f2fd', borderRadius: 8, padding: 18, boxShadow: '0 1px 4px rgba(33,150,243,0.07)' }}>
              <div style={{ fontWeight: 600, fontSize: 17, color: '#1976d2' }}>Username: {form.username}</div>
              <div style={{ color: '#333', fontSize: 15 }}>Email: {form.email}</div>
              <div style={{ color: '#333', fontSize: 15 }}>Password: {form.password}</div>
            </div>
            <button onClick={handleCancel} style={{ marginTop: 22, background: '#1976d2', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 0', fontSize: 16, width: '100%', cursor: 'pointer' }}>Đóng</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default RegisterForm;