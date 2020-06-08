import React, { Fragment } from 'react';
import '../assets/css/listComponent.css';

const ListComponent = (props) => {
	return (
		<Fragment>
			{ 
				props.task.map(val => 
					(<div className="box">
						{val}
					</div>)
				)
			}
		</Fragment>
	)
}

export default ListComponent;
