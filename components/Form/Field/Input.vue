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
	},
	computed: {
		inputClasses() {
			return [
				'py-2',
				'px-4',
				'text-sm',
				'rounded',
				'border',
				'w-full',
				'shadow-sm',
				'focus:outline-none',
				'focus:ring-2',
				'focus:ring-blue-light',
				'focus:border-transparent'
			]
		}
	}
}
</script>

<template>
	<div v-if="readOnly">
		<slot></slot>
	</div>
	<div
		v-else
		class="pt-3"
	>
		<label class="text-sm pb-1 block" :for="field.id">
			{{ field.label }}
		</label>
		<input
			type="text"
			:class="inputClasses"
			:ref="field.id"
			:value="field.value"
			:v-model="field.value"
			:id="field.id"
			:name="field.id"
			@change="onChange"
		/>
	</div>
</template>

<style lang="scss" scoped></style>
