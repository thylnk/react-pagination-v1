const RowItem = (props: {
	id: number;
	first_name: string;
	last_name: string;
	email: string;
	phone: string;
}) => {
	const { id, first_name, last_name, email, phone } = props;
	return (
		<tr>
			<td>{id}</td>
			<td>{first_name}</td>
			<td>{last_name}</td>
			<td>{email}</td>
			<td>{phone}</td>
		</tr>
	);
};

export default RowItem;
