<script>
import OfficeItem from '@/components/Offices/Item'
import { v4 as uuid } from 'uuid'
import officesList from '@/__mocks__/offices'

export default {
	name: 'Offices',
	components: {
		OfficeItem,
	},
	data: () => ({
		offices: [...officesList]
	}),
}
</script>

<template>
	<div class="offices">
		<div class="office">
			<office-item
				v-for="office in offices"
				:key="office.id"
				:office="office"
			/>
		</div>
	</div>
</template>

<style></style>
