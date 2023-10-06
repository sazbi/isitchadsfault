import React from 'react';
import Cat from './Cat';
import "./App.scss"

var DAY = new Date("2023-10-5");

export default class Incident extends React.Component {
  daysSince(){
    const today = new Date();
  
    const differenceInTime = today - DAY;
    const differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));
    return differenceInDays;
  }
  render() {
    return(
      <div>
        <Cat />
        <div className="overlay">
          <div className="centered-content">
            <h3>Days Since a Security Incident: {this.daysSince()}</h3>
          </div>
        </div>
      </div>
    )
  }

}