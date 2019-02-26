import Route from  '@ember/routing/route';
import { set } from '@ember/object';
import { hash } from 'rsvp';
import Ember from 'ember';
export default Route.extend({
	model(params){
		return Ember.RSVP.hash({
			post: this.get('store').findRecord('post', params.id),
			comments: this.get('store').query('comment', {postId: params.id})
		})
	},
	setupController(controller, model){
        set(controller,'model',model);
		controller.set('post', model.post);
		controller.set('comments', model.comments);
	
},
});
// import Route from '@ember/routing/route';
// import { set } from '@ember/object';
// import { hash } from 'rsvp';
// import Ember from 'ember';
// export default Route.extend({
//   model(params){
//     return Ember.RSVP.hash({
//       album: this.get('store').findRecord('album', params.id),
//       photos: this.get('store').query('photo', {albumId: params.id})
//     })
//   },
//     setupController(controller, model){
//     set(controller,'model',model);
//     controller.set('album', model.album);
//     controller.set('photos', model.photos);
//   