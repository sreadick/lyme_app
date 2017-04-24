import React, { PropTypes } from 'react';
import UserSymptomsForm from '../components/UserSymptomsForm';
import { connect } from 'react-redux';
import { updateSymptomSeverity, saveUserSymptoms, fetchUserSymptoms, deleteSymptom } from '../actions';

class UserSymptomsPage extends React.Component {

  // constructor(props, state) {
  //   super(props, state);
  //
  //   this.state = {
  //     symptomsReceived: false
  //   }
  // }

  componentDidMount() {
    // this.props.fetchUserSymptoms();
  }

  componentWillReceiveProps(nextProps) {
    // if (nextProps.symptoms[0].name) {
    //   this.setState({ symptomsReceived: true });
    // }
  }

  render() {
    return (
      <div>
        <UserSymptomsForm symptoms={this.props.symptoms} updateSeverity={this.props.updateSeverity} saveUserSymptoms={this.props.saveUserSymptoms} deleteSymptom={this.props.deleteSymptom}/>
      </div>
    )
  }
}

UserSymptomsPage.propTypes = {
  updateSeverity: PropTypes.func.isRequired,
  saveUserSymptoms: PropTypes.func.isRequired,
  deleteSymptom: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    symptoms: state.currentUser.symptoms
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateSeverity: (symptom) => {
      dispatch(updateSymptomSeverity(symptom));
    },
    saveUserSymptoms: (symptoms) => {
      dispatch(saveUserSymptoms(symptoms));
    },
    fetchUserSymptoms: () => {
      dispatch(fetchUserSymptoms());
    },
    deleteSymptom: (symptom) => {
      dispatch(deleteSymptom(symptom))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSymptomsPage);
