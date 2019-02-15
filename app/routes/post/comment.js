import Ember from 'ember';
 const{ Route, set }=Ember;

export default Route.extend({
	model(params){
		return Ember.RSVP.hash({
			post: this.get('store').findRecord('post', params.id),
			comments: this.get('store').query('comment', {postId: params.id})
		})
	},
	
     setupController(controller, model){
     
        set(controller,'model',model);
		controller.set('post', model.post);
		controller.set('comments', model.comments);
	
},
});
