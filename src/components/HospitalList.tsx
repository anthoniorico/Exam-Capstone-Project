import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../app/globals.css';

interface Hospital {
  id: number;
  name: string;
  address: string;
  phone: string;
  email: string;
  services: string;
}

interface HospitalListProps {
  hospitals: Hospital[];
  onHospitalClick: (id: number) => void;
}

const HospitalList: React.FC<HospitalListProps> = ({ hospitals, onHospitalClick }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const response = await axios.get('/api/hospitals');
        // Here we assume hospitals prop is passed with existing data
        setLoading(false);
      } catch (err) {
        setError('Error fetching hospitals');
        setLoading(false);
      }
    };

    fetchHospitals();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div>
      <h1>Hospital List</h1>
      <ul>
        {hospitals.length > 0 ? (
          hospitals.map((hospital) => (
            <li key={hospital.id} onClick={() => onHospitalClick(hospital.id)}>
              <h2>{hospital.name}</h2>
              <p>{hospital.address}</p>
              <p>{hospital.phone}</p>
              <p>{hospital.email}</p>
              <p>{hospital.services}</p>
            </li>
          ))
        ) : (
          <p>No hospitals available</p>
        )}
      </ul>
    </div>
  );
};

export default HospitalList;