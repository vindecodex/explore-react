import React, { Fragment, useState } from 'react'
import '../assets/css/formComponent.css';

import ListComponent from './ListComponent';

const FormComponent = () => {
	const [tasks, setTask] = useState([])
	const [text, setText] = useState('');

	const addToTask = () => {
		setTask([...tasks, text])
		setText('');
	}

	return (
		<Fragment>
			<div className="form-container">
				<textarea value={ text } onChange={(e) => setText(e.target.value)}></textarea>
				<button class="primary-bg" onClick={() => addToTask()} >Add</button>
			</div>
			<ListComponent task={tasks} />
		</Fragment>
	)
}


export default FormComponent;
