import React from 'react';
import PropTypes from 'prop-types';
import UserSymptomsForm from '../components/UserSymptomsForm';
import { connect } from 'react-redux';
import { modifySymptomSeverity, saveUserSymptom, fetchUserSymptoms, removeSymptom, deleteSymptom } from '../actions';

class UserSymptomsPage extends React.Component {

  constructor(props, state) {
    super(props, state);

    this.saveUserSymptoms = this.saveUserSymptoms.bind(this);
  }

  saveUserSymptoms() {
    this.props.userSymptoms.symptoms.forEach(symptom => {
      this.props.saveUserSymptom(symptom);
    })
    if (this.props.userSymptoms.toBeRemoved) {
      this.props.userSymptoms.toBeRemoved.forEach(symptom => {
        this.props.deleteSymptom(symptom)
      })
    }
  }

  render() {
    return (
      <div>
        <UserSymptomsForm symptoms={this.props.userSymptoms.symptoms} updateSeverity={this.props.updateSeverity} saveUserSymptoms={this.saveUserSymptoms} removeSymptom={this.props.removeSymptom}/>
      </div>
    )
  }
}

UserSymptomsPage.propTypes = {
  userSymptoms: PropTypes.object.isRequired,
  updateSeverity: PropTypes.func.isRequired,
  saveUserSymptom: PropTypes.func.isRequired,
  removeSymptom: PropTypes.func.isRequired,
  deleteSymptom: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    userSymptoms: state.userSymptoms
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateSeverity: (symptom) => {
      dispatch(modifySymptomSeverity(symptom));
    },
    saveUserSymptom: (symptom) => {
      dispatch(saveUserSymptom(symptom));
    },
    fetchUserSymptoms: () => {
      dispatch(fetchUserSymptoms());
    },
    removeSymptom: (symptom) => {
      dispatch(removeSymptom(symptom))
    },
    deleteSymptom: (symptom) => {
      dispatch(deleteSymptom(symptom))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSymptomsPage);
