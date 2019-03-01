import DS from 'ember-data';
const{ attr ,belongsTo }=DS;
export default DS.Model.extend({
   photos :belongsTo('album'),
   
   albumId:attr('string'),
   title:attr('string'),
   thumbnailUrl:attr('string'),
    url:attr('string')

});
 