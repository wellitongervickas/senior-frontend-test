import { mount } from "@vue/test-utils";
import Input from "@/components/Form/Field/Input";

describe("Form Field Input", () => {
	test("is a Vue instance", () => {
		const wrapper = mount(Input);
		expect(wrapper.vm).toBeTruthy();
	});
});
