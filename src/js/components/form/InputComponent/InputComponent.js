import './InputComponent.css';
import React from 'react';

var InputComponent = React.createClass({
	handleChange:function(event){
		var state = 1;
		var newValue = event.target.value;
		this.setState({
			value: newValue
		});
		//子组件向父组件传值
		this.props.callbackParent(newValue,state);
	},
	lostBlur:function(event){
		var state = 2;
		var newValue = event.target.value;
		this.props.callbackParent(newValue,state);
	},
	render:function(){
		return (
			<input type="text" placeholder={this.props.value} onChange={this.handleChange} onBlur={this.lostBlur} />
		)
	}
})

export default InputComponent;