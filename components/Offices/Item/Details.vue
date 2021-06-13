<script>
export default {
	name: 'OfficeDetails',
	props: {
		contact: Object
	}
}
</script>

<template>
	<div>
		<h2>Contact informations</h2>
		<div>{{contact.full_name}}</div>
		<div>{{contact.job_position}}</div>
		<div>{{contact.email}}</div>
		<div>{{contact.phonenumber}}</div>
	</div>
</template>

<style></style>
