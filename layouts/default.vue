<template>
	<div class="h-auto flex items-center">
		<nuxt />
	</div>
</template>

<style lang="scss">
	body, html, #__nuxt, #__layout {
		@apply w-full h-full
	}

	body {
		@apply bg-gray-200;
	}

	#__layout {
		@apply grid place-items-center;
	}
</style>
