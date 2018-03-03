import React from 'react';
import ListRow from './ListRow'
import TextBox from './Textbox'


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
				<TextBox
					value={this.state.search}
					onChange={value => this.setState({ search: value })}
				/>
				<table className="todo-table">
					<tbody>
					{
						items.map((item, index) =>
							<tr key={index}>
								<ListRow index={index} item={item} onDelete={() => this.onDelete(index)} onChange={onChange}/>
							</tr>)
					}
					</tbody>
				</table>
			</div>
		)
	}
}


export default List;
