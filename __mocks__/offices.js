import { v4 as uuid } from "uuid";

const defaultId = uuid().slice(0, 10);

export default {
	[defaultId]: {
		id: defaultId,
		details: {
			title: "Headquarters",
			address: "3763 W. Dallas St."
		},
		contact: {
			full_name: "Kenneth Makali",
			job_position: "Software engineer",
			email: "jdoesj@gmail.en",
			phone: "5148825288"
		}
	}
};
