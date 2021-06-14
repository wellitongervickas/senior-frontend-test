const email = {
	message: "This field must be email",
	validate: value => {
		const regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i;

		if (!regex.test(value)) {
			return email.message;
		}

		return null;
	}
};

export default email;
