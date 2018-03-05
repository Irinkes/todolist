import React from 'react';
import ListRow from './ListRow'
import TextBox from './Textbox'
import Radio from './Radio'


class List extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
	    search: undefined,
	  	searchType:undefined
	  };
		this.onChangeRadio = this.onChangeRadio.bind(this)
	  }


	onChangeRadio(value){
		const searchType = value;
		this.setState({
			searchType:searchType
		});
	}

	onDelete(index, items){
		this.props.onDelete(index, items);
		console.log(`indexOnDelete:${items}`);
	}

	render() {
		const search = this.state.search;
		const searchType = this.state.searchType;
		let items = search
			? this.props.items.filter(item => item.text.indexOf(search) != -1 )
			: this.props.items;

		items = searchType
			? items.filter(item=>item.type===searchType)
			: items;

		console.log(items);

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
						<ListRow key={`${item.type}${item.text}`} index={index} item={item} onDelete={() => this.onDelete(index, items)} onChange={onChange}/>
					)
				}
				</tbody>
			</table>
			<Radio onChangeRadio={this.onChangeRadio}/>
			</div>
		)
	}
}


export default List;
