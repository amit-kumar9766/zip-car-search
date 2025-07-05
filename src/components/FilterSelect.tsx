const SELECT_STYLES =
  "px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-700 font-medium transition-all duration-200 hover:border-gray-400 min-w-[120px]";

export const FilterSelect: React.FC<{
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder: string;
}> = ({ value, onChange, options, placeholder }) => (
  <div className="min-w-fit">
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={SELECT_STYLES}
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);
