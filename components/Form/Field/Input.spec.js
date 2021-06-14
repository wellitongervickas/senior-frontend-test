import { mount, createLocalVue } from "@vue/test-utils";
import Input from "@/components/Form/Field/Input";

// Add Library Icons
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

library.add(faExclamationCircle);

const localVue = createLocalVue();
localVue.component("font-awesome-icon", FontAwesomeIcon);

describe("Form Field Input", () => {
	test("emit on change once", () => {
		const wrapper = mount(Input, {
			provide: {
				setFormErrors: () => {}
			},
			propsData: {
				readOnly: false,
				field: {
					id: "id-name",
					value: "",
					rules: ["blank"]
				}
			}
		});

		const nameField = wrapper.find("#id-name");
		nameField.setValue("welliton");

		expect(wrapper.emitted("change")).toMatchObject([["welliton"]]);
	});
});
