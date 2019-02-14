import DS from 'ember-data';
import Model from 'ember-data/model';
const{ attr ,belongsTo }=DS;
export default DS.Model.extend({
   user:belongsTo('user'),
   
    name:attr('string'),
    userName:attr('string'),
    email:attr('string')
   

});