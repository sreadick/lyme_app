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
          		<form action="/" onSubmit={this.props.onSubmit}>
          			<h2>Create An Account</h2>

                {this.props.errors.summary && <p className="error-message">{this.props.errors.summary}</p>}

          			<div className="row">
          				<div className="col-xs-12">
          					<div className="form-group">
                      <input type="text" name="name" id="name" className="form-control input-lg" placeholder="Name" onChange={this.props.onChange} />
          					</div>
          				</div>
          			</div>
                <div className="row">
          				<div className="col-xs-12">
                    <div className="form-group">
          		        <input type="email" name="email" id="email" className="form-control input-lg" placeholder="Email" onChange={this.props.onChange} />
          			    </div>
                  </div>
                </div>
                <div className="row">
          				<div className="col-xs-12">
                    <div className="form-group">
                      <input type="password" name="password" id="password" className="form-control input-lg" placeholder="Password" onChange={this.props.onChange} />
                    </div>
                  </div>
                </div>
                <div className="row">
          				<div className="col-xs-12">
          				  <input type="submit" value="Register" className="btn btn-primary btn-block btn-lg" />
          				</div>
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
