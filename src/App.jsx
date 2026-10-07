import React, { useState, useRef, useEffect } from 'react';
import BagCanvas from './components/BagCanvas';
import Checklist from './components/Checklist';
import ProfileForm from './components/ProfileForm';
import SuccessModal from './components/SuccessModal';
import './App.css';

export default function App() {
  const [isBagOpen, setIsBagOpen] = useState(false);
  const [sliderY, setSliderY] = useState(10);
  const trackRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [items, setItems] = useState([
    { id: 1, name: 'Laptop', icon: '💻', packed: false },
    { id: 2, name: 'Charger', icon: '🔌', packed: false },
    { id: 3, name: 'Buku Catatan', icon: '📓', packed: false },
    { id: 4, name: 'Tumbler Air', icon: '🚰', packed: false },
    { id: 5, name: 'ID Card / KTM', icon: '🪪', packed: false },
    { id: 6, name: 'Earphone', icon: '🎧', packed: false },
    { id: 7, name: 'Dompet', icon: '💵', packed: false },
    { id: 8, name: 'Payung', icon: '🌂', packed: false },
    { id: 9, name: 'Kotak Pensil', icon: '🖊️', packed: false },
  ]);

  const [credentials, setCredentials] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const toggleItem = (id) => {
    setItems(items.map(item => item.id === id ? { ...item, packed: !item.packed } : item));
  };

  const handleFormSubmit = (data) => {
    setCredentials(data);
    setShowModal(true);
  };

  const handleDragStart = (e) => {
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const startY = clientY - sliderY;

    const handleDragMove = (moveEvent) => {
      const currentClientY = moveEvent.touches ? moveEvent.touches[0].clientY : moveEvent.clientY;
      let newY = currentClientY - startY;

      if (newY < 10) newY = 10;
      if (newY > 180) newY = 180;

      setSliderY(newY);

      if (newY > 130) {
        setIsBagOpen(true);
        cleanup();
      }
    };

    const handleDragEnd = () => {
      cleanup();
      if (sliderY <= 130) {
        setSliderY(10);
      }
    };

    const cleanup = () => {
      window.removeEventListener('mousemove', handleDragMove);
      window.removeEventListener('mouseup', handleDragEnd);
      window.removeEventListener('touchmove', handleDragMove);
      window.removeEventListener('touchend', handleDragEnd);
    };

    window.addEventListener('mousemove', handleDragMove);
    window.addEventListener('mouseup', handleDragEnd);
    window.addEventListener('touchmove', handleDragMove);
    window.addEventListener('touchend', handleDragEnd);
  };

  return (
    <div className="app-container">
      <div className={`zipper-screen ${isBagOpen ? 'open' : ''}`}>
        <div style={{ fontSize: '3rem' }}>🎒</div>
        <h2 style={{ fontSize: '1.6rem', color: '#3d332a', fontWeight: '800' }}>What's Inside My Bag?</h2>
        
        <div className="zipper-track-container" ref={trackRef}>
          <div className="zipper-line"></div>
          <div className="zipper-teeth"></div>
          <div 
            className="zipper-slider" 
            style={{ transform: `translateY(${sliderY}px)` }}
            onMouseDown={handleDragStart}
            onTouchStart={handleDragStart}
          >
            <div className="zipper-pull-tab"></div>
          </div>
        </div>

        <div className="zipper-instruction">
          👇 Tarik kepala resleting ke bawah untuk membuka tas
        </div>
      </div>

      <div className="main-app-content">
        <header>
          <h1>🎒 Tas Udah Siap Belum?</h1>
          <p>Kamu mau pergi ke Kampus? Cek tas dulu dong!</p>
        </header>

        <div className="main-content">
          <BagCanvas items={items} toggleItem={toggleItem} />
          <Checklist items={items} />
          <ProfileForm onSubmit={handleFormSubmit} />
        </div>
      </div>

      {showModal && (
        <SuccessModal 
          credentials={credentials} 
          items={items} 
          onClose={() => setShowModal(false)} 
        />
      )}
    </div>
  );
}