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
			React.createElement("button", {onClick: this.onClickHandler}, "+")
		);
	}

});

var SubtractButtons = React.createClass({displayName: "SubtractButtons",

	onClickhandler: function(e) {
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
		return React.createElement(AddButtons, {onClick: this.onAdd})
	},

	subtract: function() {
		return React.createElement(SubtractButtons, {onClick: this.onSubtract})
	},

	onAdd: function() {
		this.setState({
			count: this.state.count + 1,
		});
	},

	onSubtract: function() {
		this.setState({
			count: this.state.count -1,
		});
	},

	getInitialState: function() {
		return {
			count: 10,
		};
	},

	render: function() {
		return React.createElement("div", null, this.state.count)
	}
});

React.render(React.createElement(Counter, null), document.getElementById('container'));