import React, { useState } from 'react';
import '../styles/index.css';

const Input = ({ label, type = 'text', placeholder, value, onChange, required = false, className = '' }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`input-container ${className} ${isFocused ? 'focused' : ''}`}>
      <label className="input-label">
        {label} {required && <span className="required-star">*</span>}
      </label>
      <input
        type={type}
        className="input-field"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};

export default Input;
