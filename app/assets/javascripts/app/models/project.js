CATARSE.Project = Backbone.Model.extend({
  urlRoot: '/projects',
	initialize: function() {
		this.backers = new CATARSE.Backers()
		this.backers.url = '/' + CATARSE.locale + '/projects/' + this.id + '/backers'
	}
})
