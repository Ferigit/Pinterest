// components/SearchInput.tsx

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";

interface SearchInputProps {
  placeholder: string;
}

const suggestions = ["Apple", "Banana", "Orange", "Grapes", "Strawberry"];

export const SearchInput: React.FC<SearchInputProps> = ({ placeholder }) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    router.push({
      pathname: router.pathname,
      query: { filter: event.target.value },
    });
    // router.push(`?filter=${newFilter}`, undefined, { shallow: true }); // Update URL

    setSearchValue(event.target.value);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchValue(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div className="flex pl-1 md:pl-2 justify-start items-center relative bg-background-gray-100 flex-1  rounded-full">
      <svg
        className="w-6 h-6 mr-2"
        height="24"
        width="24"
        viewBox="0 0 24 24"
        aria-label="Search icon"
        role="img"
      >
        <path d="M10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6m13.12 2.88-4.26-4.26A9.842 9.842 0 0 0 20 10c0-5.52-4.48-10-10-10S0 4.48 0 10s4.48 10 10 10c1.67 0 3.24-.41 4.62-1.14l4.26 4.26a3 3 0 0 0 4.24 0 3 3 0 0 0 0-4.24"></path>
      </svg>
      <input
        type="text"
        placeholder={placeholder}
        value={searchValue}
        onChange={handleInputChange}
        ref={inputRef}
        className="border-none focus:outline-none p-1 md:p-2 w-full bg-transparent md:h-12 h-8  rounded-full rounded-l-none"
      />

      {/* {showSuggestions && (
        <div className="absolute top-12 left-0 bg-white border p-4 w-full rounded-lg">
          <h3 className="my-3">Recent searches</h3>
          <div className="flex justify-start items-center gap-x-2">
            {suggestions.map((suggestion) => (
              <div
                key={suggestion}
                className="cursor-pointer hover:bg-gray-200 p-1 w-fit bg-gray-100 rounded-full"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </div>
            ))}
          </div>
          <h3 className="my-3">Popular on pinterest</h3>
          <div className="flex justify-start items-center gap-x-2">
            {suggestions.map((suggestion) => (
              <div
                key={suggestion}
                className="cursor-pointer hover:bg-gray-200 p-1 w-fit bg-gray-100 rounded-full"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </div>
            ))}
          </div>
        </div>
      )} */}
    </div>
  );
};
