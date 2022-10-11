import React, { useState, useEffect, useContext, useCallback } from 'react';
import Header from './components/Header';
import Bookmarklist from './components/BookmarkList';
import SearchContext from './context/search/SearchContext';
import PropertyList from './components/PropertyList';

const App = () => {
  // use this state to keep track of the user's saved/bookmarked properties
  const [bookmarkedProperties, setBookmarkedProperties] = useState([]);
  const [properties, setProperties] = useState();
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  const onDeleteBookmark = (item) => {
    setBookmarkedProperties((prevProperties) =>
      prevProperties.filter((t) => t.property_id !== item.property_id)
    );
  };

  const onClickBookmark = useCallback(
    (item) => {
      const propertyExists = bookmarkedProperties.some(
        (property) => property.property_id === item.property_id
      );
      if (!propertyExists) {
        setBookmarkedProperties((prevProperties) => [item, ...prevProperties]);
      } else {
        onDeleteBookmark(item);
      }
    },
    [bookmarkedProperties]
  );

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
      <Bookmarklist
        bookmarks={bookmarkedProperties}
        onDelete={onDeleteBookmark}
      />
      <PropertyList
        onClickBookmark={onClickBookmark}
        searchTerm={searchTerm}
        properties={properties}
        bookmarkedProperties={bookmarkedProperties}
      />
    </div>
  );
};

export default App;
