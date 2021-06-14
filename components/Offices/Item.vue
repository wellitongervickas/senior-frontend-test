<script>
import OfficeContact from '@/components/Offices/Item/Contact'
import OfficeSumary from '@/components/Offices/Item/Sumary'
import getFormValues from '@/components/Offices/utils/getFormValues'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
	name: 'OfficesItem',
	components: {
		FontAwesomeIcon,
		OfficeContact,
		OfficeSumary,
	},
	props: {
		office: Object
	},
	data: () => ({
		isToggled: false,
		isEditing: false,
	}),
	methods: {
		onChangeToggleStatus(bool) {
			this.isToggled = bool;
		},

		onChangeEditingStatus(bool) {
			this.isEditing = bool;
		},

		onChange(office) {
			this.onChangeEditingStatus(false);
			this.onChangeToggleStatus(false);
			this.$emit('onChange', office);
		},

		onSubmit(event) {
			this.onChange({
				...this.office,
				...getFormValues(event)
			});
		},

		onDelete() {
			this.$emit('onDelete');
		}
	}
}
</script>

<template>
	<form
		@submit.prevent="onSubmit"
		class="office-item"
		novalidate="true"
	>
		<office-sumary
			:id="office.id"
			:details="office.details"
			:is-editing="isEditing"
			:is-toggled="isToggled"
			@onChangeToggleStatus="onChangeToggleStatus"
			@onChangeEditingStatus="onChangeEditingStatus"

		/>
		<template v-if="isToggled">
			<office-contact
				key="contact"
				:id="office.id"
				:contact="office.contact"
				:is-toggled="isToggled"
				:is-editing="isEditing"
			/>
			<div
				key="actions"
				class="office-actions py-3 px-6 flex justify-between"
			>
				<template v-if="!isEditing">
					<button
						class="text-gray-400 uppercase text-xs"
						type="button"
						@click="onChangeEditingStatus(true)"
					>
						<font-awesome-icon icon="pencil-alt"  />
						<span>Edit</span>
					</button>
					<button
						type="button"
						class="text-red-400 uppercase text-xs "
						@click="onDelete"
					>
						<font-awesome-icon icon="trash-alt" />
						<span>Delete</span>
					</button>
				</template>
				<template v-else>
					<input
						class="bg-blue-light py-2 px-4 rounded cursor-pointer	text-white"
						type="submit"
						value="Save"
					/>
				</template>
			</div>
		</template>
	</form>
</template>
<style></style>
