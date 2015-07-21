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

var CardOne = React.createClass({displayName: "CardOne",
	render: function() {
		return React.createElement("button", {className: "card-button", onClick: this.props.onClick}, "A")
	}
});

var CardTwo = React.createClass({displayName: "CardTwo",
	render: function() {
		return React.createElement("button", {className: "card-button", onClick: this.props.onClick}, "B")
	}
});

var CardThree = React.createClass({displayName: "CardThree",
	render: function() {
		return React.createElement("button", {className: "card-button", onClick: this.props.onClick}, "C")
	}
});

var Refresh = React.createClass({displayName: "Refresh",
	render: function() {
		return React.createElement("button", {className: "start-button", onClick: this.props.onClick}, React.createElement("i", {className: "fa fa-refresh"}))
	}
});

var Counter = React.createClass({displayName: "Counter",

	cardButtonStyling: function(flipped) {
		if (flipped) {
			return {
				background: '#444',
			};
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

	onRefresh: function() {
		var cards = ['A', 'B', 'C'];
		var played = [false, false, false];
		return {
			count: 10,
			cards: cards,
			played: played,
		};
	},

	getInitialState: function() {
		var cards = ['A', 'B', 'C'];
		var played = [false, false, false];
		return {
			count: 10,
			cards: cards,
			played: played,
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