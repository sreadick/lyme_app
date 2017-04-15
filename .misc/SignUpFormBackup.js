import React, { Component } from 'react';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="container register-form">
        <div className="row">
            <div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
        		<form role="form" action="/" onSubmit={this.props.onSubmit}>
        			<h2>Create An Account</h2>
        			<div className="row">
        				<div className="col-xs-12 col-sm-6 col-md-6">
        					<div className="form-group">
                    <input type="text" name="first_name" id="first_name" className="form-control input-lg" placeholder="First Name" onChange={this.props.onChange} />
        					</div>
        				</div>
        				<div className="col-xs-12 col-sm-6 col-md-6">
        					<div className="form-group">
        						<input type="text" name="last_name" id="last_name" className="form-control input-lg" placeholder="Last Name" onChange={this.props.onChange} />
        					</div>
        				</div>
        			</div>
        			<div className="form-group">
        				<input type="text" name="username" id="username" className="form-control input-lg" placeholder="Display Name" onChange={this.props.onChange} />
        			</div>
        			<div className="form-group">
        				<input type="email" name="email" id="email" className="form-control input-lg" placeholder="Email Address" onChange={this.props.onChange} />
        			</div>
        			<div className="row">
        				<div className="col-xs-12 col-sm-6 col-md-6">
        					<div className="form-group">
        						<input type="password" name="password" id="password" className="form-control input-lg" placeholder="Password" onChange={this.props.onChange} />
        					</div>
        				</div>
        				<div className="col-xs-12 col-sm-6 col-md-6">
        					<div className="form-group">
        						<input type="password" name="password_confirmation" id="password_confirmation" className="form-control input-lg" placeholder="Confirm Password" onChange={this.props.onChange} />
        					</div>
        				</div>
        			</div>
        			<div className="row">
        				<div className="col-xs-12 col-md-12">
        				  <input type="submit" value="Register" className="btn btn-primary btn-block btn-lg" />
        				</div>
        			</div>
        		</form>
        	</div>
        </div>
      </div>
    )
  }
};

SignUpForm.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
};

export default SignUpForm
