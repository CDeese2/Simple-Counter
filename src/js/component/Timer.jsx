import React from "react";


const Timer = (e) => {
	// const Ref = useRef(null);
	const [timer, setTimer] = React.useState('00:00:00');
	let {total, hours, minutes, seconds }
			= getTimeRemaining(e);
	if (total >=0) {
		setTimer (
			(hours > 9 ? hours : '0' + hours) + ':' +
			(minutes > 9 ? minutes : '0' + minutes) + ':' +
			(seconds > 9 ? seconds : '0' + seconds)
		);
	};
	return (
		<div className="Timer">
			<h2> {timer}</h2>
		</div>
	)

}

export default Timer; 