import phone from "@/components/Form/validations/phone";

describe("Validatons phone", () => {
	test("returns error message when is invalid value", () => {
		const defaultMessage = "This field must be phone";

		expect(phone.validate()).toBe(defaultMessage);
		expect(phone.validate(null)).toBe(defaultMessage);
		expect(phone.validate(undefined)).toBe(defaultMessage);
		expect(phone.validate("")).toBe(defaultMessage);
		expect(phone.validate("some_value")).toBe(defaultMessage);
	});

	test("returns null when is valid value", () => {
		expect(phone.validate("1234567890")).toBeNull();
		expect(phone.validate("123-456-7890")).toBeNull();
	});
});
