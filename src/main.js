/** @jsx React.DOM */

'use strict';

var AddButtons = React.createClass({
	onClickHandler: function(evt) {
		return this.props.onClick()
	},
	render: function() {
		return (
			<button className='add-button' onClick={this.props.onClickHandler}>+</button>
		);
	}
});

var SubtractButtons = React.createClass({
	render: function() {
		return (
			<button className='subtract-button' onClick={this.props.onClick}>-</button>
		);
	}
});

var Counter = React.createClass({

	onAdd: function(evt) {
		this.setState({
			count: this.state.count++
		})
	},

	onSubtract: function(evt) {
		this.setState({
			count: this.state.count--
		})
	},

	getInitialState: function() {
		return {
			count: 10
		};
	},

	render: function() {
		return <div>
			   	<div className='count'>{this.state.count}</div>
			   	<AddButtons  onClick={this.onAdd} />
			   	<SubtractButtons onClick={this.onSubtract} />
			   </div>
	}
});

React.render(<Counter />, document.getElementById('container'));