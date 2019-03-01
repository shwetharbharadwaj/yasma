import DS from 'ember-data';
const { attr , hasMany, belongsTo }=DS;
export default DS.Model.extend({
	title:attr('string'),
	body: attr('string'),
	comment: hasMany('comment'),
	user: belongsTo('user')

});
