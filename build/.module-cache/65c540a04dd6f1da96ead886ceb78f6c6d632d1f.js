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
	onClickhandler: function(evt) {
		return this.props.onClick(this.props.cardIndex)
	},
	render: function() {
		var styling = this.props.styling(this.props.played);
		return React.createElement("li", {className: "card", onClick: this.onClickHandler, style: styling}, this.props.card)
	}
});

var SubtractControls = React.createClass({displayName: "SubtractControls",
	onClickhandler: function(evt) {
		return this.props.onClick(this.props.buttonInt)
	},
	render: function() {
		return React.createElement("button", {className: "counter-button", onClick: this.onClickHandler}, "4")
	}
});

var Refresh = React.createClass({displayName: "Refresh",
	render: function() {
		return React.createElement("li", {className: "refresh-button", onClick: this.props.onClick}, React.createElement("i", {className: "fa fa-refresh"}))
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

	onSubtract: function(buttonInt) {
		var currentCount = this.state.count;
		var value = 5;
		var newCount = currentCount-=5;
		this.setState({
			count: newCount,
		})
	},

	onCardPlay: function(cardIndex) {
		var currentStatePlayed = this.state.played;
		currentStatePlayed[cardIndex] = true;
		var updatedCardList = this.cardListCreation(this.state.cards, currentStatePlayed);

		this.setState({
			played: currentStatePlayed,
			cardList: updatedCardList,
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

	buttonListCreation: function(buttonInts) {
		buttonInts = buttonInts || this.state.buttonInts;
		var self = this;
		return buttonInts.map(function (buttonInt, i) {
			return React.createElement(SubtractControls, {key: i, onClick: self.onSubtract, buttonInt: buttonInt, buttonIndex: i});
		});
	},

	onRefresh: function() {
		var cards = ['A', 'B', 'C'];
		var played = [false, false, false];
		var buttonInts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		return {
			count: 10,
			buttonInts: buttonInts,
			cards: cards,
			played: played,
			buttonList: this.buttonListCreation(buttonInts),
			cardList: this.cardListCreation(cards, played),
		};
	},

	getInitialState: function() {
		var cards = ['A', 'B', 'C'];
		var played = [false, false, false];
		var buttonInts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		return {
			count: 10,
			buttonInts: buttonInts,
			cards: cards,
			played: played,
			buttonList: this.buttonListCreation(buttonInts),
			cardList: this.cardListCreation(cards, played),
		};
	},

	render: function() {
		return React.createElement("div", null, 
			   	React.createElement("div", {className: "count"}, this.state.count), 
			   	React.createElement(AddButtons, {onClick: this.onAdd}), 
			   	React.createElement("ul", {className: "button-list"}, 
			   		React.createElement(SubtractControls, {onClick: this.state.buttonList})
			   	), 

			   	React.createElement("div", {className: "refresh"}, React.createElement(Refresh, {onClick: this.onRefresh}))
			   )
	}
});

React.render(React.createElement(Counter, null), document.getElementById('container'));