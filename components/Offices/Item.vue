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
		formValidityStatus: false,
	}),
	validations: {},
	methods: {
		onChangeToggleStatus(bool) {
			this.isToggled = bool;

			const invalidOffice = !bool && !this.office.details.title;
			if (invalidOffice) {
				this.onDelete()
			}
		},

		onChangeEditingStatus(bool) {
			this.isEditing = bool;
		},

		onUpdate(office) {
			this.onChangeEditingStatus(false);
			this.onChangeToggleStatus(false);

			this.$emit('onUpdateOffice', office);
		},

		onSubmit(event) {
			this.onUpdate({
				...this.office,
				...getFormValues(event)
			});
		},

		onDelete() {
			this.$emit('onDeleteOffice');
		},

		setFormValidityStatus(bool) {
			this.formValidityStatus = bool
		}
	},
	computed: {
		officeItemClasses() {
			const classes = ['office-item h-24']
			if (this.isEditing) return [...classes, 'office-item--editing']
			if (this.isToggled) return [...classes, 'office-item--opened'];

			return classes
		},

		officeSaveButtonClasses() {
			const classes = ['py-2', 'px-4', 'rounded', 'text-white']

			if (!this.formValidityStatus) {
				return [...classes, 'bg-gray-200 text-gray-600', 'cursor-auto']
			}

			return [...classes,, 'bg-blue-light', 'cursor-pointer'];
		},
	},
	mounted() {
		if (!this.office.details.title) {
			this.onChangeToggleStatus(true);
			this.onChangeEditingStatus(true);
		}
	}
}
</script>

<template>
	<form
		@submit.prevent="onSubmit"
		:class="officeItemClasses"
		novalidate="true"
	>
		<office-sumary
			ref="details"
			:id="office.id"
			:details="office.details"
			:is-editing="isEditing"
			:is-toggled="isToggled"
			@onChangeToggleStatus="onChangeToggleStatus"
			@onChangeEditingStatus="onChangeEditingStatus"
		/>
		<div v-show="isToggled" key="details">
			<office-contact
				ref="contact"
				:id="office.id"
				:contact="office.contact"
				:is-toggled="isToggled"
				:is-editing="isEditing"
			/>
			<div class="office-actions py-4 px-6 flex justify-between">
				<button
					v-if="!isEditing"
					class="text-gray-400 text-lg focus:outline-none"
					type="button"
					@click="onChangeEditingStatus(true)"
				>
					<font-awesome-icon icon="pencil-alt"  />
					<span class="pl-1 uppercase text-xs">Edit</span>
				</button>
				<button
					v-if="!isEditing"
					type="button"
					class="text-red-400 text-l focus:outline-none"
					@click="onDelete"
				>
					<font-awesome-icon icon="trash-alt" />
					<span class="pl-1 uppercase text-xs">Delete</span>
				</button>
				<button
					v-else
					:class="officeSaveButtonClasses"
					:disabled="!formValidityStatus"
					type="submit"
				>
					Save
				</button>
			</div>
		</div>
	</form>
</template>
<style lang="scss" scoped>
	.office-item {
		transition: height .5s;

		&.office-item--opened {
			height: 22rem;
		}

		&.office-item--editing {
			height: auto;
		}
	}
</style>

