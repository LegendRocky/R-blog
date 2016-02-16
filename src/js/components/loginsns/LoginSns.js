import './LoginSns.css'
import React from 'react';
import loginsns from '../../data/loginsns.js';

var LoginSns = React.createClass({
	render:function(){
		return(
			<div className="login-sns">
				<p>您还可以使用以下方式登录</p>
				<ul>
				{
					loginsns.map(function(sns, index){
						var liclass = sns.liclass;
						var iclass = sns.iclass;
						var url = sns.url;
						return(
							<li className={liclass}><a href={url}><i className={iclass}></i></a></li>
						)
					})
				}
				</ul>
			</div>
		)
	}
})

export default LoginSns;