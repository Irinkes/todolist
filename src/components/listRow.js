import React from 'react';
import SelectBox from './SelectBox'
import TextBox from './TextBox'
import Button from './Button'
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

	onCancel() {
		this.setState({
			editing: false,
			toDoText: this.props.item.text,
			toDoType: this.props.item.type,
			}
		)
	}
	onChangeHandler () {
		const onChangeTodo = this.props.onChange;
		const index = this.props.index;
		const todo = {
			text: this.state.toDoText,
			type: this.state.toDoType,
		};
		onChangeTodo(todo, index);
	};

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
					<Button onClick={this.onChangeHandler}>Сохранить</Button>
					<Button onClick={this.onCancel}>Отмена</Button>
				</div>
			</td>
		)
	}

	simpleView() {
		const item = this.props.item;
		console.log(item.type)
		return(
			<td>
				<div>
					<span>{item.type}</span>
					<span>{item.text}</span>
					<Button onClick={() => this.setState({ editing: true })}>
						Изменить
					</Button>
					<Button onClick={this.props.onDelete}>Удалить</Button>
				</div>
			</td>
		)
	}
	render() {
		const editing = this.state.editing;
		return editing ? this.editView() : this.simpleView();
	}

}