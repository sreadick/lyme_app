import React, { PropTypes } from 'react';
import { Dropdown, Button } from 'semantic-ui-react';
import SymptomsList from './SymptomsList'

class Dashboard extends React.Component {

  render() {
    const commonSymptomList = (
      this.props.commonSymptoms.map((symptom) => {
        return {
          key: symptom._id,
          text: symptom.name,
          value: symptom.name,
          data: symptom
        }
      })
    );

    return (
      <div>
        <h1>Welcome {this.props.currentUser.name}</h1>
        <h3>Add Symptoms:</h3>
        <Dropdown placeholder="dropdown" fluid multiple search selection options={commonSymptomList} ref="symptom_list"/>
        <Button inverted color="violet" onClick={() => this.props.addSelectedSymptoms(this.refs.symptom_list.state.value)}>Add Symptoms</Button>
        <SymptomsList />
      </div>
    )
  }
}

Dashboard.propTypes = {
  currentUser: PropTypes.object.isRequired,
  commonSymptoms: PropTypes.array.isRequired,
  addSelectedSymptoms: PropTypes.func.isRequired
};

export default Dashboard;
