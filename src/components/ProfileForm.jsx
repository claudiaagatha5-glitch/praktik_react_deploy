import React, { useState } from 'react';

export default function ProfileForm({ onSubmit }) {
  const [credentials, setCredentials] = useState({ fullName: '', username: '', password: '' });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!credentials.fullName || !credentials.username || !credentials.password) {
      alert('Harap masukkan Nama Lengkap, NIM/Username, dan Password terlebih dahulu!');
      return;
    }
    onSubmit(credentials);
  };

  return (
    <div className="card" style={{ gridColumn: '1 / -1' }}>
      <h2>🔐 Login Mahasiswa & Cek Tas Kuliah</h2>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', alignItems: 'end', width: '100%' }}>
        <div className="form-group">
          <label>Nama Lengkap</label>
          <input 
            type="text" 
            name="fullName" 
            placeholder="Masukkan nama lengkap..." 
            value={credentials.fullName} 
            onChange={handleChange} 
          />
        </div>
        <div className="form-group">
          <label>NIM / Username</label>
          <input 
            type="text" 
            name="username" 
            placeholder="Masukkan NIM kamu..." 
            value={credentials.username} 
            onChange={handleChange} 
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input 
            type="password" 
            name="password" 
            placeholder="Masukkan password..." 
            value={credentials.password} 
            onChange={handleChange} 
          />
        </div>
        <button type="submit" className="submit-btn" style={{ gridColumn: '1 / -1' }}>Login & Verifikasi Tas 🚀</button>
      </form>
    </div>
  );
}