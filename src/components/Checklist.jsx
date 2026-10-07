import React from 'react';

export default function Checklist({ items }) {
  const totalCount = items.length;
  const packedCount = items.filter(item => item.packed).length;
  const progressPercent = totalCount > 0 ? (packedCount / totalCount) * 100 : 0;

  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
        <h2 style={{ borderBottom: 'none', paddingBottom: 0, width: 'auto' }}>Barang Masuk Tas</h2>
        <span style={{ fontSize: '0.9rem', fontWeight: '700', color: '#8c6d53' }}>
          {packedCount} / {totalCount} Barang
        </span>
      </div>

      <div className="progress-bar-container">
        <div 
          className="progress-bar-fill" 
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>

      <ul className="checklist-list">
        {items.map(item => (
          <li key={item.id} className={`checklist-item ${item.packed ? 'done' : ''}`}>
            <span>{item.icon} {item.name}</span>
            <span style={{ fontSize: '0.8rem', fontWeight: '600' }}>
              {item.packed ? '✅ Masuk' : '⏳ Belum'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}