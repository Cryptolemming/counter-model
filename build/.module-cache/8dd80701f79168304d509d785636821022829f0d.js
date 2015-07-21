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
		var styling = this.props.styling(this.props.counterActive);
		return React.createElement("li", {className: "refresh"}, React.createElement("button", {className: "start-button", onClick: this.props.onClick, style: styling}, React.createElement("i", {className: "fa fa-refresh"})))
	}
});

var Counter = React.createClass({displayName: "Counter",

	counterActiveStyling: function(counterActive) {
		counterActive = this.state.counterActive;
		if (counterActive) {
			return {
				opacity: '1',
				color: '#ffff00',
			}
		}
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
			counterActive: false,
		};
	},

	render: function() {
		return React.createElement("div", null, 
			   	React.createElement("div", {className: "count"}, this.state.count), 
			   	React.createElement(AddButtons, {onClick: this.onAdd}), 
			   	React.createElement(SubtractButtons, {onClick: this.onSubtract})
			   )
	}
});

React.render(React.createElement(Counter, null), document.getElementById('container'));