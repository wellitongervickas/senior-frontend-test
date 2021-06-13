<script>
import OfficeItem from '@/components/Offices/Item'
import officesMap from '@/__mocks__/offices'

export default {
	name: 'Offices',
	components: {
		OfficeItem,
	},
	data: () => ({
		offices: {...officesMap}
	}),
	methods: {
		onDelete(id) {
			this.offices = Object.keys(this.offices).reduce((acc, curr) => {
				if (curr === id) return acc;
				acc[curr] = this.offices[curr]

				return acc;
			}, {})
		}
	},
	computed: {
		officesList() {
			return Object.values(this.offices)
		}
	}
}
</script>

<template>
	<div class="offices">
		<div class="office">
			<template v-if="!officesList.length">
				No offices to show!
			</template>
			<office-item
				v-else
				v-for="office in officesList"
				:key="office.id"
				:office="office"
				@onDelete="onDelete(office.id)"
			/>
		</div>
	</div>
</template>

<style></style>
