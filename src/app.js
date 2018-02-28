import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/list'
import UserInput from "./components/userInput";


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userText: '',
			items:[]
		}
		this.onSubmit = this.onSubmit.bind(this)
		this.onChange = this.onChange.bind(this)
		this.delete = this.delete.bind(this)
	}

	onChange(event) {
		this.setState({userText: event.target.value});
	}

	onSubmit(event) {
		this.setState({
			userText: '',
			items: [...this.state.items, this.state.userText]
		})

	}

	delete(index){
		let itemsArr = this.state.items
		itemsArr.splice(index, 1)
		this.setState({
			items: itemsArr
		})
		console.log(this.state.items);
	}




	render(){
		console.log(this.state.items);
		return (
			<div className='todo-list-wrapper'>
				<UserInput onSubmit = {this.onSubmit}
						   value={this.state.userText}
						   onChange={this.onChange} />

				<List items={this.state.items}
					  delete={this.delete}/>

			</div>

		);
	}
}

const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(<App />, MOUNT_NODE);
