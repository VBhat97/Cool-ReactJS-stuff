import React from 'react';
import '../css/App.css';
import AddAppointment from './AddAppointment';
import ListAppointment from './ListAppointment';
import SearchAppointment from './SearchAppointment';

function App() {
  return (
    <main className="page bg-white" id="petratings">
    <div className="container">
      <div className="row">
        <div className="col-md-12 bg-white">
          <div className="container">
            <AddAppointment />
            <ListAppointment />
            <SearchAppointment />
          </div>
        </div>
      </div>
    </div>
  </main>
  );
}

export default App;
