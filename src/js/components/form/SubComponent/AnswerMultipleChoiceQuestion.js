import AnswerRadioInput from './AnswerRadioInput';
import React from 'react';

var AnswerMultipleChoiceQuestion = React.createClass({
	propTypes:{
		value:React.PropTypes.string,
		choices:React.PropTypes.array.isRequired,
		onCompleted:React.PropTypes.func.isRequired
	},
	getInitialState:function(){
		return {
			id: uniqueId('multiple-choice-'),
			value: this.props.value
		}
	},
	renderChoices:function(){
		return this.props.choices.map(function(choice, i){
			return AnswerRadioInput({
				id: "choice-" + i,
				name: this.state.id,
				label: choice,
				value: choice,
				checked: this.state.value === choice
			})
		}.bind(this));
	},
	render:function(){
		return (
			<div className="form-group">
				<label className="survey-item-label" htmlFor={this.state.id}>
					{this.props.label}
				</label>
				<div className="survey-item-content">
					{this.renderChoices()}
				</div>
			</div>
		)
	}
})
export default AnswerMultipleChoiceQuestion;