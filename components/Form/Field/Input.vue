<script>
export default {
	name: 'FieldInput',
	props: {
		field: Object,
		readOnly: Boolean
	},
	methods: {
		onChange(e) {
			this.field.value = e.target.value
		}
	}
}
</script>

<template>
	<div v-if="readOnly">
		<slot></slot>
	</div>
	<div v-else>
		<label :for="field.id">
			{{ field.label }}
		</label>
		<input
			type="text"
			:ref="field.id"
			:value="field.value"
			:v-model="field.value"
			:id="field.id"
			:name="field.id"
			@change="onChange"
		/>
	</div>
</template>

<style></style>
