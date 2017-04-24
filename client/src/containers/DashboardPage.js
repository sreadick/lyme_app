import React, { PropTypes } from 'react';
import Auth from '../modules/Auth';
import Dashboard from '../components/Dashboard';
import { connect } from 'react-redux';
import { fetchCurrentUser } from '../actions'

class DashboardPage extends React.Component {

  componentWillMount() {
    this.props.fetchCurrentUser();
  }

  render() {
    return (<Dashboard currentUser={this.props.currentUser} />)
  }
}

DashboardPage.propTypes = {
  currentUser: PropTypes.object.isRequired,
  fetchCurrentUser: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, { fetchCurrentUser })(DashboardPage);

// addSelectedSymptoms(symptomNames) {
//   let id = 0;
//   const userSymptomsList = symptomNames.map(symptomName => {
//     id++;
//     return {
//       name: symptomName,
//       severity: 0,
//       id: id
//     }
//   });
//   this.props.createUserSymptoms(userSymptomsList)
// }
