<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import FieldInput from '@/components/Form/Field/Input'

export default {
	name: 'OfficeSumary',
	components: {
		FontAwesomeIcon,
		FieldInput,
	},
	props: {
		id: String,
		details: Object,
		isToggled: Boolean,
		isEditing: Boolean
	},
	methods: {
		onChangeToggleStatus() {
			this.$emit('onChangeToggleStatus', !this.$props.isToggled)
		},

		handleChangeToggleStatus() {
			if (this.isEditing) this.$emit('onChangeEditingStatus', false)
			this.onChangeToggleStatus();
		},

		handleHeadingAction() {
			if (!this.isEditing) this.onChangeToggleStatus();
		},
	},
	computed: {
		sumaryClasses() {
			const classes = ['office-sumary']
			if (this.isEditing) return [...classes, 'pb-0', 'office-sumary--editing']
			if (this.isToggled) return [...classes, 'office-sumary--opened']

			return classes
		},

		sumaryTitleClasses() {
			if (this.isEditing) return [];
			const classes = ['text-xl', 'font-bold'];

			if (this.isToggled) return [...classes, 'text-white'];
			return [...classes, 'text-gray-700']
		},

		sumaryAddressClasses() {
			const classes = ['office-sumary-address'];

			if (this.isToggled) return classes;
			return [...classes, 'text-gray-400']
		},

		sumaryIcon() {
			return this.isEditing ? 'times' : 'chevron-up'
		},

		sumaryHeadingLabel() {
			return !this.details.title ? 'New location' : 'Edit location'
		},

		sumaryIconClasses() {
			const classes = ['office-sumary-icon', 'transform', {
				'rotate-180': !this.isToggled,
				'rotate-0': this.isToggled
			}]

			if (!this.isToggled) return [...classes, 'text-blue-light']
			if (!this.isEditing) return [...classes, 'text-white'];

			return [...classes, 'absolute', 'top-6', 'right-6', 'text-gray-400']
		},

		sumaryFields() {
			const { id, details } = this;

			return {
				title: {
					id: `${id}-title`,
					value: details.title,
					label: 'Title',
					rules: ['blank']
				},
				address: {
					id: `${id}-address`,
					value: details.address,
					label: 'Enter the address',
					rules: ['blank']
				}
			}
		}
	},
}
</script>

<template>
	<div :class="sumaryClasses" @click="handleHeadingAction">
		<div class="office-sumary-heading flex-1">
			<legend v-if="isEditing" class="font-bold pb-6">
				{{sumaryHeadingLabel}}
			</legend>
			<field-input
				:readOnly="!isEditing"
				:field="sumaryFields.title"
			>
				<h3 :class="sumaryTitleClasses">
					{{details.title}}
				</h3>
			</field-input>
			<field-input
				:readOnly="!isEditing"
				:field="sumaryFields.address"
			>
				<p :class="sumaryAddressClasses">
					{{details.address}}
				</p>
			</field-input>
		</div>
		<div
			:class="sumaryIconClasses"
			@click.stop="handleChangeToggleStatus"
		>
			<font-awesome-icon :icon="sumaryIcon" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.office-sumary {
		@apply cursor-pointer relative p-6 flex items-center;
		transition: background 0.3s linear;

		// &.office-sumary--editing {
		// 	@apply cursor-auto;
		// }

		&.office-sumary--opened {
			@apply shadow-lg text-white bg-gray-400;
		}

		.office-sumary-icon {
			// @apply cursor-pointer;
			transition: transform 0.5s ease-in-out;
		}
	}
</style>
