const getFieldId = field => field.id.split("-").pop();

const getFormValues = formEvent =>
	Object.values(formEvent.target)
		.filter(input => input.type === "text")
		.reduce((acc, curr) => {
			const id = getFieldId(curr);

			return {
				...acc,
				[id]: curr.value
			};
		}, {});

export default getFormValues;
