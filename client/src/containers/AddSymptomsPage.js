import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AddSymptomsForm from '../components/AddSymptomsForm';
import { fetchCommonSymptoms, createUserSymptom, toggleSymptom } from '../actions'

class AddSymptomsPage extends React.Component {
  constructor(props) {
    super(props);

    this.addSelectedSymptoms = this.addSelectedSymptoms.bind(this);
    this.toggleSelectedSymptom = this.toggleSelectedSymptom.bind(this);
  }

  componentDidMount() {
    this.props.fetchCommonSymptoms();
  }

  toggleSelectedSymptom(symptom) {
    this.props.toggleSymptom(symptom)
  }

  addSelectedSymptoms() {
    this.props.selectedSymptoms.forEach(symptom => {
      this.props.createUserSymptom(symptom);
    });
  }

  render() {
    return (
      <AddSymptomsForm commonSymptoms={this.props.commonSymptoms} addSelectedSymptoms={this.addSelectedSymptoms} toggleSelectedSymptom={this.toggleSelectedSymptom}/>
    )
  }
}

AddSymptomsPage.propTypes = {
  commonSymptoms: PropTypes.array.isRequired,
  selectedSymptoms: PropTypes.array.isRequired,
  fetchCommonSymptoms: PropTypes.func.isRequired,
  createUserSymptom: PropTypes.func.isRequired,
  toggleSymptom: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    commonSymptoms: state.commonSymptoms.symptoms,
    selectedSymptoms: state.commonSymptoms.selected
  }
}

export default connect(mapStateToProps, {fetchCommonSymptoms, createUserSymptom, toggleSymptom})(AddSymptomsPage);
