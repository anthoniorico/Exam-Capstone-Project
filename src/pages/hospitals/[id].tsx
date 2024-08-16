import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
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

const HospitalDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [hospital, setHospital] = useState<Hospital | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null); // New error state

  useEffect(() => {
    if (id) {
      const fetchHospital = async () => {
        try {
          const response = await axios.get(`/api/hospitals/${id}`);
          setHospital(response.data);
        } catch (error) {
          setError('Failed to fetch hospital details. Please try again later.');
        } finally {
          setLoading(false);
        }
      };

      fetchHospital();
    }
  }, [id]);

  useEffect(() => {
    if (hospital) {
      document.title = `${hospital.name} - Hospital Details`;
    }
  }, [hospital]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!hospital) {
    return <div>Hospital not found</div>;
  }

  return (
    <div>
      <h1>{hospital.name}</h1>
      <p><strong>Address:</strong> {hospital.address}</p>
      <p><strong>Phone:</strong> {hospital.phone}</p>
      <p><strong>Email:</strong> {hospital.email}</p>
      <p><strong>Services:</strong> {hospital.services}</p>
    </div>
  );
};

export default HospitalDetail;