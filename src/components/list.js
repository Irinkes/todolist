import React from 'react';


class List extends React.Component {
	render() {
		return (
		<div class="todo-list">
			<label><input type="checkbox"/>Do something</label>
			<label><input type="checkbox"/>Do something else</label>
		</div>
		);
	}
}

export default List;

