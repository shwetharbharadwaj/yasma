import DS from 'ember-data';
const{ attr ,belongsTo }=DS;
export default DS.Model.extend({
   user:belongsTo('user'),
   
    name:attr('string'),
    userName:attr('string'),
    email:attr('string')
   

});