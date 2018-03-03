import React from 'react';
import ListRow from './ListRow'
import TextBox from './Textbox'
import Radio from './Radio'


class List extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
	    search: undefined,
	  };
	}

	onDelete(index){
		this.props.onDelete(index);
	}

	render() {
		const search = this.state.search;
		const items = search
			? this.props.items.filter(item => item.text.indexOf(search) != -1)
			: this.props.items;

		const onChange = this.props.onChange;
		return(
			<div>
			<table className="todo-table">
				<tbody>
				<tr>
					<th>Приоритет</th>
					<th>Задание</th>
					<th>
						<TextBox
						value={this.state.search}
						onChange={value => this.setState({ search: value })}
					/>
					</th>
				</tr>
				{
					items.map((item, index) =>
						<ListRow key={`${item.value}${item.label}`} index={index} item={item} onDelete={() => this.onDelete(index)} onChange={onChange}/>
					)
				}
				</tbody>
			</table>
			<Radio />
			</div>
		)
	}
}


export default List;
