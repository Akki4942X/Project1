import React, { useState } from 'react';
import countriesData from '../countriesData';
import './SearchBar.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setQuery(searchQuery);

    if (searchQuery) {
      const filteredResults = countriesData.filter(country =>
        country.country.toLowerCase().includes(searchQuery) ||
        country.capital.toLowerCase().includes(searchQuery)
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <input 
          type="text" 
          value={query} 
          onChange={handleChange} 
          placeholder="Search for a country or capital" 
        />
      </div>
      <ul className="results-list">
        {results.length > 0 ? (
          results.map((result, index) => (
            <li key={index} className="result-item">
              <div className="result-country">{result.country}</div>
              <div className="result-capital">{result.capital}</div>
            </li>
          ))
        ) : (
          <li className="no-results">No results found</li>
        )}
      </ul>
    </div>
  );
};

export default SearchBar;
