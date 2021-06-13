<script>
import OfficeContact from '@/components/Offices/Item/Contact'
import OfficeSumary from '@/components/Offices/Item/Sumary'
import getFormValues from '@/components/Offices/utils/getFormValues'

export default {
	name: 'OfficesItem',
	components: {
		OfficeContact,
		OfficeSumary,
	},
	props: {
		office: Object
	},
	data: () => ({
		isToggled: false,
		isEditing: false,
	}),
	methods: {
		onChangeToggleStatus(bool) {
			this.isToggled = bool
		},

		onChangeEditingStatus(bool) {
			this.isEditing = bool
		},

		onChange(office) {
			this.onChangeEditingStatus(false)
			this.onChangeToggleStatus(false)

			this.$emit('onChange', office)
		},

		onSubmit(event) {
			const {
				title,
				address,
				full_name,
				job_position,
				email,
				phone
			} = getFormValues(event)


			this.onChange({
				...this.office,
				details: {
					title,
					address
				},
				contact: {
					full_name,
					job_position,
					email,
					phone
				}
			})
		},

		onDelete() {
			this.$emit('onDelete')
		}
	},
}
</script>

<template>
	<form @submit.prevent="onSubmit" class="office-item" novalidate="true">
		<office-sumary
			:id="office.id"
			:details="office.details"
			:is-editing="isEditing"
			:is-toggled="isToggled"
			@onChangeToggleStatus="onChangeToggleStatus"
			@onChangeEditingStatus="onChangeEditingStatus"

		/>
		<template v-if="isToggled">
			<office-contact
				:id="office.id"
				:contact="office.contact"
				:is-editing="isEditing"
			/>
			<div class="office-actions">
				<template v-if="!isEditing">
					<button
						type="button"
						@click="onChangeEditingStatus(true)"
					>
						Edit
					</button>
					<button
						type="button"
						@click="onDelete"
					>
						Delete
					</button>
				</template>
				<template v-else>
					<input type="submit" value="Save" />
				</template>
			</div>
		</template>
	</form>
</template>

<style></style>
