import Ember from 'ember';
 const{ Route, set }=Ember;

export default Route.extend({
	model(params){
		
		return this.store.findRecord('comment', params.id);
      }
	// setupController(controller, model){
		
	// 	  // this._super(controller, model);
	// 	set(controller,'comment',model);
	// }
});
