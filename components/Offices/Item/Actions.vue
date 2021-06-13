<script>
export default {
	name: 'OfficeActions',
	props: {
		isEditing: Boolean
	},
	methods: {
		onEdit() {
			this.onUpdateEditingStatus(true)
		},

		onSave() {
			this.onUpdateEditingStatus(false)
		},

		onUpdateEditingStatus(bool) {
			this.$emit('click', bool)
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
