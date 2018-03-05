import React from 'react';
import SelectBox from '../components/SelectBox';
import TextBox from '../components/TextBox';
import Button from '../components/Button';
import types from '../constants/types'

export default class List extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editing: false,
			toDoText: this.props.item.text,
			toDoType: this.props.item.type,
		};
		this.onChangeHandler= this.onChangeHandler.bind(this);
		this.onCancel= this.onCancel.bind(this);
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
		this.setState({
			editing:false
		})
	};

	editView(){
		const type = this.state.toDoType;
		const text = this.state.toDoText;
		return(
			<tr>
				<td>
					<SelectBox
						value={type}
						options={types}
						onChange={value => this.setState({ toDoType: value })}
					/>
				</td>
				<td>
					<TextBox
						value={text}
						onChange={value => this.setState({ toDoText: value })}
					/>
				</td>
				<td>
					<Button onClick={this.onChangeHandler}>Сохранить</Button>
					<Button onClick={this.onCancel}>Отмена</Button>
				</td>
			</tr>
		)
	}

	simpleView() {
		const item = this.props.item;
		return(
			<tr>
				<td>
					<span className='importance_type'>{item.type}</span>
				</td>
				<td>
					<span>{item.text}</span>
				</td>
				<td>
					<Button onClick={() => this.setState({ editing: true })}>
						Изменить
					</Button>
					<Button onClick={this.props.onDelete}>Удалить</Button>
				</td>
			</tr>
		)
	}
	render() {
		const editing = this.state.editing;
		return editing ? this.editView() : this.simpleView();
	}

}