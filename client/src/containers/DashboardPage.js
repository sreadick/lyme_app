import React from 'react';
import PropTypes from 'prop-types';
import Auth from '../modules/Auth';
import Dashboard from '../components/Dashboard';
import { connect } from 'react-redux';
import { fetchUserInfo } from '../actions'

class DashboardPage extends React.Component {

  componentWillMount() {
    this.props.fetchUserInfo();
  }

  render() {
    return (
      <div>
        {this.props.currentUser && !this.props.isFetching && <Dashboard currentUser={this.props.currentUser} userSymptoms={this.props.userSymptoms} />}
      </div>
    )
  }
}

DashboardPage.propTypes = {
  currentUser: PropTypes.object,
  userSymptoms: PropTypes.object,
  isFetching: PropTypes.bool.isRequired,
  fetchUserInfo: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    currentUser: state.user.currentUser,
    userSymptoms: state.userSymptoms,
    isFetching: state.user.isFetching
  }
}

export default connect(mapStateToProps, { fetchUserInfo })(DashboardPage);

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
