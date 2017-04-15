import React, { Component } from 'react';
import Symptom from './Symptom';

class Symptoms extends Component {
  render(){
    return (
      <div>
        <Symptom name='back-pain'/>
        <Symptom name='fatigue'/>
        <Symptom name='rash'/>
      </div>
    )
  }
}

export default Symptoms
