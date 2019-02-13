import Ember from 'ember';
 const{ Route, set }=Ember;

export default Route.extend({
	model(params){
		
		return this.store.findRecord('photo', params.id);
      },
      setupController(controller, model){
		Ember.set(controller,'photo',model);
	}

});
