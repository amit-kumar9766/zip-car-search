import { useState, useMemo } from "react";
import { VEHICLE_DATA as allVehicles } from "../data/vehicles";
import { type Vehicle } from "../utils/constants";
import { validateZipCode } from "../utils/helpers";

type SortableField = "price" | "year" | "mileage";

export const useVehicles = () => {
  const [zipCode, setZipCode] = useState<string>("");
  const [searchedZip, setSearchedZip] = useState<string>("");
  const [selectedMake, setSelectedMake] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [sortBy, setSortBy] = useState<SortableField | "">("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [isSearched, setIsSearched] = useState<boolean>(false);
  const [zipError, setZipError] = useState<string>("");

  const handleSearch = (): void => {
    if (!zipCode.trim()) {
      setZipError("Please enter a ZIP code");
      return;
    }
    if (!validateZipCode(zipCode)) {
      setZipError("Please enter a valid 5-digit ZIP code");
      return;
    }
    setZipError("");
    setSearchedZip(zipCode);
    setIsSearched(true);
    setSelectedMake("");
    setSelectedColor("");
    setSortBy("");
  };

  const filteredVehicles = useMemo<Vehicle[]>(() => {
    if (!isSearched) return [];
    let filtered = allVehicles.filter((v) => v.zipCode === searchedZip);
    if (selectedMake)
      filtered = filtered.filter((v) => v.make === selectedMake);
    if (selectedColor)
      filtered = filtered.filter((v) => v.color === selectedColor);

    if (sortBy) {
      filtered = [...filtered].sort((a, b) => {
        const aVal = a[sortBy];
        const bVal = b[sortBy];
        if (typeof aVal === "number" && typeof bVal === "number") {
          return sortOrder === "asc" ? aVal - bVal : bVal - aVal;
        }
        return 0;
      });
    }
    return filtered;
  }, [searchedZip, selectedMake, selectedColor, sortBy, sortOrder, isSearched]);

  const availableMakes = useMemo<string[]>(() => {
    return [
      ...new Set(
        allVehicles.filter((v) => v.zipCode === searchedZip).map((v) => v.make)
      ),
    ].sort();
  }, [searchedZip]);

  const availableColors = useMemo<string[]>(() => {
    return [
      ...new Set(
        allVehicles.filter((v) => v.zipCode === searchedZip).map((v) => v.color)
      ),
    ].sort();
  }, [searchedZip]);

  const handleSort = (field: SortableField): void => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }
  };

  const resetSearch = () => {
    setIsSearched(false);
    setSearchedZip("");
    setZipCode("");
    setSelectedMake("");
    setSelectedColor("");
    setSortBy("price");
    setSortOrder("asc");
    setZipError("");
  };

  return {
    zipCode,
    setZipCode,
    searchedZip,
    selectedMake,
    setSelectedMake,
    selectedColor,
    setSelectedColor,
    sortBy,
    sortOrder,
    handleSort,
    isSearched,
    zipError,
    handleSearch,
    filteredVehicles,
    availableMakes,
    availableColors,
    resetSearch,
  };
};
