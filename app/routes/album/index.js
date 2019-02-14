import Ember from 'ember'; 
 const{ Route, set }=Ember;

export default Route.extend({
	model(){
		return this.store.findAll('album');
	},
	setupController(controller, model){
		Ember.set(controller,'album',model);
	},

	actions: {
		redirect(album){
		
			this.get('router').transitionTo('album.photo', album);


		},
	}
   
});
