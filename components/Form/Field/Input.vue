<script>
import * as validations from '@/components/Form/validations'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
	name: 'FieldInput',
	components: {
		FontAwesomeIcon,
	},
	inject: ['setFormErrors'],
	props: {
		field: Object,
		readOnly: Boolean
	},
	data: () => ({
		error: '',
	}),
	methods: {
		onChange(e) {
			const value = e.target.value;

			this.onValidate(value);
			this.field.value = value

			this.$emit('change', value);
		},

		onValidate(value, options = {}) {
			const error = this.field.rules.find((rule) =>
				validations[rule].validate(value)
			)

			if (!options?.skipMessage) {
				this.error = validations[error]?.message;
			}

			this.setFormErrors({
				[this.field.id]: error
			})

			return error;
    },
	},
	computed: {
		type() {
			return this.field.type || 'text'
		},

		required() {
      return this.field.rules.includes('blank')
    },

		fieldClasses() {
			const classes = ['field-input-control']
			if (!!this.error) return [...classes, 'field-input-control--error'];

			return classes;
		}
	},
	mounted() {
		this.onValidate(this.field.value, { skipMessage: true })
	}
}
</script>

<template>
	<div v-if="readOnly">
		<slot />
	</div>
	<div v-else class="field-input pt-3 relative">
		<label class="field-input-label" :for="field.id">
			{{ field.label }}
			<span v-if="required">*</span>
		</label>
		<input
			:class="fieldClasses"
			:type="type"
			:value="field.value"
			:id="field.id"
			:name="field.id"
			:required="required"
			:pattern="field.pattern"
			@input="onChange"
		/>
		<div
			v-if="!!error"
			class="field-input-exclamation text-red-400 absolute top-10 right-4"
		>
			<font-awesome-icon icon="exclamation-circle" />
		</div>
		<div
			v-if="!!error"
			class="text-red-400 text-xs pt-2"
		>
			{{error}}
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.field-input {
		.field-input-label {
			@apply text-sm pb-1 block;
		}

		.field-input-control {
			@apply py-2 px-4 text-sm rounded border w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-light focus:border-transparent;

			&--error {
				@apply focus:ring-red-400 border-red-400;
			}
		}
	}
</style>
