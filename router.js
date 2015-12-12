Router.route('friends', {
	path : "/friends",
	onBeforeAction: function () {
		this.next();
	}
});
Router.route('/', {
	path : "/",
	onBeforeAction: function () {
		this.next();
	}
});