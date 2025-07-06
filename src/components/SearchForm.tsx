import React from "react";
import { MapPin, Search } from "lucide-react";

type SearchFormProps = {
  zipCode: string;
  setZipCode: (value: string) => void;
  zipError: string;
  handleSearch: () => void;
};

export const SearchForm: React.FC<SearchFormProps> = ({
  zipCode,
  setZipCode,
  zipError,
  handleSearch,
}) => (
  <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
    <div className="flex flex-col sm:flex-row gap-4 sm:items-end items-center">
      <div className="flex-1 w-full">
        <label
          htmlFor="zipCode"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          <MapPin className="inline w-4 h-4 mr-1" />
          ZIP Code
        </label>
        <input
          id="zipCode"
          type="text"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder="Enter 5-digit ZIP code"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          maxLength={5}
        />
      </div>
      <button
        onClick={handleSearch}
        className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
      >
        <Search className="w-4 h-4" />
        Search
      </button>
    </div>
    {zipError && <p className="mt-1 text-sm text-red-600">{zipError}</p>}
  </div>
);
