import React from 'react';

export default function SuccessModal({ credentials, items, onClose }) {
  const allPacked = items.every(i => i.packed);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div style={{ fontSize: '3rem' }}>{allPacked ? '🎉' : '⚠️'}</div>
        <h2 style={{ fontSize: '1.4rem', color: '#4a4039' }}>
          {allPacked ? 'Login Berhasil & Tas Lengkap!' : 'Login Berhasil (Tas Belum Penuh)'}
        </h2>
        <p style={{ fontSize: '0.9rem', color: '#7a6a58' }}>
          {allPacked 
            ? `Halo ${credentials.username}, login berhasil! Semua perlengkapan kuliah di dalam tasmu sudah lengkap. Siap berangkat!`
            : `Halo ${credentials.username}, kamu berhasil login, tapi masih ada barang di tas yang belum kamu centang. Periksa kembali ya!`}
        </p>
        <button onClick={onClose} className="submit-btn" style={{ marginTop: '10px' }}>
          Tutup & Kembali
        </button>
      </div>
    </div>
  );
}