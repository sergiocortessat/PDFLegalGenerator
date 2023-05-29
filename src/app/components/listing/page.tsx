import React from 'react';
import Image from 'next/image';
import listings from '../../../services/listing.json';

interface ImageData {
  url: string;
  width: number;
  height: number;
  mimeType: string;
  orientation: 'landscape' | 'portrait';
  aspectRatio: number;
  type: string;
}

interface Listing {
  ref: string;
  info: {
    type: string;
    images: {
      type: string;
      data: ImageData[];
      count: number;
    };
    // Add other properties if necessary
  };
  // Add other properties if necessary
}

const ListingPage: React.FC = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">Explore Listings</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {listings.data.map((listing: Listing, index: number) => (
          <div
            key={index}
            className="bg-white rounded-md shadow-md overflow-hidden"
          >
              <Image
                key={listing.info.images.data[0].url}
                src={listing.info.images.data[0].url}
                alt={listing.ref}
                className="w-full h-48 object-cover"
                width={listing.info.images.data[0].width}
                height={listing.info.images.data[0].height}
              />

            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{listing.ref}</h2>
              {/* Add other properties based on your JSON structure */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListingPage;
