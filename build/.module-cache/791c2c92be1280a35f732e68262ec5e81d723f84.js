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

});

var SubtractButtons = React.createClass({displayName: "SubtractButtons",

});

var Counter = React.createClass({displayName: "Counter",

});

React.render(React.createElement(Counter, null), document.getElementById('container'));