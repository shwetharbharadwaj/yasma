import DS from 'ember-data';
  export default DS.RESTSerializer.extend({
    normalizeResponse(store, primaryModelClass, payload, postId, requestType){
         payload = { comments: payload };
            return  this._super(store, primaryModelClass, payload, postId, requestType);
        }
});