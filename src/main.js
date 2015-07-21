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

var SubtractControls = React.createClass({
	onClickhandler: function(evt) {
		return this.props.onClick(this.props.buttonIndex)
	},
	render: function() {
		return <li className='counter-button subtract-counter-button' onClick={this.onClickhandler}>{this.props.buttonInt}</li>
	}
});

var AddControls = React.createClass({
	onClickhandler: function(evt) {
		return this.props.onClick(this.props.buttonIndex)
	},
	render: function() {
		return <li className='counter-button add-counter-button' onClick={this.onClickhandler}>{this.props.buttonInt}</li>
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

	onAdd: function(buttonIndex) {
		var currentCount = this.state.count;
		var buttonInts = this.state.buttonInts;
		var value = buttonInts[buttonIndex];
		var newCount = currentCount += value;
		this.setState({
			count: newCount,
		})
	},

	onSubtract: function(buttonIndex) {
		var currentCount = this.state.count;
		var buttonInts = this.state.buttonInts;
		var value = buttonInts[buttonIndex];
		var newCount = currentCount -= value;
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
			return <Card key={i} onClick={self.onCardPlay} styling={self.cardListStyling} card={card} played={played[i]} cardIndex={i} />;
		});
	},

	subtractButtonListCreation: function(buttonInts) {
		buttonInts = buttonInts || this.state.buttonInts;
		var self = this;
		return buttonInts.map(function (buttonInt, i) {
			return <SubtractControls key={i} onClick={self.onSubtract} buttonInt={buttonInt} buttonIndex={i} />;
		});
	},

	addButtonListCreation: function(buttonInts) {
		buttonInts = buttonInts || this.state.buttonInts;
		var self = this;
		return buttonInts.map(function (buttonInt, i) {
			return <AddControls key={i} onClick={self.onAdd} buttonInt={buttonInt} buttonIndex={i} />;
		});
	},

	onRefresh: function() {
		this.setState({
			count: 10,
		});
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
			subtractButtonList: this.subtractButtonListCreation(buttonInts),
			addButtonList: this.addButtonListCreation(buttonInts),
			cardList: this.cardListCreation(cards, played),
		};
	},

	render: function() {
		return <div>
			   	<div className='count'>{this.state.count}</div>
			   	<div className='list-container'>
	   			  	<ul className='button-list'>
				   		{this.state.subtractButtonList}
				   	</ul>
				</div>
				<div className='list-container'>
				   	<ul className='button-list'>
				   		{this.state.addButtonList}
				   	</ul>
				</div>

				<div className='refresh'><Refresh onClick={this.onRefresh} /></div>
			   </div>
	}
});

React.render(<Counter />, document.getElementById('container'));