import React from 'react';


class List extends React.Component {
	delete(index) {
		this.props.delete(index);
	}
	render() {
		return(
			<ul>
				{
					this.props.items.map((item, index) => <li key={index}><div className='item-list'>{item}</div><a href='#' onClick={this.delete.bind(this, index)}>Delete</a></li>)
				}
			</ul>
		)
	}
}


export default List;


