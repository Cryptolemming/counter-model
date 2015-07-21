/** @jsx React.DOM */

'use strict';

var AddButtons = React.createClass({displayName: "AddButtons",

	onClickhandler: function() {
		return this.props.onClick()
	},

	render: function() {
		return (
			React.createElement("button", {onClick: this.onClickHandler}, "+")
		);
	}

});

var SubtractButtons = React.createClass({displayName: "SubtractButtons",

	onClickhandler: function() {
		return this.props.onClick()
	},

	render: function() {
		return (
			React.createElement("button", {onClick: this.onClickHandler}, "-")
		);
	}

});

var Counter = React.createClass({displayName: "Counter",

	add: function() {
		this.setState({
			count: this.state.count++,
		});
	},

	subtract: function() {
		this.setState({
			count: this.state.count--,
		});
	},

	getInitialState: function() {
		return {
			count: 10,
		};
	},

	render: function() {
		return React.createElement("div", null, 
			   	this.state.count, 
			   	React.createElement(AddButtons, {onClick: this.add}), 
			   	React.createElement(SubtractButtons, {onClick: this.subtract})
			   )
	}
});

React.render(React.createElement(Counter, null), document.getElementById('container'));