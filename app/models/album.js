import DS from 'ember-data';
import Model from 'ember-data/model';
const { attr ,belongsTo}=DS;
export default DS.Model.extend({
	userId: belongsTo('user'),
	title:attr('string')
	

});