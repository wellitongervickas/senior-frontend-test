import idGenerator from "@/components/Offices/utils/idGenerator";

describe("Offices utils idGenerator", () => {
	test("returns a string with valid length", () => {
		expect(idGenerator().length).toBe(10);
	});

	test("returns a string with two parts", () => {
		const [prefix, randomChar] = idGenerator().split("-");
		expect(!!prefix).toBe(true);
		expect(!!randomChar).toBe(true);
	});
});
