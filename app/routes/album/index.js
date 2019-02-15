import Ember from 'ember';
 const{ Route, set }=Ember;

export default Route.extend({
	model:function(params){
		
		return this.store.findAll('album'); 
			
	},
 
	actions:{
		redirect(album){
		 this.get('router').transitionTo('album.photo', album.id);
		}
	},
	 
});

