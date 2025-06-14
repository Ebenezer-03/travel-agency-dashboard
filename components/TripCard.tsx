import React from 'react'
import { Link } from "react-router";

interface TripCardProps {
  id: string;
  name: string;
  imageUrl: string;
  location: string;
  tags: string[];
  price: string;
}

const TripCard: React.FC<TripCardProps> = ({
  id,
  name,
  imageUrl,
  location,
  tags,
  price,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <Link to={`/trips/${id}`}>
        <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-600 text-sm">{location}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-gray-900 font-bold mt-3">{price}</p>
      </div>
    </div>
  )
}

export default TripCard
