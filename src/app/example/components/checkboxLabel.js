import React from 'react';

export default function checkboxLabel(props) {
  const {id, children} = props;
  const controlId = props['for'];
  return (
    <label 
    	id={id} 
    	htmlFor={controlId}
	>
		{children}
	</label>
  );
}