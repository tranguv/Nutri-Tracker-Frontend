// App.jsx
import React from 'react';
import Navbar from './Navbar';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        {/* Your main app content goes here */}
        <p>Main App Content</p>
      </main>
    </div>
  );
}

export default App;
