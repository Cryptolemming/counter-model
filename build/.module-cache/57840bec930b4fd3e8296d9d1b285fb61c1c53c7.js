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

	getInitialState: function() {
		return {
			count: 10,
		};
	}

});

React.render(React.createElement(Counter, null), document.getElementById('container'));