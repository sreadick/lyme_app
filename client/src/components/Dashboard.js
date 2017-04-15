import React from 'react';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p>
        You should only see this if you have been authenticated.
        {this.props.secretData}
      </p>
    )
  }
}

Dashboard.propTypes = {
  secretData: React.PropTypes.string.isRequired
};


export default Dashboard;
