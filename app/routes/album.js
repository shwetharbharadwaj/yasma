import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
	model(){
		return this.store.findAll('album');
	},
	 setupController(controller,model){
 
  	controller.set('model', model)

  }
});