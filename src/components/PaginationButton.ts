import React from 'react';

interface PaginationButtonProps {
  onClick: () => void;
}

const PaginationButton: React.FC<PaginationButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
    >
      Load More
    </button>
  );
};

export default PaginationButton;