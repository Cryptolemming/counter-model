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

var Card = React.createClass({displayName: "Card",
	onClickhandler: function() {
		return this.props.onClick(this.props.cardIndex)
	},
	render: function() {
		var styling = this.props.styling(this.props.played);
		var index = this.props.cardIndex;
		return React.createElement("li", {className: "card", onClick: this.props.onClick(index), style: styling}, this.props.card)
	}
});

var Refresh = React.createClass({displayName: "Refresh",
	render: function() {
		return React.createElement("button", {className: "refresh-button", onClick: this.props.onClick}, React.createElement("i", {className: "fa fa-refresh"}))
	}
});

var Counter = React.createClass({displayName: "Counter",

	cardListStyling: function(played) {
		if (played) {
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

	onCardPlay: function(cardIndex) {
		var currentStatePlayed = this.state.played;
		currentStatePlayed[cardIndex] = true;

		this.setState({
			played: currentStatePlayed,
		})
	},

	cardListCreation: function(cards, played) {
		cards = cards || this.state.cards;
		played = played || this.state.played;
		var self = this;
		return cards.map(function (card, i) {
			return React.createElement(Card, {key: i, onClick: self.onCardPlay, styling: self.cardListStyling, card: card, played: played[i], cardIndex: i});
		});
	},

	onRefresh: function() {
		var cards = ['A', 'B', 'C'];
		var played = [false, false, false];
		return {
			count: 10,
			cards: cards,
			played: played,
			cardList: this.cardListCreation(cards, played),
		};
	},

	getInitialState: function() {
		var cards = ['A', 'B', 'C'];
		var played = [false, false, false];
		return {
			count: 10,
			cards: cards,
			played: played,
			cardList: this.cardListCreation(cards, played),
		};
	},

	render: function() {
		return React.createElement("div", null, 
			   	React.createElement("div", {className: "count"}, this.state.count), 
			   	React.createElement(AddButtons, {onClick: this.onAdd}), 
			   	React.createElement(SubtractButtons, {onClick: this.onSubtract}), 
			   	React.createElement("div", null, 
				   	React.createElement("ul", {className: "cards"}, 
				   		this.state.cardList
				   	)
				), 
			   	React.createElement("div", {className: "refresh"}, React.createElement(Refresh, {onClick: this.onRefresh}))
			   )
	}
});

React.render(React.createElement(Counter, null), document.getElementById('container'));