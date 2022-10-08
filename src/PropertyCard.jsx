import React, { useState } from 'react';
import { FaBookmark } from 'react-icons/fa';

function PropertyCard({ property }) {
  const [isChecked, setIsChecked] = useState(false);

  const isCheckedHandler = () => {
    setIsChecked((current) => !current);
  };

  return (
    <div className="border-2 bg-gray-50">
      <div className="relative">
        {property?.photos[0] ? (
          <img
            src={`https://mr0.homeflow.co.uk/${property.photos[0]}`}
            alt={property.display_address}
          />
        ) : (
          <img src="/coming-soon.jpg" alt="Coming soon" />
        )}

        <button
          className="absolute top-0 right-2"
          title="Click to bookmark this property"
        >
          <FaBookmark
            className={isChecked ? 'text-red-700' : 'text-yellow-400'}
            size="40"
            onClick={isCheckedHandler}
          />
        </button>

        <p className="absolute bottom-0 right-0 px-2 py-1 border-t border-l bg-gray-50">
          {property.price}
        </p>
      </div>

      <div className="px-3 py-2">
        <p>{property.display_address}</p>
      </div>
    </div>
  );
}

export default PropertyCard;
