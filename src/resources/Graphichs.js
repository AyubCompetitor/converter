import upArrow from '../resources/up-arrow.svg';
import downArrow from '../resources/down-arrow.svg';

const arrowUp = (
	<img
		src={upArrow}
		style={{
			width: '35px',
			height: '35px',
			marginRight: '10px',
			paddingBottom: '6px',
		}}
		alt='arrow-up'
	/>
);
const arrowDown = (
	<img
		src={downArrow}
		style={{
			width: '35px',
			height: '35px',
			marginRight: '10px',
			paddingBottom: '6px',
		}}
		alt='arrow-down'
	/>
);

export { arrowUp, arrowDown };
