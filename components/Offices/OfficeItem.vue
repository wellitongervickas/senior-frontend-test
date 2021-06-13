<script>
import OfficeDetails from '@/components/Offices/OfficeItem/OfficeDetails'
import OfficeSumary from '@/components/Offices/OfficeItem/OfficeSumary'
import OfficeActions from '@/components/Offices/OfficeItem/OfficeActions'

export default {
	name: 'OfficesItem',
	components: {
		OfficeDetails,
		OfficeSumary,
		OfficeActions
	},
	props: {
		office: Object
	}
}
</script>

<template>
	<div>
		<office-sumary :details="office.details" />
		<office-details :contact="office.contact" />
		<office-actions />
	</div>
</template>

<style></style>
