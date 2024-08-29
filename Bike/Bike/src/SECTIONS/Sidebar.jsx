import React from 'react';

export const Sidebar = ({ closeSidebar }) => {
  return (
    <div className="fixed top-0 right-0 w-64 h-full bg-gray-800 text-white p-4">
      <button onClick={closeSidebar} className="text-white mb-4">Close Sidebar</button>
      <h1>Sidebar</h1>
      {/* Add your sidebar content here */}
    </div>
  );
};

export default Sidebar;
