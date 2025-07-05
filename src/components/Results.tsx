import React from "react";
import { VehicleCard } from "./VehicleCard";
import { Search } from "lucide-react";
import type { Vehicle } from "../utils/constants";

type ResultsProps = {
  filteredVehicles: Vehicle[];
  searchedZip: string;
};

export const Results: React.FC<ResultsProps> = ({
  filteredVehicles,
  searchedZip,
}) => (
  <>
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-semibold">
        {!filteredVehicles.length
          ? `No vehicles found in ${searchedZip}`
          : `${filteredVehicles.length} vehicle${
              filteredVehicles.length === 1 ? "" : "s"
            } found in ${searchedZip}`}
      </h2>
    </div>
    {!filteredVehicles.length ? (
      <div className="bg-white rounded-lg shadow-sm p-12 text-center">
        <Search className="w-16 h-16 mx-auto text-gray-400 mb-4" />
        <h3 className="text-lg font-medium mb-2">No vehicles found</h3>
        <p className="text-gray-600">
          Try searching a different ZIP code or adjusting filters.
        </p>
      </div>
    ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVehicles.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
    )}
  </>
);
