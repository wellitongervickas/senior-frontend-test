<script>
import FieldInput from '@/components/Form/Field/Input'

export default {
	name: 'OfficeContact',
	components: {
		FieldInput,
	},
	props: {
		id: String,
		contact: Object,
		isToggled: Boolean,
		isEditing: Boolean
	},
	computed: {
		contactClasses() {
			const classes = ['office-contact']

			if (this.isToggled) {
				return [...classes, 'p-6', 'border-b']
			}

			if (this.isEditing) {
				return [...classes, 'px-6 pb-6']
			}

			return classes
		},
		contactFields() {
			const { id, contact } = this;

			return {
				full_name: {
					id: `${id}-full_name`,
					value: contact.full_name,
					label: 'Full name'
				},
				job_position: {
					id: `${id}-job_position`,
					value: contact.job_position,
					label: 'Job position'
				},
				email: {
					id: `${id}-email`,
					value: contact.email,
					label: 'Email'
				},
				phone: {
					id: `${id}-phone`,
					value: contact.phone,
					label: 'Phone'
				},
			}
		}
	}
}
</script>

<template>
	<div :class="contactClasses">
		<legend
			v-if="isEditing"
			class="pb-3 mb-3 border-b uppercase text-xs text-blue-light"
		>
			Contact informations
		</legend>
		<field-input
			:readOnly="!isEditing"
			:field="contactFields.full_name"
		>
			<h4>
				{{contact.full_name}}
			</h4>
		</field-input>
		<field-input
			:readOnly="!isEditing"
			:field="contactFields.job_position"
		>
			<h4>
				{{contact.job_position}}
			</h4>
		</field-input>
		<field-input
			:readOnly="!isEditing"
			:field="contactFields.email"
		>
			<h4>
				{{contact.email}}
			</h4>
		</field-input>
		<field-input
			:readOnly="!isEditing"
			:field="contactFields.phone"
		>
			<h4>
				{{contact.phone}}
			</h4>
		</field-input>
	</div>
</template>

<style></style>
