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
			if (this.isOpened) return [...classes, 'office-sumary--opened']

			return classes
		},

		sumaryTitleClasses() {
			if (this.isEditing) return [];
			return ['text-xl', 'font-bold']
		},

		sumaryIcon() {
			return this.isEditing ? 'times' : 'chevron-up'
		},
	}
}
</script>

<template>
	<div :class="sumaryClasses">
		<div class="office-sumary-heading">
			<legend
				v-if="isEditing"
				class="font-bold"
			>
				Edit location
			</legend>
			<h3 :class="sumaryTitleClasses">
				{{details.title}}
			</h3>
			<p>
				{{details.address}}
			</p>
		</div>
		<div
			class="office-sumary-icon"
			@click="onToggle"
		>
			<font-awesome-icon :icon="sumaryIcon" />
		</div>
	</div>
</template>

<style lang="scss"></style>
