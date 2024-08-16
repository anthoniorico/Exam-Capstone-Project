import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import HospitalList from '../../components/HospitalList';
import SearchBar from '../../components/SearchBar';
import Link from 'next/link'

interface Hospital {
  id: number;
  name: string;
  address: string;
  phone: string;
  email: string;
  services: string;
}

const Hospitals: React.FC = () => {
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [filteredHospitals, setFilteredHospitals] = useState<Hospital[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const response = await axios.get('/api/hospitals');
        setHospitals(response.data);
        setFilteredHospitals(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Error fetching hospitals:', error);
      }
    };

    fetchHospitals();
  }, []);

  useEffect(() => {
    const filterHospitals = () => {
      if (!searchQuery) {
        setFilteredHospitals(hospitals);
      } else {
        const query = searchQuery.toLowerCase();
        setFilteredHospitals(
          hospitals.filter((hospital) =>
            hospital.name.toLowerCase().includes(query)
          )
        );
      }
    };

    filterHospitals();
  }, [searchQuery, hospitals]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleHospitalClick = (id: number) => {
    router.push(`/hospitals/${id}`);
  };

  const handleSelectCity = (city: string) => {
    // Implement the logic to filter hospitals by city
    console.log('Selected city:', city);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Find Hospitals</h1>
      <SearchBar 
        onSearch={handleSearch}
        onSelectCity={handleSelectCity}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <HospitalList 
        hospitals={filteredHospitals} 
        onHospitalClick={handleHospitalClick} 
      />
      <Link href="/hospitals/manage"><b>Add Hospitals</b></Link>
    </div>
  );
};

export default Hospitals;