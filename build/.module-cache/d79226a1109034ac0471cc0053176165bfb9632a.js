/** @jsx React.DOM */

'use strict';

var Hello = React.createClass({displayName: "Hello",
	render: function() {
		return (
			React.createElement("p", null, "Hello world")
		)
	}
});

React.render(React.createElement(Hello, null), document.getElementById('container'));

var AddButtons = React.createClass({displayName: "AddButtons",

	onClickhandler: function(e) {
		return this.props.onClick()
	},

	render: function() {
		return (
			React.createElement("button", {onClick: this.onClickHandler}, "add")
		);
	}

});

var SubtractButtons = React.createClass({displayName: "SubtractButtons",

});

var Counter = React.createClass({displayName: "Counter",

	onAdd: function() {
		return React.createElement(AddButtons, {onClick: this.onAdd})
	},

	onSubtract: function() {

	},

	add: function() {
		this.setState({
			count: this.state.count + 1,
		});
	},

	subtract: function() {
		this.setState({
			count: this.state.count -1,
		});
	},

	getInitialState: function() {
		return {
			count: 10,
		};
	}

});

React.render(React.createElement(Counter, null), document.getElementById('container'));