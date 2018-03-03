import React from 'react';

export default function Button(props) {
	const onClick = props.onClick;
	const children = props.children;
	return <button onClick={onClick} className="btn">{children}</button>;
}