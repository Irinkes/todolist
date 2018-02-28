import React from 'react';


const UserInput = props => (
	<form className='todolist_form' onSubmit={props.onSubmit}>
		<input type="text" className='user_input' value={props.value} onChange={props.onChange} />
		<button type='submit'>Add</button>
	</form>
);
2

export default UserInput;