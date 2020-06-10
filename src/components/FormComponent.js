import React, { Fragment, useState } from 'react'
import '../assets/css/formComponent.css';

import ListComponent from './ListComponent';


const FormComponent = () => {
	const [taskList, setTaskList] = useState([]);
	const [task, setTask] = useState('');
	const [currentID, setCurrentID] = useState(0);

	const addToTaskList = () => {
		setCurrentID(currentID + 1)
		setTaskList([
			{
				id: currentID,
				active: true,
				task
			},
			...taskList
		])
		setTask('');
	}

	return (
		<Fragment>
			<h1>Todo</h1>
			<div className="form-container">
				<textarea value={task} onChange={(e) => setTask(e.target.value)} placeholder="Todo..."></textarea>
				<button className="primary-bg" onClick={() => addToTaskList()}>Add</button>
			</div>
			{
				taskList.map((item, index) => (
					<ListComponent key={item.id} data={item} taskList={taskList} setTaskList={setTaskList} />
				))
			}
		</Fragment>
	)
}


export default FormComponent;
