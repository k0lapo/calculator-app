// Button.jsx
import React from 'react';
import './App.css';

const Button = ({ label, onClick }) => {
  return <input type="button" value={label} onClick={onClick} />;
};

export default Button;
