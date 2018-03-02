import React from 'react';
import SelectBox from './SelectBox'
import TextBox from './TextBox'
import types from '../constants/types'

export default class List extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editing: false,
			toDoText: this.props.item.text,
			toDoType: this.props.item.type,
		};
	}
	editView(){
		const type = this.state.toDoType;
		const text = this.state.toDoText;
		return(
			<td>
				<div>
					<SelectBox
						value={type}
						options={types}
						onChange={value => this.setState({ toDoType: value })}
					/>
					<TextBox
						value={text}
						onChange={value => this.setState({ toDoText: value })}
					/>
					{/*<TextBox*/}
						{/*value={text}*/}
						{/*onChange={value => this.setState({ newTodoText: value })}*/}
					{/*/>*/}
				</div>
			</td>
		)
	}

	simpleView() {
		const item = this.props.item;
		const todo = this.props.item;
		return(
			<td>
				<div>
					<span>{item.type}</span>
					<span>{item}</span>
				</div>
			</td>
		)
	}
	render() {
		const editing = this.state.editing;
		return editing ? this.editView() : this.simpleView();
	}

}