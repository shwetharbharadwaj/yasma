import DS from 'ember-data';
import Model from 'ember-data/model'; 
 
  const { attr ,belongsTo} = DS;

    export default DS.Model.extend({
	 comment: belongsTo('post'),
    postId:attr('string'),
    body: attr('string'),
    email:attr('string'),
    website: attr('string')

});
