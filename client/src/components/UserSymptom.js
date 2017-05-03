import React from 'react';
import PropTypes from 'prop-types';

class UserSymptom extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
    this.changeSeverity = this.changeSeverity.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { severity } = nextProps.symptom;
    let sevSquares = this.refs.severity_container;
    for (let i = 0; i < 10; ++i) {
      if (Number(sevSquares.childNodes[i].innerHTML) <= severity) {
        sevSquares.childNodes[i].classList.add("highlighted");
      } else {
        sevSquares.childNodes[i].classList.remove("highlighted");
      }
    }
  }

  componentDidMount() {
    const { severity } = this.props.symptom;
    let sevSquares = this.refs.severity_container;
    for (let i = 0; i < 10; ++i) {
      if (Number(sevSquares.childNodes[i].innerHTML) <= severity) {
        sevSquares.childNodes[i].classList.add("highlighted");
      } else {
        sevSquares.childNodes[i].classList.remove("highlighted");
      }
    }
  }

  handleOnClick() {
    this.props.removeSymptom(this.props.symptom)
  }

  changeSeverity(severity) {
    this.props.updateSeverity({name: this.props.symptom.name, severity: severity, _id: this.props.symptom._id})
  }

  handleMouseOver(e) {
    if (e.target.className.includes("severity_square")) {
      let sevSquares = e.target.parentNode;
      for (let i = 0; i < Number(e.target.innerHTML); ++i) {
        sevSquares.childNodes[i].classList.add("highlighted");
      }
    }
  }

  handleMouseOut(e) {
    if (e.target.className.includes("severity_square")) {
      let sevSquares = e.target.parentNode;
      for (let i = 0; i < 10; ++i) {
        if (Number(sevSquares.childNodes[i].innerHTML) <= this.props.symptom.severity) {
          sevSquares.childNodes[i].classList.add("highlighted");
        } else {
          sevSquares.childNodes[i].classList.remove("highlighted");
        }
      }
    }
  }

  render() {
    return (
      <div className="ui very padded container segment user_symptom">
        <h4>{this.props.symptom.name}<i className="remove icon" onClick={this.handleOnClick}></i></h4>
        <div>
          <div className="severity_container" ref="severity_container" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
            <div className="severity_square" onClick={() => this.changeSeverity(1)}>1</div>
            <div className="severity_square" onClick={() => this.changeSeverity(2)}>2</div>
            <div className="severity_square" onClick={() => this.changeSeverity(3)}>3</div>
            <div className="severity_square" onClick={() => this.changeSeverity(4)}>4</div>
            <div className="severity_square" onClick={() => this.changeSeverity(5)}>5</div>
            <div className="severity_square" onClick={() => this.changeSeverity(6)}>6</div>
            <div className="severity_square" onClick={() => this.changeSeverity(7)}>7</div>
            <div className="severity_square" onClick={() => this.changeSeverity(8)}>8</div>
            <div className="severity_square" onClick={() => this.changeSeverity(9)}>9</div>
            <div className="severity_square" onClick={() => this.changeSeverity(10)}>10</div>
          </div>
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
