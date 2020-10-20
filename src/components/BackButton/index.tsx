import React from 'react';

// import { Container } from './styles';

interface BackButtonProps {
  value: string;
  onClick: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ onClick, value }) => {
  return (
    <button onClick={onClick}>{value}</button>
  );
}

export default BackButton;
