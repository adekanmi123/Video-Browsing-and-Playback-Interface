import React, { useState } from "react";

   const SearchBar: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
     const [query, setQuery] = useState("");

     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
       setQuery(e.target.value);
       onSearch(e.target.value);
     };

     return (
       <input
         type="text"
         placeholder="Search videos..."
         value={query}
         onChange={handleChange}
         className="w-full p-2 border rounded"
       />
     );
   };

   export default SearchBar;