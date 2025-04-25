import { useState, useEffect } from 'react';

interface Doctor {
  id: string;
  name: string;
}

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  doctors: Doctor[];
}

export default function SearchBar({ searchTerm, setSearchTerm, doctors }: SearchBarProps) {
  const [suggestions, setSuggestions] = useState<Doctor[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    if (searchTerm) {
      const filtered = doctors
        .filter(doctor => 
          doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .slice(0, 3);
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchTerm, doctors]);

  return (
    <div className="relative">
      <input
        data-testid="autocomplete-input"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search doctors by name..."
        className="w-full p-4 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute w-full bg-white border rounded-lg mt-1 shadow-lg z-10">
          {suggestions.map(doctor => (
            <div
              key={doctor.id}
              data-testid="suggestion-item"
              className="p-3 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setSearchTerm(doctor.name);
                setShowSuggestions(false);
              }}
            >
              {doctor.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}