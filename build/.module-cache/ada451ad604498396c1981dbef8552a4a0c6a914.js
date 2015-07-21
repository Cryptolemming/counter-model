/** @jsx React.DOM */

'use strict';

var AddButtons = React.createClass({displayName: "AddButtons",
	onClickHandler: function(evt) {
		return React.createElement("div", null, "2343242")
	},
	render: function() {
		return React.createElement("button", {className: "add-button", onClick: this.props.onClickHandler}, "+")
	}
});

var SubtractButtons = React.createClass({displayName: "SubtractButtons",
	render: function() {
		return React.createElement("button", {className: "subtract-button", onClick: this.props.onClick}, "-")
	}
});

var Counter = React.createClass({displayName: "Counter",

	onAdd: function(evt) {
		this.setState({
			count: this.state.count++,
		})
	},

	onSubtract: function(evt) {
		this.setState({
			count: this.state.count--,
		})
	},

	addCreation: function() {
		return React.createElement(AddButtons, {onClick: this.onAdd});
	},

	getInitialState: function() {
		return {
			count: 10,
			add: this.addCreation(),
		};
	},

	render: function() {
		return React.createElement("div", null, 
			   	React.createElement("div", {className: "count"}, this.state.count), 
			   	React.createElement(AddButtons, null), 
			   	React.createElement(SubtractButtons, {onClick: this.onSubtract})
			   )
	}
});

React.render(React.createElement(Counter, null), document.getElementById('container'));