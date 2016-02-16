import './LoginComponent.css';
import React from 'react';
import InputComponent from '../InputComponent/InputComponent';

var FormComponent = React.createClass({
	getInitialState: function() {
    return {
    	pwdVaule:"输入密码",
    	emailValue:"电子邮件",
    	emailError:""
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
	callbackEmailChange:function(newValue,state){
		var isRight = false;
		if(state == 1){
			var error = '';
	    if(!(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(newValue))) {
	      error = '请输入正确的Email';
	    }
	    isRight = true;
	    this.setState({
	    	emailError: error,
	    	isRight: true
	    });
		}else{
			if(this.state.isRight){
				alert(1);
			}else{
				alert(2);
			}
		}
	},
	onChildChange: function(newValue){
		this.setState({
			emailValue: newValue
		})
	},
	handleChange: function(event){
		this.setState({value: event.target.value});
	},
	render: function(){
		var divStyle = {clear:'both'};
		return (
			<form>
				<div className="input-prepend">
					<span className="add-on">
						<i className="icon-user"></i>
					</span>
					<InputComponent value={this.state.emailValue} callbackParent={this.callbackEmailChange} />
					<span className="remind"> {this.state.emailError} </span>
				</div>
				<div className="input-prepend">
					<span className="add-on">
						<i className="icon-lock"></i>
					</span>
					<InputComponent value={this.state.pwdVaule} callbackParent={this.callBackPwdChange} />
				</div>
				<button className="login-btn" type="submit">
					<span>登录</span>
				</button>
				<div className="control-group">
					<div className="remberme">记住我</div>
					<div className="forgetme">忘记密码</div>
					<div style={divStyle}></div>
				</div>
			</form>
		)
	}
})

export default FormComponent;