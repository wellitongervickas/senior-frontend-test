import idGenerator from "@/components/Offices/utils/idGenerator";

const officeGenerator = () => {
	const id = idGenerator();

	return {
		[id]: {
			contact: {
				full_name: "",
				job_position: "",
				email: "",
				phone: ""
			},
			details: {
				title: "",
				address: ""
			},
			id
		}
	};
};

export default officeGenerator;
