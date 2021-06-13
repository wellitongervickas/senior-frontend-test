<script>
import OfficeItem from '@/components/Offices/OfficeItem'

export default {
	name: 'OfficesControl',
	components: {
		OfficeItem,
	},
	props: {
		offices: {
		type: Array,
			default: () => []
		}
	}
}
</script>

<template>
	<div>
		<div>Add new location</div>
		<div v-for="office in offices" :key="office.id">
			<office-item :office="office" />
		</div>
	</div>
</template>

<style></style>
