import React from "react";
import { Header } from "./components/Header";
import { SearchForm } from "./components/SearchForm";
import { Filters } from "./components/Filters";
import { Results } from "./components/Results";
import { BackButton } from "./components/BackButton";
import { useVehicles } from "./hooks/useVehicles";

const App: React.FC = () => {
  const {
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
  } = useVehicles();

  const hasActiveFilters = selectedMake || selectedColor;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isSearched ? (
          <>
            <BackButton onBack={resetSearch} />

            {/* Show filters if there are results or if filters are active */}
            {(filteredVehicles.length || hasActiveFilters) && (
              <Filters
                selectedMake={selectedMake}
                setSelectedMake={setSelectedMake}
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
                availableMakes={availableMakes}
                availableColors={availableColors}
                sortBy={sortBy}
                sortOrder={sortOrder}
                handleSort={handleSort}
              />
            )}

            <Results
              filteredVehicles={filteredVehicles}
              searchedZip={searchedZip}
            />
          </>
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <SearchForm
              zipCode={zipCode}
              setZipCode={setZipCode}
              zipError={zipError}
              handleSearch={handleSearch}
            />
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
