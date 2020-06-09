import React, { Fragment } from 'react';
import '../assets/css/listComponent.css';

const ListComponent = ({data, taskList, setTaskList}) => {
	const deleteTask = (id) => {
		setTaskList(taskList.filter(item => item.id !== id))
	}
	const completeTask = (id) => {
		setTaskList([...taskList].map(item => {
			if(item.id === id) {
				return {
					...item,
					active: !item.active
				}
			}
			return item
		}))
	}
	return (
		<Fragment>
			<div className="box">
				<input type="checkbox" name="task" />
				<label className={ data.active ? 'active' : 'passive'} onClick={() => completeTask(data.id)} htmlFor="task">{data.task} {data.id}</label>
				<button className="danger-bg" onClick={() => deleteTask(data.id)}>Delete</button>
			</div>
		</Fragment>
	)
}

export default ListComponent;
