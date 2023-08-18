import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../css/map.css';
import Head from './head';

const Map = () => {
  useEffect(() => {
    // Инициализация карты
    const map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Создание и добавление кастомного маркера с изображением
    const customIcon = L.icon({
      iconUrl: 'point.png', // Укажите путь к вашему изображению
      iconSize: [42, 42], // Размер изображения
      iconAnchor: [16, 32], // Анкор для позиционирования
    });

    const marker = L.marker([51.5, -0.09], { icon: customIcon }).addTo(map);
  }, []);

  return (
    <div>
      <Head />
      <div id="map" className="map-container"></div>
    </div>
  );
}

export default Map;
