import DS from 'ember-data';
const { attr ,belongsTo} = DS;
export default DS.Model.extend({
	comments: DS.hasMany('comment', {async: true}),
    body: attr('string'),
    name: attr('string'),
    email:attr('string'),
   

	post: belongsTo('post'), 

});
