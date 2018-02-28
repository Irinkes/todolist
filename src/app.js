import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/list'
import UserInput from "./components/userInput";
// import UserInput from './components/userInput'

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userText: '',
			items:[]
		}
		this.onSubmit = this.onSubmit.bind(this)
		this.onChange = this.onChange.bind(this)
		this.onDelete = this.onDelete.bind(this)
	}

	onChange(event) {
		this.setState({userText: event.target.value});
	}

	onSubmit(event) {
		event.preventDefault()
		this.setState({
			userText: '',
			items: [...this.state.items, this.state.userText]
		})

		console.log(this.state.items);

	}

	onDelete(index){
		let itemsArr = this.state.items
		itemsArr = itemsArr.splice(index, 1)
		console.log(itemsArr);
		this.setState({
			items: itemsArr
		})
	}




	render(){
		return (
			<div>
				<UserInput onSubmit = {this.onSubmit}
						   value={this.state.userText}
						   onChange={this.onChange} />

				<List items={this.state.items}
					  onDelete={this.onDelete}/>

			</div>

		);
	}
}

const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(<App />, MOUNT_NODE);
