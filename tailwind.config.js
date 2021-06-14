module.exports = {
	mode: "jit",
	darkMode: false,
	theme: {
		ringColor: theme => ({
			...theme("colors"),
			"blue-light": "#47a6ba"
		}),
		textColor: theme => ({
			...theme("colors"),
			"blue-light": "#47a6ba"
		}),
		backgroundColor: theme => ({
			...theme("colors"),
			"blue-light": "#47a6ba"
		}),
		extend: {}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
