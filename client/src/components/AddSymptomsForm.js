import React, { PropTypes } from 'react';
import SymptomCheckbox from './SymptomCheckbox';

class AddSymptomsForm extends React.Component {

  render() {
    return (
        <form id="add_symptoms_form" className="ui form">
          <h3>To get started, select your symptoms from the list below:</h3>
          <div id="flex_container">
            {this.props.commonSymptomList.map((symptomGroup, index) =>
              <div className="grouped inline fields" key={index}>
                <label htmlFor={symptomGroup[0].category}>{symptomGroup[0].category} :</label>
                {symptomGroup.map(symptom =>
                  <SymptomCheckbox key={symptom._id} name={symptom.category} symptom={symptom} toggleSelectedSymptom={this.props.toggleSelectedSymptom} />
                )}
              </div>
            )}
          </div>
          <button className="ui purple inverted submit button" onClick={(e) => {e.preventDefault(); this.props.addSelectedSymptoms()}}>Add Symptoms</button>
        </form>
    )
  }
}

AddSymptomsForm.propTypes = {
  commonSymptomList: PropTypes.array.isRequired,
  addSelectedSymptoms: PropTypes.func.isRequired,
  toggleSelectedSymptom: PropTypes.func.isRequired
}

export default AddSymptomsForm;
