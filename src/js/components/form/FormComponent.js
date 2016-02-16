import './FormComponent.css';
import React from 'react';
import LoginComponent from './LoginComponent/LoginComponent';
import RegComponent from './RegComponent/RegComponent';
import $ from 'jquery';

var FormComponent = React.createClass({
	getInitialState: function(){
		return {
			display:''
		};
	},
	componentDidMount:function(){
		var regNode = $(this.refs.regComponent.getDOMNode());
		regNode.addClass('hideorshow');
	},
	handleClick: function(event){
		var formNode = $(event.target.getDOMNode());
		var regNode = $(this.refs.regComponent.getDOMNode());
		var loginNode = $(this.refs.longinComponent.getDOMNode());
		if(!formNode.hasClass('active')){
			formNode.addClass('active');
			formNode.siblings('a').removeClass('active');
			if(formNode.html()=="注册"){
				regNode.removeClass('hideorshow');
				loginNode.addClass('hideorshow');
			}else{
				loginNode.removeClass('hideorshow');
				regNode.addClass('hideorshow');
			}
		}else{
			return;
		}
	},
	render: function(){
		var style = {};
		return (
			<div className="form-input">
				<h4 className="title">
					<span><a className="active" ref="login" onClick={this.handleClick}>登录</a><b>·</b><a className='aaa' ref="reg" onClick={this.handleClick}>注册</a></span>
				</h4>
				<LoginComponent ref='longinComponent' />
				<RegComponent ref='regComponent' />
			</div>
		)
	}
})

export default FormComponent;