import React from 'react';

type Props = {
  id: string;
  value: string;
  label: string;
  placeholder: string;
  errorMessage: string;
  showError: boolean;
  onBlur: () => void;
  onChange: (value: string) => void;
};

export const Input = ({
  id,
  value,
  label,
  placeholder,
  errorMessage,
  showError,
  onBlur,
  onChange,
}: Props) => {
  return (
    <div className="form-floating mb-3">
      <input
        className="form-control"
        id={id}
        type="text"
        placeholder={placeholder}
        value={value}
        onBlur={onBlur}
        onChange={(e) => onChange(e.target.value)}
      />
      <label htmlFor={id}>{label}</label>
      {showError && <span style={{ color: 'red' }}>{errorMessage}</span>}
    </div>
  );
};
