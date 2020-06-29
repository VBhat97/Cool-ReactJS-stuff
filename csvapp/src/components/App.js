import React from 'react';
import '../css/App.css';
import Header from './Header'
import HomeBody from './HomeBody'
import AboutBody from './AboutBody'

function App() {
  return (
    <div>
      <Header />
      <HomeBody />
      <AboutBody />
      <UploadForm />
      {/* TODO: Add Conditional Rendering based on the header data.*/}
      {/* TODO: Add Form content by reading the csv and other parameters whichever needed */}
      {/* TODO: Add Footer with Copyright Components */}
    </div>
  );
}

export default App;
