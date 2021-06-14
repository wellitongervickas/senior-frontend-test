const phone = {
	message: "This field must be phone",
	validate: value => {
		const regex = /^[0-9]{3}(-?)[0-9]{3}(-?)[0-9]{4}$/i;

		if (!regex.test(value)) {
			return phone.message;
		}

		return null;
	}
};

export default phone;
