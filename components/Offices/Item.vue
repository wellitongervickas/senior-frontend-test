<script>
import OfficeDetails from '@/components/Offices/Item/Details'
import OfficeSumary from '@/components/Offices/Item/Sumary'

export default {
	name: 'OfficesItem',
	components: {
		OfficeDetails,
		OfficeSumary,
	},
	props: {
		office: Object
	},
	data: () => ({
		isToggled: false,
		isEditing: false,
	}),
	methods: {
		onChangeToggleStatus(bool) {
			this.isToggled = bool
		},

		onChangeEditingStatus(bool) {
			this.isEditing = bool
		},

		onSave() {
			this.onChangeEditingStatus(false)
			this.onChangeToggleStatus(false)
		},

		onSubmit(e) {
			console.log('ola')
		},

		onDelete() {
			this.$emit('onDelete')
		}
	},
}
</script>

<template>
	<form @submit.prevent="onSubmit" class="office-item" novalidate="true">
		<office-sumary
			:id="office.id"
			:details="office.details"
			:is-editing="isEditing"
			:is-toggled="isToggled"
			@onChangeToggleStatus="onChangeToggleStatus"
			@onChangeEditingStatus="onChangeEditingStatus"

		/>
		<template v-if="isToggled">
			<office-details
				:is-editing="isEditing"
				:contact="office.contact"
			/>
			<div class="office-actions">
				<template v-if="!isEditing">
					<button
						type="button"
						@click="onChangeEditingStatus(true)"
					>
						Edit
					</button>
					<button
						type="button"
						@click="onDelete"
					>
						Delete
					</button>
				</template>
				<template v-else>
					<input type="submit" value="Save" />
				</template>
			</div>
		</template>
	</form>
</template>

<style></style>
