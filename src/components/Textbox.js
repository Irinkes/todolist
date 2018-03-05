import React from 'react';

export default function TextBox(props) {
	const onChange = props.onChange;
	const value = props.value;
	const placeholder = props.placeholder;
	return (
		<input className='text_input' placeholder={placeholder} type="text" value={value} onChange={e => onChange(e.target.value)} />
	);
}
