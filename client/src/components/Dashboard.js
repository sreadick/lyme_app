import React, { PropTypes } from 'react';
import { Dropdown, Button, Checkbox } from 'semantic-ui-react';
import UserSymptomsPage from '../containers/UserSymptomsPage'
import AddSymptomsPage from '../containers/AddSymptomsPage'
// {this.props.currentUser.symptoms.length === 0 ? <AddSymptomsPage /> : <UserSymptomsPage />}
class Dashboard extends React.Component {

  render() {
    return (
      <div>
        <h1>Welcome {this.props.currentUser.name}</h1>
        <AddSymptomsPage />
      </div>
    )
  }
}

Dashboard.propTypes = {
  currentUser: PropTypes.object.isRequired
};

export default Dashboard;

// <Dropdown placeholder="dropdown" fluid multiple search selection options={commonSymptomList} ref="symptom_list"/>
// <Button inverted color="violet" onClick={() => this.props.addSelectedSymptoms(this.refs.symptom_list.state.value)}>Add Symptoms</Button>
// const commonSymptomList = (
//   this.props.commonSymptoms.map((symptom) => {
//     return {
//       key: symptom._id,
//       text: symptom.name,
//       value: symptom.name,
//       data: symptom
//     }
//   })
// );
