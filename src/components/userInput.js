import React from 'react';

class UserInput extends React.Component {
	render() {
		return (
			<form className='todolist_form' onSubmit={this.props.onSubmit}>
				<input type="text" className='user_input' value={this.props.value} onChange={this.props.onChange} />
				<button className='add_btn' type='submit'>Add</button>
			</form>
		)
	}
}

export default UserInput;