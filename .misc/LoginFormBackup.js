import React, { Component } from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container login-form">
        <div className="row">
          <div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
        		 <form role="form" action="/" onSubmit={this.props.onSubmit}>
        			<h2>Sign In To Your Account</h2>
      				<div className="form-group">
                <input type="text" name="username" id="username" className="form-control input-lg" placeholder="Enter your user name" onChange={this.props.onChange} />
      				</div>
      				<div className="form-group">
      					<input type="password" name="password" id="password" className="form-control input-lg" placeholder="Passowrd" onChange={this.props.onChange} />
      				</div>
        			<div className="row">
        			  <div className="col-xs-12 col-md-12">
        				  <input type="submit" value="Sign In" className="btn btn-success btn-block btn-lg" />
        				</div>
        			</div>
        		</form>
        	</div>
        </div>
      </div>
    )
  }
};

LoginForm.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
};

export default LoginForm
