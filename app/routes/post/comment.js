import Ember from 'ember';
 const{ Route, set }=Ember;

export default Route.extend({
	model(params){
	 
		return this.store.query('comment', {
			postId: params.post_id
		});
      },

      setupController(controller, model){
		set(controller,'comment',model);
	}

});
