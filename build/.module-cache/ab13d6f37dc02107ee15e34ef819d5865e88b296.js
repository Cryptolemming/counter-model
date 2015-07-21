/** @jsx React.DOM */

'use strict';

var AddButtons = React.createClass({displayName: "AddButtons",
	render: function() {
		return React.createElement("button", {className: "add-button", onClick: this.props.onClick}, "+")
	}
});

var SubtractButtons = React.createClass({displayName: "SubtractButtons",
	render: function() {
		return React.createElement("button", {className: "subtract-button", onClick: this.props.onClick}, "-")
	}
});

var Refresh = React.createClass({displayName: "Refresh",
	render: function() {
		return React.createElement("button", {className: "start-button", onClick: this.props.onClick, style: styling}, React.createElement("i", {className: "fa fa-refresh"}))
	}
});

var Counter = React.createClass({displayName: "Counter",

	onRefresh: function() {
		this.setState({
			count: 10,
		})
	},

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
		return React.createElement("div", null, 
			   	React.createElement("div", {className: "count"}, this.state.count), 
			   	React.createElement(AddButtons, {onClick: this.onAdd}), 
			   	React.createElement(SubtractButtons, {onClick: this.onSubtract}), 
			   	React.createElement("div", {className: "refresh"}, React.createElement(Refresh, {onClick: this.onRefresh}))
			   )
	}
});

React.render(React.createElement(Counter, null), document.getElementById('container'));