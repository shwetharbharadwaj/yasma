import Ember from 'ember';
 const{ Route, set }=Ember;

    export default Route.extend({

        model:function(params){
           return this.store.findRecord('photo', params.id);
	},
});
