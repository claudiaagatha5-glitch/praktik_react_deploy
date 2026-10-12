import React, { useState } from 'react';
import './IntroZipper.css';

export default function IntroZipper({ onOpen }) {
  const [dragged, setDragged] = useState(false);

  const handleDrag = () => {
    setDragged(true);
    setTimeout(() => {
      if (onOpen) onOpen();
    }, 600);
  };

  return (
    <div className="bag-card-container">
      <div className="bag-card">
        {/* Icon Tas */}
        <div className="bag-icon">🎒</div>

        {/* Judul Aplikasi */}
        <h1 className="bag-title">What's Inside My Bag?</h1>

        {/* Komponen Resleting */}
        <div className="zipper-wrapper">
          <div className="zipper-track"></div>
          <div 
            className={`zipper-pull ${dragged ? 'pulled' : ''}`}
            onClick={handleDrag}
            title="Klik atau tarik untuk membuka"
          >
            <div className="pull-head"></div>
            <div className="pull-ring"></div>
          </div>
        </div>

        {/* Petunjuk Aksi */}
        <div className="zipper-hint">
          <span className="hint-icon">👇</span>
          <span>Tarik kepala resleting ke bawah untuk membuka tas</span>
        </div>
      </div>
    </div>
  );
}