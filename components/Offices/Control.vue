<script>
import OfficeItem from '@/components/Offices/Item'
import officesMap from '@/__mocks__/offices'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import officeGenerator from '@/components/Offices/utils/officeGenerator'

export default {
	name: 'Offices',
	components: {
		OfficeItem,
		FontAwesomeIcon,
	},
	data: () => ({
		offices: {...officesMap},
		showAddMoreButton: true,
	}),
	methods: {
		onDeleteOffice(id) {
			const newOffices = { ...this.offices }
			delete newOffices[id];

			this.showAddMoreButton = true;
			this.offices = newOffices
		},

		onUpdateOffice(office) {
			this.showAddMoreButton = true;
			this.offices = {
				...this.offices,
				[office.id]: office
			};
		},

		onAddNewOffice() {
			this.showAddMoreButton = false;
			this.offices = {
				...officeGenerator(),
				...this.offices,
			};
		}
	},
	computed: {
		officesList() {
			return Object.values(this.offices)
		},
	}
}
</script>

<template>
	<div class="offices my-6">
		<div class="office">
			<div v-if="showAddMoreButton" class="my-6">
				<button
					class="offices-add-new-button"
					type="button"
					@click="onAddNewOffice"
				>
					<span>Add New Location</span>
					<font-awesome-icon icon="plus" />
				</button>
			</div>
			<template v-if="!officesList.length" >
				<div class="offices-content offices-content--empty">
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
				class="offices-content mb-6"
				@onDeleteOffice="onDeleteOffice(office.id)"
				@onUpdateOffice="onUpdateOffice"
			/>
		</div>
	</div>
</template>
<style lang="scss" scoped>
	.offices {
		.offices-content {
			@apply shadow-lg rounded-lg bg-white w-72 min-w-full overflow-hidden;

			&.offices-content--empty {
				@apply text-center p-6 text-gray-400;
			}
		}

		.offices-add-new-button {
			@apply w-full bg-blue-light text-base text-white rounded-lg py-4 px-6 flex justify-between  items-center focus:outline-none
		}
	}
</style>
