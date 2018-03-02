import React from 'react';
import ListRow from './listRow'


class List extends React.Component {

	onDelete(index){
		this.props.onDelete(index);
	}



	render() {
		const onChange = this.props.onChange;
		return(
			<table className="todo-table">
				<tbody>
				{
					this.props.items.map((item, index) =>
						<tr key={index}>
							<ListRow index={index} item={item} onDelete={() => this.onDelete(index)} onChange={onChange}/>
						</tr>)
				}
				</tbody>
			</table>
		)
	}
}


export default List;
