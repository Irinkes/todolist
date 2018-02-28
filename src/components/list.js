import React from 'react';
// import ListRow from './listRow';

class List extends React.Component {
	onDelete(item) {
		this.props.onDelete(item);
	}
	render() {
		return(
			<ul>
				{
					this.props.items.map((item, index) => <li key={index}><span>{item}</span><a href='#' onClick={this.onDelete.bind(this, index)}>Delete</a></li>)
				}
			</ul>
		)
	}
}


export default List;


