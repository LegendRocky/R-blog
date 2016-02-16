import React from 'react';

var Test = React.createClass({
	getInitialState: function(){
		return {
			hello:'hello world';
		}
	},
	handleChange:function(event){
		this.setState({
			hello:this.target.value
		})
	},
	render:function(){
		return (
			<input type="text" value={this.state.value} onChange={this.handleChange} />
		)
	}
})