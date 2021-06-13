<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
	name: 'OfficeSumary',
	components: {
		FontAwesomeIcon,
	},
	props: {
		details: Object,
		isOpened: Boolean,
		isEditing: Boolean
	},
	methods: {
		onToggle() {
			if (this.isEditing) this.$emit('onChangeEditingStatus', !this.isEditing)

			this.$emit('onChangeToggleStatus', !this.$props.isOpened)
		}
	},
	computed: {
		sumaryClasses() {
			const classes = ['office-sumary']
			if (this.isOpened) classes.push('office-sumary--opened')

			return classes
		},
		sumaryTitle() {
			return this.isEditing ? 'Edit location' : this.details.title
		},
		sumaryTitleClass() {
			const classes = ['font-bold']
			if (!this.isEditing) classes.push('text-xl')

			return classes
		},
		sumaryIcon() {
			return this.isEditing ? 'times' : 'chevron-up'
		}
	}
}
</script>

<template>
	<div
		:class="sumaryClasses"
		@click="onToggle"
	>
		<div class="office-sumary-heading">
			<h3 :class="sumaryTitleClass">
				{{sumaryTitle}}
			</h3>
			<p v-if="!isEditing">{{details.address}}</p>
		</div>
		<div
			class="office-sumary-icon"
		>
			<font-awesome-icon :icon="sumaryIcon" />
		</div>
	</div>
</template>

<style lang="scss"></style>
