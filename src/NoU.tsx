import React from 'react';
import Cat from './Cat';
import "./App.scss"

export default class NoU extends React.Component {
  constructor(props: {} | Readonly<{}>){
    super(props)
  }
  render() {
    return(
      <div>
        <Cat />
        <div className="overlay">
          <div className="centered-content">
            <h1>No U</h1>
          </div>
        </div>
      </div>
    )
  }

}