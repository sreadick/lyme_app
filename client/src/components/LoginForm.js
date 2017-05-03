import React, { Component } from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="login_container">
        <div className="ui middle aligned center aligned grid">
          <div className="column">
        		<form className="ui large form" action="/" onSubmit={this.props.onSubmit}>
        			<h2>Sign In</h2>
              {this.props.successMessage && <p className="successMessage">{this.props.successMessage}</p>}
              {this.props.errors.message && <p className="error-message">{this.props.errors.message}</p>}
              <div className="field">
      	        <input type="email" name="email" className="ui input" placeholder="Email" onChange={this.props.onChange} />
      		    </div>
              <div className="field">
                <input type="password" name="password" className="ui input" placeholder="Password" onChange={this.props.onChange} />
              </div>
        			<div className="field">
        			  <button className="ui fluid large teal submit button">Sign In!</button>
        			</div>
      	   </form>
         </div>
       </div>
     </div>
    );
  }
}

LoginForm.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  errors: React.PropTypes.object.isRequired,
  successMessage: React.PropTypes.string.isRequired
};

export default LoginForm
