import React from 'react'
import classes from './AddReportTime.module.css'
const AddReportTime = ({  setReportShow, }) => {
	return (
		<div onClick={() => setReportShow(false)}>
			<div
				className={classes.modal_content}
				onClick={(e) => e.stopPropagation()}
			>
				<div className={classes.Report_logo}>
					<img
						src='	https://pomofocus.io/icons/remove-black-sm.png'
						alt=''
					/>
				</div>
				<div>
					<button>Summary</button>
					<button>Detail</button>
					<button>Ranking</button>
				</div>
			</div>
		</div>
	)
}

export default AddReportTime
