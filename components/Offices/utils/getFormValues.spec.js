import getFormValues from "@/components/Offices/utils/getFormValues";

describe("Offices utils getFormValues", () => {
	test("returns a valid office struct", () => {
		const office = getFormValues({
			target: [
				{
					id: "field-full_name",
					value: "welliton gervickas",
					type: "text"
				},
				{
					id: "field-job_position",
					value: "front-end",
					type: "text"
				},
				{
					id: "field-email",
					value: "wellitogervickas@gmail.com",
					type: "email"
				},
				{
					id: "field-phone",
					value: "1234567890",
					type: "text"
				},
				{
					id: "field-title",
					value: "Coworking",
					type: "text"
				},
				{
					id: "field-address",
					value: "Chicago",
					type: "text"
				}
			]
		});

		expect(office).toMatchObject({
			contact: {
				full_name: "welliton gervickas",
				job_position: "front-end",
				email: "wellitogervickas@gmail.com",
				phone: "1234567890"
			},
			details: {
				title: "Coworking",
				address: "Chicago"
			}
		});
	});
});
