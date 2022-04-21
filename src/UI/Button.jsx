const Button = (props) => {
	return (
		<div>
			<button
				className={props.className}
				onChange={props.onChange}
				type={props.type}
				onClick={props.onClick}
			>
				{props.children}
			</button>
		</div>
	)
}
export default Button
