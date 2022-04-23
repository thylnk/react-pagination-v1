import usePagination from '../hooks/usePagination';
import '../styles/style.scss';

const Pagination = (props: any) => {
	const {
		onPageChange,
		totalCount,
		siblingCount = 1,
		currentPage,
		pageSize,
	} = props;
	const paginationRange = usePagination({
		currentPage,
		totalCount,
		siblingCount,
		pageSize,
	});

	const onNext = () => {
		if (currentPage < lastPage) {
			onPageChange(currentPage + 1);
		}
	};

	const onPrevious = () => {
		if (currentPage > 1) {
			onPageChange(currentPage - 1);
		}
	};

	let lastPage = paginationRange[paginationRange.length - 1];

	return (
		<div className="pagination--bar">
			<div className="arrow arrow-left" onClick={onPrevious} />
			{paginationRange.length > 0 &&
				paginationRange.map((item, idx) => {
					return item === '...' ? (
						<div
							className={`pagination--item ${
								currentPage === item ? 'active' : ''
							}`}
							key={idx}>
							{item}
						</div>
					) : (
						<div
							className={`pagination--item ${
								currentPage === item ? 'active' : ''
							}`}
							key={idx}
							onClick={() => onPageChange(item)}>
							{item}
						</div>
					);
				})}
			<div className="arrow arrow-right" onClick={onNext} />
		</div>
	);
};

export default Pagination;
