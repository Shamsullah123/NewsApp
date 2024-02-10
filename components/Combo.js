import React, { useState } from "react";

const ComboBox = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState("");

   

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);
    onSelect(value);
  };

  return (
    <select value={selectedOption} onChange={handleChange} className="bg-transparent text-white outline-none w-48 mr-4">
      <option value="" className="text-blue-500">Select Author</option>
      {options?.map((option, index) => (
        <option key={index} value={option?.value || option} className="text-black" >
          {option?.author || option}
        </option>
      ))}
    </select>

  );
};

export default ComboBox;
