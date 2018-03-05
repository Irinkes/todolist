import React from 'react';
import types from '../constants/types';

export default function Radio(props) {
	const onChangeRadio = props.onChangeRadio;
	return (
		<div className='radio-boxes-wrapper'>
			{types.map((type,index) =>
				<div key={`${type.value}${type.label}`}>
					<label htmlFor={type.value}>{type.label}</label>
					<input type="radio"
						   id={type.value}
						   name="importanceType"
						   value={type.value}
						   onClick={e => onChangeRadio(e.target.value)}/>
				</div>
			)}
		</div>
	);
}