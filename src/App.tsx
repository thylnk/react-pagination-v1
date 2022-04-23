import { useMemo, useState } from 'react';
import './App.css';
import Pagination from './components/Pagination';
import RowItem from './components/RowItem';
import data from './helpers/mock-data.json';

const pageSize = 15;

function App() {
	const [currentPage, setCurrentPage] = useState(1);

	const currentData = useMemo(() => {
		const first = (currentPage - 1) * pageSize;
		const last = first + pageSize;
		return data.slice(first, last);
	}, [currentPage]);

	return (
		<div className="App">
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>FIRST NAME</th>
						<th>LAST NAME</th>
						<th>EMAIL</th>
						<th>PHONE</th>
					</tr>
				</thead>
				<tbody>
					{currentData.map((item) => {
						return <RowItem key={item.id} {...item} />;
					})}
				</tbody>
			</table>
			<Pagination
				className="pagination-bar"
				currentPage={currentPage}
				totalCount={data.length}
				pageSize={pageSize}
				onPageChange={(page: number) => setCurrentPage(page)}
			/>
		</div>
	);
}

export default App;
