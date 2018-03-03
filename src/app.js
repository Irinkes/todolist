import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List'
import UserInput from "./components/UserInput";



class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userText: '',
			items: []
		}
		this.onSubmit = this.onSubmit.bind(this)
		this.onChange = this.onChange.bind(this)
		this.onDelete = this.onDelete.bind(this)
	}

	onChange(item,index) {
		const items = this.state.items.slice();
		items[index] = item;
		this.setState({ items }, () => console.log(this.state.items));
	}


	onSubmit(todo){
		const items = this.state.items;
		this.setState({
			items: [...items, todo],
		});
		console.log(items);
	};

	onDelete(index){
		const itemsArr = [...this.state.items];
		itemsArr.splice(index, 1)
		this.setState({
			items: itemsArr
		})
	}


	render(){
		return (
			<div className='todo-list-wrapper'>
				<UserInput onSubmit = {this.onSubmit}
						   value={this.state.userText}
						   onChange={this.onChange} />

				<List items={this.state.items}
					  onDelete={this.onDelete}
					  onChange={this.onChange}
					  />

			</div>

		);
	}
}

const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(<App />, MOUNT_NODE);