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
		handleChangeOpenedStatus() {
			this.$emit('click', !this.$props.isOpened)
		}
	},
	computed: {
		sumaryClasses() {
			const classes = ['office-sumary']
			if (this.isOpened) classes.push('office-sumary--opened')

			return classes
		},
	}
}
</script>

<template>
	<div :class="sumaryClasses">
		<div
			v-if="isEditing"
			@click="handleChangeOpenedStatus"
		>
			<div class="office-sumary-heading">
				<h3 class="font-bold">Edit location</h3>
			</div>
			<div class="office-sumary-icon">
				<font-awesome-icon icon="times" />
			</div>
		</div>
		<div
			v-if="!isEditing"
			@click="handleChangeOpenedStatus"
		>
			<div class="office-sumary-heading">
				<h3 class="text-xl font-bold">{{details.title}}</h3>
				<div>{{details.address}}</div>
			</div>
			<div class="office-sumary-icon">
				<font-awesome-icon icon="chevron-up" />
			</div>
		</div>
	</div>
</template>

<style lang="scss"></style>
