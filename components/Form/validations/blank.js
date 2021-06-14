const blank = {
	message: "This field cannot be empty",
	validate: value => {
		if ([null, undefined, ""].includes(value)) {
			return blank.message;
		}

		return null;
	}
};

export default blank;
