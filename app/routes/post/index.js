import Ember from 'ember'; 
 const{ Route, set }=Ember;

export default Route.extend({
	model(){
		return this.store.findAll('post');
	},
	setupController(controller, model){
		Ember.set(controller,'post',model);
	},

	actions: {
		move(post){
		
			this.get('router').transitionTo('post.comment', post.id);


		},
	}
   
});