<script>
import OfficeItem from '@/components/Offices/Item'
import officesMap from '@/__mocks__/offices'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
	name: 'Offices',
	components: {
		OfficeItem,
		FontAwesomeIcon,
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
		},

		officeClass() {
			return [
				'shadow-lg',
				'rounded-lg',
				'bg-white',
				'w-72',
				'min-w-full',
				'overflow-hidden'
			]
		}
	}
}
</script>

<template>
	<div class="offices">
		<div class="office">
			<template v-if="!officesList.length" >
				<div :class="[officeClass, 'text-center', 'p-6', 'text-gray-400']">
					<font-awesome-icon icon="frown" class="text-4xl" />
					<h4 class="text-lg">
						No offices to show!
					</h4>
				</div>
			</template>
			<office-item
				v-else
				v-for="office in officesList"
				:key="office.id"
				:office="office"
				:class="officeClass"
				@onDelete="onDelete(office.id)"
				@onChange="onChange"
			/>
		</div>
	</div>
</template>

<style></style>
