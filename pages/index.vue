<script>
import Offices from '@/components/Offices/OfficesControl'
import officesList from '@/__mocks__/offices'

export default {
	name: 'Index',
	components: {
		Offices
	},
	data: () => ({
		offices: [...officesList]
	})
}
</script>

<template>
  	<div>
		<h1>Offices</h1>
		<offices :offices="offices" />
  	</div>
</template>

<style></style>
