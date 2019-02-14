import DS from 'ember-data';
import Model from 'ember-data/model';
const{ attr ,hasMany }=DS;
export default DS.Model.extend({
   album: hasMany('photos'),

   userId:attr('string'),
   // id:attr('string'),
  title: attr('string')
});
