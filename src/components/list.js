import React from 'react';
import ListRow from './listRow'


class List extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			editing: false
		}


	}

	onDelete(index){
		this.props.onDelete(index);
	}
	onEdit() {
		this.setState({
			editing: true
		})

	}


	render() {

		return(
			<table className="todo-table">
				<tbody>
				{
					this.props.items.map((item, index) =>
						<tr key={index}>
							{/*<ListRow index={index} item={item} editing={this.state.editing} newid={index}/>*/}
							<td><div className='item-list'>{item}</div></td>
							<td><a href='#' className='edit_btn' onClick={() => this.onEdit(index)}>Edit</a></td>
							<td><a href='#' className='delete_btn' onClick={() => this.onDelete(index)}>Delete</a></td>
						</tr>)
				}
				</tbody>
			</table>
		)
	}
}


export default List;
