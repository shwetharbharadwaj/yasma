import DS from 'ember-data';
const{ attr ,hasMany }=DS;
export default DS.Model.extend({
   album: hasMany('photos'),

   userId:attr('string'),
   title: attr('string')
});
