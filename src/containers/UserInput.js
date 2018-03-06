import React from 'react';
import SelectBox from '../components/SelectBox'
import TextBox from '../components/TextBox'
import types from '../constants/types';


class UserInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			toDoText: undefined,
			toDoType: 'high',
		};
		this.onAddItem = this.onAddItem.bind(this)
	}

	onAddItem =() =>{
		if (this.state.toDoType && this.state.toDoText) {
			const newItem = {
				text: this.state.toDoText,
				type: this.state.toDoType,
			};
			const onSubmit = this.props.onSubmit;
			this.setState(
				{
					toDoText: '',
				},
				() => onSubmit(newItem),
			);
		}
	};


	render() {
		const toDoText = this.state.toDoText;
		const toDoType = this.state.toDoType;
		return (
			<div className='todolist_form'>
				<TextBox
					placeholder={'Введите задание'}
					value={toDoText}
					onChange={value => this.setState({ toDoText: value })}
				/>
				<span>Приоритет: </span>
				<SelectBox
					options={types}
					value={toDoType}
					onChange={value => this.setState({ toDoType: value })}
				/>
				<button className='add_btn' onClick={this.onAddItem}>Добавить</button>

			</div>
		)
	}
}

export default UserInput;