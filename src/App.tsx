import { Header } from "./components/Header";
import { SearchForm } from "./components/SearchForm";
import { Filters } from "./components/Filters";
import { Results } from "./components/Results";
import { useVehicles } from "./hooks/useVehicles";

export default function App() {
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isSearched ? (
          <>
            <button
              onClick={resetSearch}
              className="mb-6 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
            >
              ← Back to Search
            </button>
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
      </div>
    </div>
  );
}
