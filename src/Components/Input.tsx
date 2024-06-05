import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id?: string;
  name?: string;
}

const Input: React.FC<InputProps> = ({ label, id, name, ...props }) => {
  const inputId = id || name;

  return (
    <div className="mb-4">
      {label && <label htmlFor={inputId} className="block mb-2 font-bold text-white">{label}</label>}
      <input
        id={inputId}
        name={name}
        className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...props}
      />
    </div>
  );
};

export default Input;
