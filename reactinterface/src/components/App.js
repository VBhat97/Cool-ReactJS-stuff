import React, { Component } from 'react';
import '../css/App.css';

import AddAppointments from './AddAppointment';
import SearchAppointments from './SearchAppointment';
import ListAppointments from './ListAppointment';

import {without} from 'lodash';

class App extends Component {
  constructor() {
    super();
    this.state = {
      myName: 'Ray',
      myAppointments: [],
      formDisplay: true
    };
    this.deleteAppointment=this.deleteAppointment.bind(this);
    this.toggleForm=this.toggleForm.bind(this);
  }

  deleteAppointment(apt){
    let tempApts = this.state.myAppointments;
    tempApts = without(tempApts,apt)
    this.setState({
      myAppointments: tempApts
    });

  }
  
  toggleForm(){
    this.setState({
      formDisplay: !this.state.formDisplay
    });
  }

  componentDidMount() {
    fetch('./data.json')
      .then(response => response.json())
      .then(result => {
        const apts = result.map(item => {
          return item;
        });
        this.setState({
          myAppointments: apts
        });
      });
  }

  render() {
    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <AddAppointments formDisplay={this.state.formDisplay} toggleForm={this.toggleForm} />
                <SearchAppointments />
                <ListAppointments appointments={this.state.myAppointments} deleteAppointment={this.deleteAppointment}/>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;