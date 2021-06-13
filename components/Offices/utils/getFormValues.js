const getFieldId = field => field.id.split("-").pop();

const getFormValues = formEvent => {
	const {
		title,
		address,
		full_name,
		job_position,
		email,
		phone
	} = Object.values(formEvent.target)
		.filter(input => input.type === "text")
		.reduce((acc, curr) => {
			const id = getFieldId(curr);

			return {
				...acc,
				[id]: curr.value
			};
		}, {});

	return {
		details: {
			title,
			address
		},
		contact: {
			full_name,
			job_position,
			email,
			phone
		}
	};
};

export default getFormValues;
