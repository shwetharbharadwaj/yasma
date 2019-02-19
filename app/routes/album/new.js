// import { hash } from 'rsvp';
// import Route from '@ember/routing/route';

// export default Route.extend({

//   model() {
//     return hash({
//       album:  this.store.findAll('album') ,
//       photo:  this.store.query('photo', {
// 			albumId: params.album_id
// 	}), 
//       show: this.store.findRecord('photo', params.id)
    
//   })
// },
// setupController(controller, model) {
//     set('album', model.album);
//     set('photo', model.photo);
//      set('model', model.show);
    
//     this._super(controller, model);
//  } 
//  });