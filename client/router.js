Router.route('/', {
	path : "/",
	onBeforeAction: function () {
		this.next();
	}
});