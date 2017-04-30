import React from 'react';
import PropTypes from 'prop-types';

class SymptomCheckbox extends React.Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.toggleSelectedSymptom(e.target.value)
  }

  render() {
    return (
      <div>
        <div className="field">
          <div className="ui toggle checkbox">
            <input type="checkbox" name={this.props.symptom.category} value={this.props.symptom.name} onClick={this.handleClick}/>
            <label>{this.props.symptom.name}</label>
          </div>
        </div>
      </div>
    )
  }
}

SymptomCheckbox.propTypes = {
  symptom: PropTypes.object.isRequired,
  toggleSelectedSymptom: PropTypes.func.isRequired
}

export default SymptomCheckbox;
