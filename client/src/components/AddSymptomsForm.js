import React, { PropTypes } from 'react';
import SymptomCheckbox from './SymptomCheckbox';

// constructor(props, state) {
//   super(props, state);
//
//   this.state = {
//     csListByCategory: []
//   }
//
// }

// componentDidMount(nextProps) {
//   // create an array of objects where the each object contains a category-label and a list of symptoms by that category
//   nextProps.commonSymptoms.forEach((symptom, index, array) => {
//     if (index === 0 || array[index - 1].category !== symptom.category) {
//       let category = symptom.category;
//       this.setState({
//         csListByCategory: [...this.state.csListByCategory, {category: category, id: index, symptoms: nextProps.commonSymptoms.filter(s => s.category === category)} ]
//       });
//     } else {
//       this.setState({item: "empty"});
//     }
//   })
// }
//
// render() {
//   return (
//     <div className="ui centered grid">
//       <form className="ui form">
//         <p>To get started, select your symptoms from the list below:</p>
//           {this.state.csListByCategory.length > 0 && this.state.csListByCategory.map((symptomGroup, index, array) =>
//             <div className="grouped fields">
//               <label className="group-label" htmlFor={symptomGroup.category}>{symptomGroup.category} :</label>
//               symptomGroup.sympoms.map((symptom) =>
//                 <SymptomCheckbox key={symptom._id} symptom={symptom} toggleSelectedSymptom={this.props.toggleSelectedSymptom} />
//               )
//             </div>
//           )}
//         <button className="ui purple inverted submit button" onClick={(e) => {e.preventDefault(); this.props.addSelectedSymptoms()}}>Add Symptoms</button>
//       </form>
//     </div>
//   )
// }



class AddSymptomsForm extends React.Component {

  render() {
    return (
        <form id="add_symptoms_form" className="ui form">
          <h3>To get started, select your symptoms from the list below:</h3>
          <div id="flex_container">
            {this.props.commonSymptomList.map(symptomGroup =>
              <div className="grouped inline fields">
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
