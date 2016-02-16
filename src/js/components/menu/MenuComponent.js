import styles from './MenuComponent.css';
import React, {Component} from 'react';

var MenuComponent = React.createClass({
	getInitialState:function(){
		return {};
	},
	render:function(){
		var self = this;
		var navsTop = this.props.navs['navbar-top'];
		var navsBottom = this.props.navs['navbar-bottom'];
		return (
			<div className="navbar">
				<ul className="top-bar">
					{
						navsTop.map(function(nav, index){
							var style = '';
							var iconcss = nav.iconcss;
							var url = nav.url;
							var text = nav.text;
							var nowcss = nav.nowcss;
							return <li><a href={url} className={nowcss}><i className={iconcss}></i>{text}</a></li>
						})
					}
				</ul>
				<ul className="bottom-bar">
					{
						navsBottom.map(function(nav, index){
							var style = '';
							var iconcss = nav.iconcss;
							var url = nav.url;
							var text = nav.text;
							return (
							<li>
								<a href={url}>
									<i className={iconcss}></i>
									<div className="arrow-left"></div>
									<span className='title'>{text}</span>
								</a>
							</li>
							)
						})
					}
				</ul>
			</div>
		)
	}
});
export default MenuComponent;