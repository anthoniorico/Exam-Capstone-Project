import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onSelectCity: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onSelectCity }) => {
  const [query, setQuery] = useState<string>('');
  const [city, setCity] = useState<string>('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCity(e.target.value);
    onSelectCity(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search hospitals"
          value={query}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>
      <select value={city} onChange={handleCityChange}>
        <option value="">Select a city</option>
        <option value="Lagos">Lagos</option>
        <option value="Abuja">Abuja</option>
        <option value="Port Harcourt">Port Harcourt</option>
        <option value="Kano">Kano</option>
        <option value="Ibadan">Ibadan</option>
        <option value="Warri">Warri</option>
      </select>
    </div>
  );
};

export default SearchBar;