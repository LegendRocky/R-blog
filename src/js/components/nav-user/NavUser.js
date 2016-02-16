import './NavUser.css';
import React from 'react';

var NavUser = React.createClass({
	render:function(){
		return (
			<div className="navbar-user">
				<a className="login">
					<i className="icon-enter"></i>
					<span>登录</span>
				</a>
				<a className="login">
					<i className="icon-user"></i>
					<span>注册</span>
				</a>
			</div>
		)
	}
})

export default NavUser;