/** @jsx React.DOM */

'use strict';

var AddButtons = React.createClass({
	render: function() {
		return <button className='add-button' onClick={this.props.onClick}>+</button>
	}
});

var SubtractButtons = React.createClass({
	render: function() {
		return <button className='subtract-button' onClick={this.props.onClick}>-</button>
	}
});

var Card = React.createClass({
	onClickhandler: function(evt) {
		return this.props.onClick(this.props.cardIndex)
	},
	render: function() {
		var styling = this.props.styling(this.props.played);
		return <li className='card' onClick={this.onClickHandler} style={styling}>{this.props.card}</li>
	}
});

var Refresh = React.createClass({
	render: function() {
		return <button className='refresh-button' onClick={this.props.onClick}><i className='fa fa-refresh'></i></button>
	}
});

var Counter = React.createClass({

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
			return <Card key={i} onClick={self.onCardPlay} styling={self.cardListStyling} card={card} played={played[i]} cardIndex={i} />;
		});
	},

	onRefresh: function() {
		var cards = ['A', 'B', 'C'];
		var played = [false, true, false];
		this.setState({
			count: 10,
			cards: cards,
			played: played,
			cardList: this.cardListCreation(cards, played),
		})
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
		return <div>
			   	<div className='count'>{this.state.count}</div>
			   	<AddButtons onClick={this.onAdd} />
			   	<SubtractButtons onClick={this.onSubtract} />

			   	<div className='refresh'><Refresh onClick={this.onRefresh} /></div>
			   </div>
	}
});

React.render(<Counter />, document.getElementById('container'));