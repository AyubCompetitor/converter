const Spinner = () => {
	return (
		<div className='spinner-contain'>
			<div className='d-flex justify-content-center text-center'>
				<div
					className='spinner-border text-primary m-5'
					style={{ width: '3rem', height: '3rem' }}
					role='status'
				>
					<span className='visually-hidden'>Loading...</span>
				</div>
			</div>
		</div>
	);
};

export default Spinner;
