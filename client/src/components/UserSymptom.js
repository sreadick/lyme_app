import React, { PropTypes } from 'react';

class UserSymptom extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnChange() {
    this.props.updateSeverity({name: this.props.symptom.name, severity: e.target.value, _id: this.props.symptom._id})
  }

  handleOnClick() {
    this.props.deleteSymptom(this.props.symptom)
  }

  render() {
    return (
      <div>
        <h3>{this.props.symptom.name}</h3><i className="remove icon" onClick={this.handleOnClick}></i>
        <div className="field">
          <label>severity: </label>
          <input type="number" value={this.props.symptom.severity} onChange={this.handleOnChange} />
        </div>
      </div>
    )
  }
}

UserSymptom.propTypes = {
  symptom: PropTypes.object.isRequired,
  updateSeverity: PropTypes.func.isRequired
}

export default UserSymptom
