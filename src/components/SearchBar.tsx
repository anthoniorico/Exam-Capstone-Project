import React, { ChangeEvent } from 'react';
import '../app/globals.css';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onSelectCity: (city: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onSelectCity, searchQuery, setSearchQuery }) => {
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleCityChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onSelectCity(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search hospitals"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>
      <select onChange={handleCityChange}>
        <option value="Aato">Aato</option>
        <option value="Abadam">Abadam</option>
        <option value="Abaji">Abaji</option>
        <option value="Abajukolo">Abajukolo</option>
        <option value="Abeere">Abeere</option>
        <option value="Abobo">Abobo</option>
        <option value="Abo">Abo</option>
        <option value="Abonnema">Abonnema</option>
        <option value="Agaie">Agaie</option>
        <option value="Ago-Iwoye">Ago-Iwoye</option>
        <option value="Awka">Awka</option> 
        <option value="Abuja">Abuja</option>       
        <option value="Bauchi">Bauchi</option>
        <option value="Batagarawa">Batagarawa</option>
        <option value="Benin City">Benin City</option>
        <option value="Bida">Bida</option>
        <option value="Birnin Kebbi">Birnin Kebbi</option>
        <option value="Bosso">Bosso</option>
        <option value="Buguma">Buguma</option> 
        <option value="Calabar">Calabar</option> 
        <option value="Dikenafai">Dikenafai</option> 
        <option value="Enugu">Enugu</option> 
        <option value="Gbongan">Gbongan</option>  
        <option value="Ibadan">Ibadan</option>
        <option value="Ikorodu">Ikorodu</option> 
        <option value="Jemaa">Jemaa</option> 
        <option value="Jos">Jos</option> 
        <option value="Kano">Kano</option> 
        <option value="Ikot Abasi">Ikot Abasi</option> 
        <option value="Ibi">Ibi</option> 
        <option value="Ife">Ife</option>
        <option value="Ilesa">Ilesa</option>
        <option value="Ilorun">Ilorin</option> 
        <option value="Itu">Itu</option>
        <option value="Kutigi">Kutigi</option>
        <option value="Lagos">Lagos</option>
        <option value="Maiduguri">Maiduguri</option>
        <option value="Minna">Minna</option> 
        <option value="Nasarawa">Nasarawa</option> 
        <option value="Neni">Neni</option>
        <option value="Nnewi">Nnewi</option>
        <option value="Mokwa">Mokwa</option>  
        <option value="Hadejia">Hadejia</option> 
        <option value="Ogbomosho">Ogbomosho</option> 
        <option value="Onitsha City">Onitsha City</option>   
        <option value="Onitsha South">Onitsha South</option>
        <option value="Owerri">Owerri</option>  
        <option value="Kumariya">Kumariya</option>   
        <option value="Port Harcourt">Port Harcourt</option> 
        <option value="Sabon Gari">Sabon Gari</option>
        <option value="Sokoto">Sokoto</option>
        <option value="Suleja">Suleja</option>              
        <option value="Warri">Warri</option>
        <option value="Wukari">Wukari</option>
        <option value="Yola">Yola</option>
        <option value="Zaria">Zaria</option> 
      </select>
    </div>
  );
};

export default SearchBar;