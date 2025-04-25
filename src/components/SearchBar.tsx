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
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search doctor name"
          className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition-all text-gray-800"
        />
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </div>
      </div>
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute w-full bg-white border rounded-lg mt-1 shadow-lg z-10">
          {suggestions.map(doctor => (
            <div
              key={doctor.id}
              data-testid="suggestion-item"
              className="p-3 hover:bg-gray-100 cursor-pointer text-gray-800"
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