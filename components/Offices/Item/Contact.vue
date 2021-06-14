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
					label: 'Full name',
					rules: ['blank']
				},
				job_position: {
					id: `${id}-job_position`,
					value: contact.job_position,
					label: 'Job position',
					rules: ['blank']
				},
				email: {
					id: `${id}-email`,
					value: contact.email,
					label: 'Email',
					type: 'email',
					rules: ['blank', 'email']
				},
				phone: {
					id: `${id}-phone`,
					value: contact.phone,
					label: 'Phone',
					rules: ['blank', 'phone']
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
			ref="full_name"
			:readOnly="!isEditing"
			:field="contactFields.full_name"
		>
			<h4 class="py-1 font-bold text-lg">
				{{contact.full_name}}
			</h4>
		</field-input>
		<field-input
			:readOnly="!isEditing"
			:field="contactFields.job_position"
		>
			<p class="py-1">
				{{contact.job_position}}
			</p>
		</field-input>
		<field-input
			:readOnly="!isEditing"
			:field="contactFields.email"
		>
			<p class="py-1 text-blue-light">
				{{contact.email}}
			</p>
		</field-input>
		<field-input
			:readOnly="!isEditing"
			:field="contactFields.phone"
		>
			<p class="py-1">
				{{contact.phone}}
			</p>
		</field-input>
	</div>
</template>

<style></style>
