import React, { PropTypes } from 'react';
import UserSymptom from './UserSymptom';

class UserSymptomsForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.saveUserSymptoms(this.props.userSymptoms);
  }

  render() {

    const emptyMessage = (
      <p>No symptoms are currently being tracked</p>
    )

    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        {this.props.symptoms.length === 0 ?
          emptyMessage :
          this.props.symptoms.map(symptom =>
            <UserSymptom
              key={symptom._id}
              symptom={symptom}
              updateSeverity={this.props.updateSeverity}
              deleteSymptom={this.props.deleteSymptom}
            />
          )
        }
        <div className="field">
          <button className="ui large blue submit button">Save Symptoms</button>
        </div>
      </form>
    )
  }
}

UserSymptomsForm.propTypes = {
  symptoms: PropTypes.array.isRequired,
  updateSeverity: PropTypes.func.isRequired,
  saveUserSymptoms: PropTypes.func.isRequired,
  deleteSymptom: PropTypes.func.isRequired
}

export default UserSymptomsForm;
