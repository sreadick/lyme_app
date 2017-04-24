import React, { PropTypes } from 'react';
import SymptomCheckbox from './SymptomCheckbox';

class AddSymptomsForm extends React.Component {


  render() {
    return (
      <form className="ui form">
        <h3>Add Symptoms:</h3>
        { this.props.commonSymptoms.map((symptom) => <SymptomCheckbox symptom={symptom} key={symptom._id} toggleSelectedSymptom={this.props.toggleSelectedSymptom} />) }
        <button className="ui purple inverted submit button" onClick={(e) => {e.preventDefault(); this.props.addSelectedSymptoms()}}>Add Symptoms</button>
      </form>
    )
  }
}

AddSymptomsForm.propTypes = {
  commonSymptoms: PropTypes.array.isRequired,
  addSelectedSymptoms: PropTypes.func.isRequired,
  toggleSelectedSymptom: PropTypes.func.isRequired
}

export default AddSymptomsForm;
