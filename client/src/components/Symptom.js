import React, { PropTypes } from 'react';

class Symptom extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.updateSeverity({name: this.props.symptom.name, severity: e.target.value, id: this.props.symptom.id})
  }

  render() {
    return (
      <div>
        <h3>{this.props.symptom.name}</h3>
        <div className="field">
          <label>severity: </label>
          <input type="number" value={this.props.symptom.severity} onChange={this.handleChange} />
        </div>
      </div>
    )
  }
}

Symptom.propTypes = {
  symptom: PropTypes.object.isRequired
}

export default Symptom
