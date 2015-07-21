/** @jsx React.DOM */

'use strict';

var AddButtons = React.createClass({displayName: "AddButtons",
	onClickHandler: function(evt) {
		return this.props.onClick()
	},
	render: function() {
		return (
			React.createElement("button", {className: "add-button", onClick: this.props.onClickHandler}, "+")
		);
	}
});

var SubtractButtons = React.createClass({displayName: "SubtractButtons",
	render: function() {
		return (
			React.createElement("button", {className: "subtract-button", onClick: this.props.onClick}, "-")
		);
	}
});

var Counter = React.createClass({displayName: "Counter",

	add: function(evt) {
		this.setState({
			count: this.state.count++
		})
	},

	subtract: function(evt) {
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
		return React.createElement("div", null, 
			   	React.createElement("div", {className: "count"}, this.state.count), 
			   	React.createElement(AddButtons, {onClick: this.add}), 
			   	React.createElement(SubtractButtons, {onClick: this.subtract})
			   )
	}
});

React.render(React.createElement(Counter, null), document.getElementById('container'));