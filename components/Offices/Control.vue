<script>
import OfficeItem from '@/components/Offices/Item'

export default {
	name: 'Offices',
	components: {
		OfficeItem,
	},
	props: {
		offices: {
		type: Array,
			default: () => []
		}
	},
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
