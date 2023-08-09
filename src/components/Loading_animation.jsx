import React, { useState, useEffect } from "react";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center text-gray-600  ">
      {isLoading ? (
        <div className="text-2xl font-bold ">Loading...</div>
      ) : (
        <div className="text-2xl font-bold">Content Not found!</div>
      )}
    </div>
  );
};

export default App;
