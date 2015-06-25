import React from 'react'
import Vent from './Vent'
import KEYS from './KEYS'

var ContactPicker = React.createClass({
	render() {
		return (
			<div>
				<h3>Pick Contact:</h3>
				<p>{this.state.currentContact}</p>
			</div>
		)
	},

	componentDidMount() {
		Vent.onKeyPressed(this.keyPressed)
	},
	componentWillUnmount() {
		Vent.offKeyPressed(this.keyPressed)
	},

	keyPressed(key) {
		if (key === KEYS.CLEAR) {
			Vent.exit()
		}
		else if (key === KEYS.ENTER) {
			this.enter()
		}
		else if (key === KEYS.UP) {
			this.up()
		}
		else if (key === KEYS.DOWN) {
			this.down()
		}
	},

	enter() {
		Vent.crapChatContactPicked(this.state.currentContact)
	},

	getInitialState() {
		return {
			currentContact: '(None)',
			contacts: [
				'(None)', 'Dan Harper', 'Robb Lewis', 'Ed Poole', 'Ali Smith', 'Jimmy Saville', '(ALL CONTACTS)'
			]
		}
	},

	// COPY PASTE FROM MENUAPP; fuck it, hack day
	up() {
		var nextContactIndex = this.currentContactIndex() + 1;

		this.setState({
			currentContact: this.state.contacts[nextContactIndex] || this.state.contacts[0]
		})
	},
	down() {
		var prevContactIndex = this.currentContactIndex() - 1;

		this.setState({
			currentContact: this.state.contacts[prevContactIndex] || this.state.contacts[this.state.contacts.length - 1]
		})
	},
	currentContactIndex() {
		return this.state.contacts.indexOf(this.state.currentContact)
	}
})

var Drawer = React.createClass({
	getInitialState() {
		return {
			selected: [0, 0],
			image: [
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			]
		}
	},
	componentDidMount() {
		Vent.onKeyPressed(this.keyPressed)
	},
	componentWillUnmount() {
		Vent.offKeyPressed(this.keyPressed)
	},

	keyPressed(key) {
		if (key === KEYS.CLEAR) {
			Vent.exit()
		}
		else if (key === KEYS.ENTER) {
			this.send()
		}
		else if (key === '2') {
			this.up()
		}
		else if (key === '8') {
			this.down()
		}
		else if (key === '4') {
			this.left()
		}
		else if (key === '6') {
			this.right()
		}
		else if (key === '5') {
			this.toggle()
		}
	},
	up() {
		let [x, y] = this.state.selected
		if (x > 0) x--
		this.setState({ selected: [x, y] })
	},
	down() {
		let [x, y] = this.state.selected
		if (x < 40) x++
		this.setState({ selected: [x, y] })
	},
	left() {
		let [x, y] = this.state.selected
		if (y > 0) y--
		this.setState({ selected: [x, y] })
	},
	right() {
		let [x, y] = this.state.selected
		if (y < 40) y++
		this.setState({ selected: [x, y] })
	},
	toggle() {
		console.log('x', this.state.selected)
		let image = this.state.image
		let [x, y] = this.state.selected
		image[x][y] = 1

		if (x === 39 && y === 39) {
			y = x = 0
		}
		else if (y === 39) {
			y = 0
			x = x + 1
		}
		else {
			y = y + 1
		}

		this.setState({
			image,
			selected: [x, y]
		})
	},
	send() {
		alert('Your naughty snap is on it\'s way!')
		alert('You filthy so-and-so ;)')
	},
	render() {
		return (
			<table className="crapchat__image">
				<tbody>
					{ this.state.image.map(this.renderRow) }
				</tbody>
			</table>
		)
	},
	renderRow(row, rowI) {
		return (
		<tr key={'row'+rowI}>
			{row.map(this.renderCol(rowI))}
		</tr>
		)
	},
	renderCol(rowI) {
		return (col, colI) => {
			return (
			<td key={'col'+colI} className={this.colClass(col, rowI, colI)}></td>
			)
		}
	},
	colClass(col, rowI, colI) {
		if (rowI === this.state.selected[0] && colI === this.state.selected[1]) {
			return 'highlighted'
		}
		else {
			return col === 0 ? 'off' : 'on'
		}
	}
})

export default React.createClass({
	getInitialState() {
		return {
			screen: <ContactPicker />
		}
	},
	componentDidMount() {
		Vent.onCrapChatContactPicked(this.contactPicked)
	},
	componentWillUnmount() {
		Vent.offCrapChatContactPicked(this.contactPicked)
	},
	render() {
		return this.state.screen
	},
	contactPicked() {
		this.setState({
			screen: <Drawer />
		})
	}
})

