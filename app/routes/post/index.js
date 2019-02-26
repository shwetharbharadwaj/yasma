import Route from '@ember/routing/route';
  export default Route.extend({
	model(){
	
		return this.store.findAll('post');
	},

	actions: {
		move(post){
		this.get('router').transitionTo('post.comment', post.id);
      }
	},
   
});
