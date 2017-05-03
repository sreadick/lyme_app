import React, { Component } from 'react';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="register_container">
        <div className="ui middle aligned center aligned grid">
          <div className="column">
            <form className="ui large form" action="/" onSubmit={this.props.onSubmit}>
            	<h2>Create An Account</h2>
              {this.props.errors.summary && <p className="error-message">{this.props.errors.summary}</p>}
          		<div className="field">
                <input type="text" name="name" className="ui input" placeholder="Name" onChange={this.props.onChange} />
          		</div>
              <div className="field">
                <input type="email" name="email" className="ui input" placeholder="Email" onChange={this.props.onChange} />
              </div>
              <div className="field">
                <input type="password" name="password" className="ui input" placeholder="Password" onChange={this.props.onChange} />
              </div>
            	<div className="field">
            	  <button className="ui fluid large green submit button">Register</button>
            	</div>
            </form>
          </div>
       </div>
    </div>
    );
  }
}

SignUpForm.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  errors: React.PropTypes.object.isRequired,
  user: React.PropTypes.object.isRequired
};

export default SignUpForm
