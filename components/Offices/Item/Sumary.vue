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
			if (this.isEditing) this.$emit('onChangeEditingStatus', !this.isEditing)
			this.onChangeToggleStatus();
		},


		handleHeadingAction() {
			if (!this.isEditing) this.onChangeToggleStatus();
		},
	},
	computed: {
		sumaryClasses() {
			const classes = ['office-sumary', 'relative', 'p-6']

			if (this.isEditing) {
				return [...classes, 'pb-0']
			}

			if (this.isToggled) {
				return [
					...classes,
					'text-white',
					'bg-gray-500',
					'office-sumary--opened'
				]
			}

			return classes
		},


		sumaryTitleClasses() {
			if (this.isEditing) return [];

			return ['text-xl', 'font-bold']
		},

		sumaryIcon() {
			return this.isEditing ? 'times' : 'chevron-up'
		},

		sumaryIconClasses() {
			const classes = ['office-sumary-icon']

			if (this.isEditing) {
				return [...classes, 'absolute', 'top-6', 'right-6']
			}

			return classes;
		},

		sumaryFields() {
			const { id, details } = this;

			return {
				title: {
					id: `${id}-title`,
					value: details.title,
					label: 'Title'
				},
				address: {
					id: `${id}-address`,
					value: details.address,
					label: 'Enter the address'
				}
			}
		}
	}
}
</script>

<template>
	<div :class="sumaryClasses">
		<div
			class="office-sumary-heading"
			@click="handleHeadingAction"
		>
			<h3 v-if="isEditing" class="font-bold">
				Edit location
			</h3>
			<field-input
				:class="sumaryTitleClasses"
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
				<p class="office-sumary-address">
					{{details.address}}
				</p>
			</field-input>
		</div>
		<div
			:class="sumaryIconClasses"
			@click="handleChangeToggleStatus"
		>
			<font-awesome-icon :icon="sumaryIcon" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.office-sumary {
		transition: background 0.3s linear;
	}
</style>
