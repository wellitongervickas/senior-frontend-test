<script>
import OfficeDetails from '@/components/Offices/Item/Details'
import OfficeSumary from '@/components/Offices/Item/Sumary'
import OfficeActions from '@/components/Offices/Item/Actions'

export default {
	name: 'OfficesItem',
	components: {
		OfficeDetails,
		OfficeSumary,
		OfficeActions
	},
	props: {
		office: Object
	},
	data: () => ({
		toggleStatus: false,
		editingStatus: false,
	}),
	methods: {
		onChangeToggleStatus(bool) {
			this.toggleStatus = bool
		},

		onChangeEditingStatus(bool) {
			this.editingStatus = bool
		}
	}
}
</script>

<template>
	<div class="office-item">
		<office-sumary
			:details="office.details"
			:is-editing="editingStatus"
			:is-opened="toggleStatus"
			@click="onChangeToggleStatus"
		/>
		<office-details
			v-if="toggleStatus"
			:is-editing="editingStatus"
			:contact="office.contact"
		/>
		<office-actions
			v-if="toggleStatus"
			:is-editing="editingStatus"
			@click="onChangeEditingStatus"
		/>
	</div>
</template>

<style></style>
