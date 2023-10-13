import React, { useState } from 'react';
import './Search.css';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Replace this with your actual search logic, e.g., fetching data from an API.
    // For this example, we'll simulate search results with an array of strings.

    // Simulated search results
    const simulatedResults = [
      'Abinaya',
      'Abishek',
      'Aiswarya',
      'Aditya',
      'Aditya nath',
    ];

    // Filter results based on the search query
    const filteredResults = simulatedResults.filter((result) =>
      result.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSearchResults(filteredResults);
  };

  return (
    <div>
      <h1>Search Page</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {searchResults.length > 0 ? (
        <div>
          <h2>Search Results:</h2>
          <ul>
            {searchResults.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchPage;