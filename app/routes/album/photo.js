import Ember from 'ember';
 const{ Route, set }=Ember;

export default Route.extend({
	model(params){
		return Ember.RSVP.hash({
			album: this.get('store').findRecord('album', params.id),
			photos: this.get('store').query('photo', {albumId: params.id})
		})
	},
    setupController(controller, model){
    	debugger
		set(controller,'model',model);
		controller.set('album', model.album);
		controller.set('photos', model.photos);
	},
	actions:{
		display(photo){
           debugger
		 this.get('router').transitionTo('album.show', photo);

		}
	},
});
