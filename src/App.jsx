import React, { useState, useEffect, useContext } from 'react';
import Header from './Header';
import PropertyCard from './PropertyCard';
import SearchContext from './context/search/SearchContext';

function App() {
  // use this state to keep track of the user's saved/bookmarked properties
  const [savedProperties, setSavedProperties] = useState([]);
  const [properties, setProperties] = useState();
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  useEffect(() => {
    const fetchPropertyData = async () => {
      const response = await fetch('/property-data.json');
      const json = await response.json();

      setProperties(json.result.properties.elements);
    };

    fetchPropertyData();
  }, []);

  return (
    <div className="container mx-auto my-5">
      <Header onSearch={setSearchTerm} />

      <div className="grid grid-cols-1 gap-4 mt-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {!!properties &&
          properties
            .filter((property) => {
              return searchTerm === undefined || searchTerm === ''
                ? property
                : property.short_description
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase());
            })
            .map((property) => (
              <PropertyCard key={property.property_id} property={property} />
            ))}
      </div>
    </div>
  );
}

export default App;
