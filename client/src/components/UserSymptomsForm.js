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
      <form className="ui form" onSubmit={this.handleSubmit}>
        {this.props.symptoms.length === 0 ?
          <p>No symptoms are currently being tracked. Go back to add more.</p> :
          this.props.symptoms.map(symptom =>
            <UserSymptom
              key={symptom._id}
              symptom={symptom}
              updateSeverity={this.props.updateSeverity}
              removeSymptom={this.props.removeSymptom}
            />
          )
        }
        <div className="field">
          <button className={classNames("ui large submit button", {blue: this.props.symptoms.length === 0}, {green: this.props.symptoms.length > 0} )}>
            {this.props.symptoms.length > 0 ? "Save Symptoms" : "Go Back"}
          </button>
        </div>
      </form>
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
