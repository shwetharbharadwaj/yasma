import Ember from 'ember';
 const{ Route, set }=Ember;

export default Route.extend({
	model(params){
		
		return this.store.query('photo', {
			albumId: params.album_id
		});
   
      },
      setupController(controller, model){
		set(controller,'photo',model);
	}


});
