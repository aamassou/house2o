import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="waterfall">

        {/* Template for titles/subtitle */}
        <div id="waterfallContainer">
          <p id="headerTitle">House2o</p>
          <p id="headerSubtitle">Lorem Ipsum Dolor etc Lorem Ipsum Dolor etc</p>
        </div>

        <div id="waterfallContainer" style={{ marginTop: 40 }}>
          <p id="headerTitle">House2o</p>
          <p id="headerSubtitle">Lorem Ipsum Dolor etc Lorem Ipsum Dolor etc</p>
        </div>
      </div>
      <div id="house-container">
        <div id="house-background">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
