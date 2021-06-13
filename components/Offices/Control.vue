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
			const newOffices = { ...this.offices }
			delete newOffices[id];

			this.offices = newOffices
		},

		onChange(office) {
			this.offices = {
				...this.offices,
				[office.id]: office
			};
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
				@onChange="onChange"
			/>
		</div>
	</div>
</template>

<style></style>
