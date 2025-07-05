import React from "react";
import {
  Filter,
  DollarSign,
  Calendar,
  Gauge,
  SortAsc,
  SortDesc,
} from "lucide-react";
import { SORTABLE_FIELDS, type SortableField } from "../utils/constants";

type FiltersProps = {
  selectedMake: string;
  setSelectedMake: (value: string) => void;
  selectedColor: string;
  setSelectedColor: (value: string) => void;
  availableMakes: string[];
  availableColors: string[];
  sortBy: SortableField | "";
  sortOrder: "asc" | "desc";
  handleSort: (field: SortableField) => void;
};

export const Filters: React.FC<FiltersProps> = ({
  selectedMake,
  setSelectedMake,
  selectedColor,
  setSelectedColor,
  availableMakes,
  availableColors,
  sortBy,
  sortOrder,
  handleSort,
}) => (
  <div className="bg-white rounded-lg shadow-sm p-6 mb-8 ">
    <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-center max-w-7xl mx-auto">
      <div className="flex items-center gap-2 text-gray-800 min-w-fit pr-20">
        <Filter className="w-5 h-5 text-blue-600" />
        <span className="font-semibold text-lg">Filters & Sort</span>
      </div>

      <div className="flex flex-wrap gap-3 flex-1 items-end">
        <div className="min-w-fit">
          {/* <label className="block text-sm font-medium text-gray-700 mb-2">
            Make
          </label> */}
          <select
            value={selectedMake}
            onChange={(e) => setSelectedMake(e.target.value)}
            className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-700 font-medium transition-all duration-200 hover:border-gray-400 min-w-[120px]"
          >
            <option value="">All Makes</option>
            {availableMakes.map((make) => (
              <option key={make} value={make}>
                {make}
              </option>
            ))}
          </select>
        </div>

        <div className="min-w-fit">
          {/* <label className="block text-sm font-medium text-gray-700 mb-2">
            Color
          </label> */}
          <select
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
            className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-700 font-medium transition-all duration-200 hover:border-gray-400 min-w-[120px]"
          >
            <option value="">All Colors</option>
            {availableColors.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-2 flex-wrap">
          {SORTABLE_FIELDS.map((field) => (
            <button
              key={field}
              onClick={() => handleSort(field)}
              className={`px-4 py-2.5 rounded-lg border-2 flex items-center gap-2 font-medium transition-all duration-200 transform hover:scale-105 active:scale-95 ${
                sortBy === field
                  ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-200"
                  : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 hover:shadow-md"
              }`}
            >
              {field === "price" && <DollarSign className="w-4 h-4" />}
              {field === "year" && <Calendar className="w-4 h-4" />}
              {field === "mileage" && <Gauge className="w-4 h-4" />}
              <span className="text-sm">
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </span>
              {sortBy === field &&
                (sortOrder === "asc" ? (
                  <SortAsc className="w-4 h-4" />
                ) : (
                  <SortDesc className="w-4 h-4" />
                ))}
            </button>
          ))}
        </div>
      </div>
    </div>
  </div>
);
