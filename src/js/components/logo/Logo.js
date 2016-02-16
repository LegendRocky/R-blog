import './Logo.css';
import React from 'react';

var Logo = React.createClass({
	render:function(){
		return (
			<div className="logo">
				<div className="title">
					诉·说
				</div>
				<div className="detail">
					交流故事，沟通想法
				</div>
			</div>
		)
	}
})

export default Logo;