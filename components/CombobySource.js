import React, { useState } from 'react';

const CombobySource = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);
    onSelect(value);
  };

  return (
    <select value={selectedOption} onChange={handleChange} className="bg-transparent text-white outline-none">
      <option value="" className="text-blue-500">Select Source</option>
      {options?.map((option, index) => (
        <option key={index} value={option?.value || option} className="text-black" >
          {option?.source || option}
        </option>
      ))}
    </select>
  );
};

export default CombobySource;