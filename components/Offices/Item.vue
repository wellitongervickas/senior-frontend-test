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
	},
	computed: {
		officeItemClasses() {
			const classes = ['office-item h-24']
			if (this.isEditing) return [...classes, 'office-item--editing']
			if (this.isToggled) return [...classes, 'office-item--opened'];

			return classes
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
			:id="office.id"
			:details="office.details"
			:is-editing="isEditing"
			:is-toggled="isToggled"
			@onChangeToggleStatus="onChangeToggleStatus"
			@onChangeEditingStatus="onChangeEditingStatus"
		/>
		<div v-show="isToggled" key="details">
			<office-contact
				:id="office.id"
				:contact="office.contact"
				:is-toggled="isToggled"
				:is-editing="isEditing"
			/>
			<div
				class="office-actions py-4 px-6 flex justify-between"
			>
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
				<input
					v-else
					class="bg-blue-light py-2 px-4 rounded cursor-pointer	text-white"
					type="submit"
					value="Save"
				/>
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

