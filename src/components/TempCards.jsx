"use client";

const TempCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold">Card 1</h3>
        <p className="text-gray-600">Temporary card content</p>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold">Card 2</h3>
        <p className="text-gray-600">Temporary card content</p>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold">Card 3</h3>
        <p className="text-gray-600">Temporary card content</p>
      </div>
    </div>
  );
};

export default TempCards;
