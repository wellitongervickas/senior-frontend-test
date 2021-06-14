import officeGenerator from "@/components/Offices/utils/officeGenerator";

describe("Offices utils officeGenerator", () => {
	it("returns a valid office struct", () => {
		const office = Object.values(officeGenerator())[0];

		expect(office).toMatchObject({
			contact: {
				full_name: "",
				job_position: "",
				email: "",
				phone: ""
			},
			details: {
				title: "",
				address: ""
			}
		});
	});
});
