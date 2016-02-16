import React from 'react';

var AnswerRadioInput = React.createClass({
	//propTypes申明校验以确保接收的数据是合法的
	propTypes:{
		id: React.PropTypes.string,
		name: React.PropTypes.string.isRequired,
		label: React.PropTypes.string.isRequired,
		value: React.PropTypes.string.isRequired,
		checked: React.PropTypes.bool
	},
	//定义属性默认值，在每个实例中，如果父组件没有提供给他们数值，就使用默认值
	getDefaultProps:function(){
		return {
			id: null,
			checked: false
		}
	},
	//定义组件的状态
	getInitialState:function(){
		var id = this.props.id ? this.props.id : uniqueId('radio-');
		return {
			checked: !!this.props.checked,
			id: id,
			name: id
		}
	},
	render:function(){
		return (
			<div className="radio">
				<label htmlFor={this.props.id}>
					<input type="radio"
						name={this.props.name}
						id={this.props.id}
						value={this.props.value}
						checked={this.props.checked}
					 />
					{this.props.label}
				</label>
			</div>
		)
	}
})
export default AnswerRadioInput;