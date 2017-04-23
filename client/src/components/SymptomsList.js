import React, { PropTypes } from 'react';
import Symptom from './Symptom';
import { connect } from 'react-redux';
import { updateSeverity, saveUserSymptoms } from '../actions';

class SymptomsList extends React.Component {

  render() {
    const emptyMessage = (
      <p>Please list your symptoms</p>
    )

    const symptomsList = (
      <form className="ui form" onSubmit={e => {e.preventDefault(); this.props.saveUserSymptoms(this.props.userSymptoms)}} >
        {this.props.userSymptoms.map(symptom => <Symptom key={symptom.id} symptom={symptom} updateSeverity={this.props.updateSeverity}/>)}
        <div className="field">
          <button className="ui large blue submit button">Save Symptoms</button>
        </div>
      </form>
    )

    return (
      <div>
        {this.props.userSymptoms.length === 0 ? emptyMessage : symptomsList}
      </div>
    )
  }
}

SymptomsList.propTypes = {
  userSymptoms: PropTypes.array.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    userSymptoms: state.userSymptoms
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateSeverity: (symptom) => {
      dispatch(updateSeverity(symptom));
    },
    saveUserSymptoms: (symptoms) => {
      dispatch(saveUserSymptoms(symptoms));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SymptomsList);
