import DS from 'ember-data';
import Model from 'ember-data/model';
const { attr ,
hasMany }=DS;
export default DS.Model.extend({
	post:hasMany('post'),

	name: attr ('string'),
	email:  attr('string')

});
