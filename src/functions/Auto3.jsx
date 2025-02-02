import React, { useState } from 'react';

const GridComponent = () => {
  const [expandedChild, setExpandedChild] = useState(null);

  const handleChildClick = (id) => {
    setExpandedChild(id);
  };

  const handleBackClick = () => {
    setExpandedChild(null);
  };

  const children = [
    { id: 1, content: 'Child 1' },
    { id: 2, content: 'Child 2' },
    { id: 3, content: 'Child 3' },
    { id: 4, content: 'Child 4' },
  ];

  return (
    <div className="relative w-full h-[70%]">
      <div className={`grid grid-cols-2 grid-rows-2 gap-2 ${expandedChild ? 'hidden' : 'block'}`}>
        {children.map((child) => (
          <div
            key={child.id}
            className="border rounded-lg p-4 cursor-pointer flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition-all duration-300"
            onClick={() => handleChildClick(child.id)}
          >
            {child.content}
          </div>
        ))}
      </div>

      {expandedChild && (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl mb-4">Expanded: {children.find(c => c.id === expandedChild).content}</h2>
            <button
              onClick={handleBackClick}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GridComponent;