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
import { FilterSelect } from "./FilterSelect";
import { capitalizeField } from "../utils/helpers";

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

const getButtonStyles = (isActive: boolean) =>
  `px-4 py-2.5 rounded-lg border-2 flex items-center gap-2 font-medium transition-all duration-200 transform hover:scale-105 active:scale-95 ${
    isActive
      ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-200"
      : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 hover:shadow-md"
  }`;

const getFieldIcon = (field: SortableField) => {
  switch (field) {
    case "price":
      return <DollarSign className="w-4 h-4" />;
    case "year":
      return <Calendar className="w-4 h-4" />;
    case "mileage":
      return <Gauge className="w-4 h-4" />;
    default:
      return null;
  }
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
  <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
    <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-center max-w-7xl mx-auto">
      <div className="flex items-center gap-2 text-gray-800 min-w-fit pr-20">
        <Filter className="w-5 h-5 text-blue-600" />
        <span className="font-semibold text-lg">Filters & Sort</span>
      </div>

      <div className="flex flex-wrap gap-3 flex-1 items-end">
        {/* Filter Selects */}
        <FilterSelect
          value={selectedMake}
          onChange={setSelectedMake}
          options={availableMakes}
          placeholder="All Makes"
        />

        <FilterSelect
          value={selectedColor}
          onChange={setSelectedColor}
          options={availableColors}
          placeholder="All Colors"
        />

        <div className="flex gap-2 flex-wrap">
          {SORTABLE_FIELDS.map((field) => (
            <button
              key={field}
              onClick={() => handleSort(field)}
              className={getButtonStyles(sortBy === field)}
            >
              {getFieldIcon(field)}
              <span className="text-sm">{capitalizeField(field)}</span>
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
