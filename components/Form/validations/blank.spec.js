import blank from "@/components/Form/validations/blank";

describe("Validatons blank", () => {
	test("returns error message when is invalid value", () => {
		const defaultMessage = "This field cannot be empty";

		expect(blank.validate()).toBe(defaultMessage);
		expect(blank.validate(null)).toBe(defaultMessage);
		expect(blank.validate(undefined)).toBe(defaultMessage);
		expect(blank.validate("")).toBe(defaultMessage);
	});

	test("returns null when is valid value", () => {
		expect(blank.validate(0)).toBeNull();
		expect(blank.validate("0")).toBeNull();
		expect(blank.validate("null")).toBeNull();
		expect(blank.validate("undefined")).toBeNull();
		expect(blank.validate("im a text")).toBeNull();
	});
});
