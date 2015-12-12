Router.route('/', function () {
	this.next();
});
Router.route('friends', {
	path : "/friends",
	onBeforeAction: function () {
		Session.set("task_id",this.params._id);
		this.next();
	}
});