/** @jsx React.DOM */

'use strict';

var AddButtons = React.createClass({
	render: function() {
		return <button className='add-button' onClick={this.props.onClick}>+</button>
	}
});

var SubtractButtons = React.createClass({
	render: function() {
		return <button className='subtract-button' onClick={this.props.onClick}>-</button>
	}
});

var Counter = React.createClass({

	onAdd: function() {
		this.setState({
			count: this.state.count+=1,
		})
	},

	onSubtract: function() {
		this.setState({
			count: this.state.count-=1,
		})
	},

	getInitialState: function() {
		return {
			count: 10,
		};
	},

	render: function() {
		return <div>
			   	<div className='count'>{this.state.count}</div>
			   	<AddButtons onClick={this.onAdd} />
			   	<SubtractButtons onClick={this.onSubtract} />
			   </div>
	}
});

React.render(<Counter />, document.getElementById('container'));