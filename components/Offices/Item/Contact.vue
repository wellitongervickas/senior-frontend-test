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
		isEditing: Boolean
	},
	computed: {
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
	<div>
		<legend>Contact informations</legend>
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
