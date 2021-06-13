<script>
export default {
	name: 'OfficeActions',
	props: {
		isEditing: Boolean
	},
	methods: {
		onEdit() {
			this.onChangeEditingStatus(true)
		},

		onSave() {
			this.onChangeEditingStatus(false)
		},

		onChangeEditingStatus(bool) {
			this.$emit('onChangeEditingStatus', bool)
		}
	}
}
</script>

<template>
	<div>
		<button
			v-if="isEditing"
			type="button"
			@click="onSave"
		>
			Save
		</button>
		<button
			v-if="!isEditing"
			type="button"
			@click="onEdit"
		>
			Edit
		</button>
		<button
			v-if="!isEditing"
			type="button"
		>
			Delete
		</button>
	</div>
</template>

<style></style>
