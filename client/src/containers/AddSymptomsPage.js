import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AddSymptomsForm from '../components/AddSymptomsForm';
import { fetchCommonSymptoms, createUserSymptom, toggleSymptom } from '../actions'

class AddSymptomsPage extends React.Component {
  constructor(props, state) {
    super(props, state);

    this.state = { listIsOrganised: false, listByCategory: null }

    this.addSelectedSymptoms = this.addSelectedSymptoms.bind(this);
    this.toggleSelectedSymptom = this.toggleSelectedSymptom.bind(this);
  }

  componentDidMount() {
    this.props.fetchCommonSymptoms();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.commonSymptoms.symptoms.length > 0) {
      let categories = [];
      nextProps.commonSymptoms.symptoms.map((symptom) => {
        if (!categories.includes(symptom.category)) {
          categories.push(symptom.category)
        }
      })
      let listByCategory = categories.map(category => {
        return nextProps.commonSymptoms.symptoms.filter(s => category === s.category)
      })
      console.log(listByCategory)
      this.setState({listIsOrganised: true, listByCategory: listByCategory})
    }
  }

  toggleSelectedSymptom(symptom) {
    this.props.toggleSymptom(symptom)
  }

  addSelectedSymptoms() {
    this.props.commonSymptoms.selected.forEach(symptom => {
      this.props.createUserSymptom(symptom);
    });
  }

  render() {
    return (
      <div>
        {(this.props.commonSymptoms.isFetching || !this.state.listIsOrganised) ?
          <div className="ui segment">
            <p></p>
            <div className="ui active dimmer">
              <div className="ui loader"></div>
            </div>
          </div>
        :
          <AddSymptomsForm commonSymptomList={this.state.listByCategory} addSelectedSymptoms={this.addSelectedSymptoms} toggleSelectedSymptom={this.toggleSelectedSymptom}/>
        }
      </div>
    )
  }
}

AddSymptomsPage.propTypes = {
  commonSymptoms: PropTypes.object.isRequired,
  fetchCommonSymptoms: PropTypes.func.isRequired,
  createUserSymptom: PropTypes.func.isRequired,
  toggleSymptom: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    commonSymptoms: state.commonSymptoms
  }
}

export default connect(mapStateToProps, {fetchCommonSymptoms, createUserSymptom, toggleSymptom})(AddSymptomsPage);
