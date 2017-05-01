import React from 'react';
import PropTypes from 'prop-types';
import UserSymptom from './UserSymptom';
import classNames from 'classnames';

class UserSymptomsForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.saveUserSymptoms();
  }

  render() {

    return (
      <div className="ui centered very padded container">
        <form id="user_symptoms_form" className="ui form" onSubmit={this.handleSubmit}>
          {this.props.symptoms.length === 0 ?
            <p>No symptoms are currently being tracked. Go back to add more</p> :
            <div>
              <p>From 1 to 10, indicate the general severity of each symptom</p>
              {this.props.symptoms.map(symptom =>
                <UserSymptom
                  key={symptom._id}
                  symptom={symptom}
                  updateSeverity={this.props.updateSeverity}
                  removeSymptom={this.props.removeSymptom}
                />
              )}
            </div>
          }
          <div className="field">
            <button className={classNames("ui large submit button", {blue: this.props.symptoms.length === 0}, {green: this.props.symptoms.length > 0} )}>
              {this.props.symptoms.length > 0 ? "Save Symptoms" : "Go Back"}
            </button>
          </div>
        </form>
      </div>
    )
  }
}

UserSymptomsForm.propTypes = {
  symptoms: PropTypes.array.isRequired,
  updateSeverity: PropTypes.func.isRequired,
  saveUserSymptoms: PropTypes.func.isRequired,
  removeSymptom: PropTypes.func.isRequired
}

export default UserSymptomsForm;
