import React from "react";
import { Palette, Gauge } from "lucide-react";
import type { Vehicle } from "../utils/constants";
import { formatMileage, formatPrice } from "../utils/helpers";

export const VehicleCard: React.FC<{ vehicle: Vehicle }> = ({ vehicle }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <img
        src={vehicle.image}
        alt={`${vehicle.year} ${vehicle.make}`}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold">
            {vehicle.year} {vehicle.make} {vehicle.model}
          </h3>
          <span className="text-xl font-bold text-blue-600">
            {formatPrice(vehicle.price)}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{vehicle.trim}</p>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Palette className="w-4 h-4 text-gray-400" />
            {vehicle.color}
          </div>
          <div className="flex items-center justify-end gap-2">
            <Gauge className="w-4 h-4 text-gray-400" />
            {formatMileage(vehicle.mileage)} miles
          </div>
        </div>
      </div>
    </div>
  );
};
