import './RegComponent.css';
import React from 'react';
import InputComponent from '../InputComponent/InputComponent';

var FormComponent = React.createClass({
	getInitialState: function() {
    return {
    	pwdVaule:"输入密码",
    	rpwdValue:"重复密码",
    	emailValue:"电子邮件",
    	emailError:"",
    	nickName:"选一个昵称"
    };
  },
	handleEmail: function(event){
	 	var value = event.target.value;
    var error = '';
    if(!(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value))) {
      error = '请输入正确的Email';
    }
    this.setState({
      emailError: error,
    	emailValue: value
    });
	},
	callbackEmailChange:function(newValue){
		var error = '';
    if(!(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(newValue))) {
      error = '请输入正确的Email';
    }
    this.setState({
    	emailError: error
    });
	},
	onChildChange: function(newValue){
		this.setState({
			emailValue: newValue
		})
	},
	handleChange: function(event){
		this.setState({value: event.target.value});
	},
	callBackPwdChange: function(newValue){
		alert(newValue);
	},
	render: function(){
		return (
			<form>
				<div className="input-prepend">
					<span className="add-on">
						<i className="icon-mail"></i>
					</span>
					<InputComponent value={this.state.emailValue} callbackParent={this.callbackEmailChange} />
					<span className="remind"> {this.state.emailError} </span>
				</div>
				<div className="input-prepend">
					<span className="add-on">
						<i className="icon-user"></i>
					</span>
					<InputComponent value={this.state.nickName} />
					<span className="remind"> {this.state.emailError} </span>
				</div>
				<div className="input-prepend">
					<span className="add-on">
						<i className="icon-lock"></i>
					</span>
					<InputComponent value={this.state.pwdVaule} />
					<span className="remind"> {this.state.emailError} </span>
				</div>
				<div className="input-prepend">
					<span className="add-on">
						<i className="icon-lock"></i>
					</span>
					<InputComponent value={this.state.rpwdValue} />
				</div>
				<button className="reg-btn" type="submit">
					<span>注册</span>
				</button>
			</form>
		)
	}
})

export default FormComponent;