import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './Vehicles.scss';
import { VehicleModel } from '../../models/VehicleModel';

function Vehicle() {
  useEffect(() => {
    loadVehicles();
  }, []);

  const [vehicles, setVehicles] = useState([]);

  const loadVehicles = async () => {
    const response = await api.get(`vehicles/`);
    const { results } = response.data;
    setVehicles(results);
  };

  return (
    <ul className="vehicles-list">
      {vehicles.map((vehicle: VehicleModel) => (
        <li key={vehicle.name} className="vehicle-details">
          {vehicle.name}
        </li>
      ))}
    </ul>
  );
}

export default Vehicle;
