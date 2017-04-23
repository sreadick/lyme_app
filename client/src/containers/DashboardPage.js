import React, { PropTypes } from 'react';
import Auth from '../modules/Auth';
import Dashboard from '../components/Dashboard';
import { connect } from 'react-redux';
import { fetchCurrentUser, fetchCommonSymptoms, createUserSymptoms } from '../actions'

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);

    this.addSelectedSymptoms = this.addSelectedSymptoms.bind(this);
  }

  componentDidMount() {
    this.props.fetchCurrentUser();
    this.props.fetchCommonSymptoms();
  }

  addSelectedSymptoms(symptomNames) {
    let id = 0;
    const userSymptomsList = symptomNames.map(symptomName => {
      id++;
      return {
        name: symptomName,
        severity: 0,
        id: id
      }
    });
    this.props.createUserSymptoms(userSymptomsList)
  }

  render() {
    return (<Dashboard
      currentUser={this.props.currentUser}
      commonSymptoms={this.props.commonSymptoms}
      addSelectedSymptoms={this.addSelectedSymptoms}/>)
  }
}

DashboardPage.propTypes = {
  currentUser: PropTypes.object.isRequired,
  commonSymptoms: PropTypes.array.isRequired,
  fetchCurrentUser: PropTypes.func.isRequired,
  fetchCommonSymptoms: PropTypes.func.isRequired,
  createUserSymptoms: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    commonSymptoms: state.commonSymptoms
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     fetchCurrentUser: ()
//     // createUserSymptoms: (symptomList) => {dispatch(createUserSymptoms(symptomList))}
//   }
// }

export default connect(mapStateToProps, { fetchCurrentUser, fetchCommonSymptoms, createUserSymptoms })(DashboardPage);




// getSymptomIdByName(symptomName) {
//   for (let i = 0; i < this.props.commonSymptoms.length; ++i) {
//     if (this.props.commonSymptoms[i].name === symptomName) {
//       return this.props.commonSymptoms[i]._id
//     }
//   }
//   return null
// }
//
// createUserSymptomObj(symptomName) {
//   var obj = {};
//   obj.name = symptomName;
//   obj.severity = 0;
//   obj._id = this.getSymptomIdByName(symptomName);
//   return obj;
// }
//
// addSelectedSymptoms(symptomNames) {
//   const userSymptomsList = symptomNames.map(this.createUserSymptomObj);
//   console.log(userSymptomsList)
//   this.props.createUserSymptoms(symptomNames)
// }
