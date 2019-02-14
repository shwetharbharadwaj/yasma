import DS from 'ember-data';
import Model from 'ember-data/model';
const { attr , hasMany, belongsTo }=DS;
export default DS.Model.extend({
	title:attr('string'),
	body: attr('string'),
	comment: hasMany('comment'),
	user: belongsTo('user')

});
