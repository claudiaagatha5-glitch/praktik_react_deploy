import React from 'react';

export default function BagCanvas({ items, toggleItem }) {
  return (
    <div className="card">
      <h2>🎒 Cek dan Isi Tas Kuliah</h2>
      <div className="bag-box">
        <div className="bag-graphic">🎒</div>
        <div style={{ position: 'absolute', bottom: '12px', fontSize: '0.85rem', color: '#4a5568', fontWeight: '600' }}>
          Klik barang di bawah untuk memasukkan / mengeluarkan dari tas
        </div>
      </div>
      <div className="bag-items-grid">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => toggleItem(item.id)}
            className={`bag-item-btn ${item.packed ? 'packed' : ''}`}
          >
            <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
            <span>{item.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}