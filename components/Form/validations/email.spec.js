import email from "@/components/Form/validations/email";

describe("Validatons email", () => {
	test("returns error message when is invalid value", () => {
		const defaultMessage = "This field must be email";

		expect(email.validate()).toBe(defaultMessage);
		expect(email.validate(null)).toBe(defaultMessage);
		expect(email.validate(undefined)).toBe(defaultMessage);
		expect(email.validate("")).toBe(defaultMessage);
		expect(email.validate("some_value")).toBe(defaultMessage);
	});

	test("returns null when is valid value", () => {
		expect(email.validate("email@gmail.com")).toBeNull();
	});
});
