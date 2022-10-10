import React from 'react';
import PropertyCard from './PropertyCard';
import EmptyList from './EmptyList';

const PropertyList = ({
  properties,
  searchTerm,
  onClickFavouriteHandler,
  bookmarkedProperties,
}) => {
  const filteredProperties =
    properties?.filter((property) =>
      property?.short_description
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    ) || [];

  const isBookmarked = (property) => bookmarkedProperties.includes(property);

  if (!filteredProperties.length) {
    return <EmptyList />;
  }

  return (
    <div className="grid grid-cols-1 gap-4 mt-5 md:grid-cols-2 lg:grid-cols-3">
      {filteredProperties.map((property) => (
        <PropertyCard
          key={property.property_id}
          property={property}
          isChecked={isBookmarked(property)}
          onClickFavourite={() => onClickFavouriteHandler(property)}
        />
      ))}
    </div>
  );
};

export default PropertyList;
