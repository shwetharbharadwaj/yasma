import DS from 'ember-data';
import Model from 'ember-data/model';
const{ attr ,belongsTo }=DS;
export default DS.Model.extend({
   photos :belongsTo('album'),

   title:attr('string'),
    thumbnailUrl:attr('string'),
    url:attr('string')

});
 