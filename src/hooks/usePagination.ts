import { useMemo } from 'react';

// return array number with size = end - start + 1, and step = start
const range = (start: number, end: number) => {
	let length = end - start + 1;
	return Array.from({ length }, (_, idx) => idx + start);
};

const DOTS = '...';

export default function usePagination({
	totalCount = 0,
	pageSize = 10,
	siblingCount = 1,
	currentPage = 1,
}) {
	const totalPageCounts = Math.ceil(totalCount / pageSize);
	const paginationRange = useMemo(() => {
		// 1 ... 2 3 4 ... 100 -> current is 3, leftSiblingIndex = 2 and rightSiblingIndex = 4
		const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
		const rightSiblingIndex = Math.min(
			currentPage + siblingCount,
			totalPageCounts
		);

		// 1 ... 3 4 5 ... 7
		const shouldShowLeftDots = leftSiblingIndex > 2;
		const shouldShowRightDots = rightSiblingIndex < totalPageCounts - 1;
		console.log(leftSiblingIndex, rightSiblingIndex);

		if (shouldShowLeftDots && shouldShowRightDots) {
			return [
				1,
				DOTS,
				...range(leftSiblingIndex, rightSiblingIndex),
				DOTS,
				totalPageCounts,
			];
		}

		if (!shouldShowLeftDots) {
			return [1, 2, 3, 4, 5, DOTS, totalPageCounts];
		}

		if (!shouldShowRightDots) {
			return [1, DOTS, ...range(leftSiblingIndex - 1, totalPageCounts)];
		}

		// return range(1, 5);
		return range(1, totalPageCounts);
	}, [totalCount, pageSize, siblingCount, currentPage]);

	return paginationRange;
}
