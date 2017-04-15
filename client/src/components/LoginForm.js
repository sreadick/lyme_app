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
          		<form action="/" onSubmit={this.props.onSubmit}>
          			<h2>Sign In</h2>

                {this.props.successMessage && <p className="successMessage">{this.props.successMessage}</p>}
                {this.props.errors.summary && <p className="error-message">{this.props.errors.summary}</p>}

                <div className="row">
          				<div className="col-xs-12">
                    <div className="form-group">
          		        <input type="email" name="email" id="email" className="form-control input-lg" placeholder="email" onChange={this.props.onChange} />
          			    </div>
                  </div>
                </div>
                <div className="row">
          				<div className="col-xs-12">
                    <div className="form-group">
                      <input type="password" name="password" id="password" className="form-control input-lg" placeholder="password" onChange={this.props.onChange} />
                    </div>
                  </div>
                </div>
                <div className="row">
          				<div className="col-xs-12">
          				  <input type="submit" value="Sign In" className="btn btn-success  btn-block btn-lg" />
          				</div>
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
  successMessage: React.PropTypes.string.isRequired,
  user: React.PropTypes.object.isRequired
};

export default LoginForm
