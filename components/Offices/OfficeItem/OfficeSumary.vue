<script>
export default {
	name: 'OfficeSumary',
	props: {
		details: Object
	}
}
</script>

<template>
	<div>
		<div>
			<h2>location</h2>
			<div>close</div>
		</div>
		<div>
			<div>
				<h3>{{details.title}}</h3>
			</div>
			<div>{{details.address}}</div>
		</div>
		<div>arrow</div>
	</div>
</template>

<style></style>
